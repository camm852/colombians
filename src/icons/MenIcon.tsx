import React from 'react';
import { TIconProps } from '../react-app-env';

const MenIcon: React.FC<TIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`w-7 ${className}`}>
      <path
        fill="currentColor"
        d="M9 1.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 019 1.5zM9 4H6a1 1 0 00-1 1v5h1v6h1.25v-6h.5v6H9v-6h1V5a1 1 0 00-1-1z"
      />
    </svg>
  );
};

export default MenIcon;
