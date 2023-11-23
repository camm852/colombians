import React from 'react';
import { TIconProps } from '../react-app-env';

const WomanIcon: React.FC<TIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`w-7 ${className}`}>
      <path
        fill="currentColor"
        d="M9 1.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019 1.5zM11.234 8L12 7.445 9.917 4.224a.5.5 0 00-.417-.225h-4a.497.497 0 00-.417.225L3 7.445 3.766 8l1.729-2.244.601 1.402-2.095 3.841h1.917l.333 5h1v-5h.5v5h1l.333-5h1.917L8.906 7.157l.601-1.402 1.729 2.244z"
      />
    </svg>
  );
};

export default WomanIcon;
