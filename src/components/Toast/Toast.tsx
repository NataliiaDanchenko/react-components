import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

export function Toast({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}: ToastProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      setShow(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button
        className={styles.closeBtn}
        onClick={() => {
          setShow(false);
          onClose?.();
        }}
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  );
}

