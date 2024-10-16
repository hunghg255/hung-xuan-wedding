'use client';

import { useEffect } from 'react';

const AosComponent = () => {
  useEffect(() => {
    const t = setTimeout(() => {
      const data = document.querySelectorAll('[data-aos]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate-show');
              observer.unobserve(entry.target); // Unobserve after animation
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
        },
      );

      data.forEach((item) => {
        observer.observe(item);
      });
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return <></>;
};

export default AosComponent;
