import { describe, it, expect, vi, beforeEach } from 'vitest';
import { scrollToSection } from './scroll';

describe('scrollToSection', () => {
  beforeEach(() => {
    // Clear all mocks
    vi.clearAllMocks();
    document.body.innerHTML = '';
    
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
    
    // Mock document.getElementById
    const mockElement = document.createElement('div');
    mockElement.id = 'test-section';
    // Use defineProperty to mock getBoundingClientRect
    Object.defineProperty(mockElement, 'getBoundingClientRect', {
      configurable: true,
      value: vi.fn(() => ({
        top: 500, // Distance from viewport top
      })),
    });
    
    document.body.appendChild(mockElement);
    
    // Mock document.body.getBoundingClientRect
    Object.defineProperty(document.body, 'getBoundingClientRect', {
      configurable: true,
      value: vi.fn(() => ({
        top: 0, // Assume body is at top
      })),
    });
  });

  it('should call window.scrollTo with the correct coordinates and behavior', () => {
    scrollToSection('#test-section', { offset: 100 });
    
    // Expected calculation: (element.top: 500 - body.top: 0) - offset: 100 = 400
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 400,
      behavior: 'smooth'
    });
  });

  it('should call onComplete callback if provided', () => {
    const onComplete = vi.fn();
    scrollToSection('#test-section', { onComplete });
    
    expect(onComplete).toHaveBeenCalled();
  });

  it('should use default offset (80) if none provided', () => {
    scrollToSection('#test-section');
    
    // 500 - 80 = 420
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 420,
      behavior: 'smooth'
    });
  });
  
  it('should not call scrollTo if element is not found', () => {
    scrollToSection('#non-existent');
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
