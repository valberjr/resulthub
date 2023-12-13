'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  type?: 'submit' | 'button';
  className?: string;
  label: any;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ type, className, label, disabled, onClick }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      type={type}
      className={className}
      disabled={disabled ?? pending}
      aria-disabled={pending}
      onClick={onClick}
    >
      {pending ? `${label}ing` : label}
    </button>
  );
};

export default Button;
