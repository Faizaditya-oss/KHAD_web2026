import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      import('aos').then(AOS => AOS.default.refresh());
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
