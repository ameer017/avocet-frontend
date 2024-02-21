import { useLayoutEffect } from 'react';

function ScrollToTopOnMount() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;
