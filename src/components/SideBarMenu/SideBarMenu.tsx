import { useState } from 'react';
import styles from './SideBarMenu.module.css';

export interface SidebarItem {
  label: string;
  submenu?: SidebarItem[];
}

export interface SidebarMenuProps {
  items: SidebarItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

export function SidebarMenu({
  items,
  isOpen = false,
  onClose,
}: SidebarMenuProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.sidebarBackdrop} onClick={onClose}>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={styles.menuItem}
                onClick={() => item.submenu && toggleSubmenu(index)}
              >
                {item.label}
                {item.submenu && (
                  <span className={styles.arrow}>
                    {openIndexes.includes(index) ? '▾' : '▸'}
                  </span>
                )}
              </div>
              {item.submenu && openIndexes.includes(index) && (
                <ul className={styles.submenu}>
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className={styles.menuItem}>
                      {sub.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
