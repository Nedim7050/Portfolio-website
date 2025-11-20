import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Letter M with serifs */}
      <path
        d="M 15 80 L 15 25 L 18 20 L 22 20 L 30 20 L 35 25 L 35 45 L 50 30 L 65 45 L 65 25 L 70 20 L 78 20 L 82 20 L 85 25 L 85 80 L 75 80 L 75 50 L 50 75 L 25 50 L 25 80 Z"
        fill="#0ea5e9"
      />
      {/* Swoosh - flowing curve through the M */}
      <path
        d="M 22 75 Q 35 50, 50 50 Q 65 50, 78 75"
        stroke="#d4a574"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

