import React from 'react';

interface InputProps {
  type: 'text' | 'date' | 'number';
  className?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const Input = ({
  type,
  className,
  name,
  placeholder,
  required,
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
