'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  type: 'submit' | 'button';
  className?: string;
  label: string;
};

const Button = ({ type, className, label }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button type={type} className={className} aria-disabled={pending}>
      {pending ? `${label}ing` : label}
    </button>
  );
};

export default Button;
