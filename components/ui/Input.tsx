import React from 'react';

interface InputProps {
  type: 'text' | 'date' | 'number' | 'hidden';
  className?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  className,
  name,
  placeholder,
  required,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
