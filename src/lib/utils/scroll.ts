export interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  onComplete?: () => void;
}

/**
 * Smoothly scrolls to a DOM element by its ID.
 * @param href The target ID string (e.g., "#portfolio")
 * @param options Custom scroll options (offset, behavior, callback)
 */
export const scrollToSection = (href: string, options: ScrollOptions = {}) => {
  const { offset = 80, behavior = 'smooth', onComplete } = options;
  const id = href.replace('#', '');
  const element = document.getElementById(id);

  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: behavior
    });
    
    if (onComplete) {
      onComplete();
    }
  }
};

/**
 * Event handler for anchor links that perform smooth scrolling.
 * @param e The mouse event from the anchor tag
 * @param href The target ID string
 * @param options Custom scroll options
 */
export const handleScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>,
  href: string,
  options: ScrollOptions = {}
) => {
  e.preventDefault();
  scrollToSection(href, options);
};
