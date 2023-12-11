'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  type?: 'submit' | 'button';
  className?: string;
  label: string;
  onClick?: () => void;
};

const Button = ({ type, className, label, onClick }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      type={type}
      className={className}
      aria-disabled={pending}
      onClick={onClick}
    >
      {pending ? `${label}ing` : label}
    </button>
  );
};

export default Button;
