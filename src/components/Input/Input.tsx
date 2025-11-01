import { useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'password' | 'number'; 
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
}

export function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  clearable = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  let inputType: 'text' | 'password' | 'number' = type;

  if (type === 'password') {
    if (showPassword) {
      inputType = 'text';
    } else {
      inputType = 'password';
    }
  }

  const handleClear = () => onChange('');

  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />

      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={
            clearable
              ? `${styles.toggleBtn} ${styles.toggleBtnWithClear}`
              : styles.toggleBtn
          }
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? '👁️' : '🙈'}
        </button>
      )}

      {clearable && value && (
        <button
          type="button"
          onClick={handleClear}
          className={styles.clearBtn}
          aria-label="Clear input"
        >
          ×
        </button>
      )}
    </div>
  );
}
