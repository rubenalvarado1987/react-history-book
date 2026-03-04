import { useState } from 'react';
import './InputField.css';

type InputType = 'text' | 'password' | 'textarea' | 'search' | 'number' | 'email';
type Variant = 'primary' | 'success' | 'warning' | 'danger';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: InputType;
  variant?: Variant;
  prefixIcon?: string;
  suffixIcon?: string;
  rows?: number;
  error?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  name?: string;
}

const iconMap: Record<string, string> = {
  account_circle: '👤',
  mail: '📧',
  lock: '🔒',
  search: '🔍',
};

export default function InputField({
  label,
  placeholder,
  type = 'text',
  variant = 'primary',
  prefixIcon,
  rows = 3,
  error,
  value,
  onChange,
  name,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type === 'textarea' ? undefined : type;

  return (
    <div className={`input-field input-${variant} ${error ? 'input-error' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {prefixIcon && (
          <span className="input-prefix">{iconMap[prefixIcon] ?? prefixIcon}</span>
        )}
        {type === 'textarea' ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
            value={value as string}
            onChange={e => onChange?.(e.target.value)}
            className="input-element"
          />
        ) : (
          <input
            name={name}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange?.(e.target.value)}
            className="input-element"
          />
        )}
        {type === 'password' && (
          <button
            type="button"
            className="input-suffix"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {error && <span className="input-error-msg">{error}</span>}
    </div>
  );
}
