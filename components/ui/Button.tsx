'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
  type: 'submit' | 'button';
  className?: string;
  label: string;
}

const Button = ({ type, className, label }: ButtonProps) => {
  //TODO: verify why this pending is not working
  const { pending } = useFormStatus();
  return (
    <button type={type} className={className} aria-disabled={pending}>
      {label}
    </button>
  );
};

export default Button;
