import { useState } from 'react';
import { Input } from './components/Input/Input';
import { Toast } from './components/Toast/Toast';
import {
  SidebarMenu,
  type SidebarItem,
} from './components/SideBarMenu/SideBarMenu';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { label: 'Dashboard' },
    {
      label: 'Products',
      submenu: [{ label: 'All Products' }, { label: 'Add Product' }],
    },
    {
      label: 'Settings',
      submenu: [{ label: 'Profile' }, { label: 'Security' }],
    },
  ];

  return (
    <div className="appContainer">
      <Input
        type="text"
        value={text}
        onChange={setText}
        clearable
        placeholder="Enter"
      />
      <Input
        type="password"
        value={password}
        onChange={setPassword}
        clearable
        placeholder="Enter password"
      />

      <button onClick={() => setShowToast(true)}>Show Toast</button>

      {showToast && (
        <Toast
          message="This is a toast"
          type="info"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}

      <button onClick={() => setSidebarOpen((prev) => !prev)}>
        Toggle Sidebar
      </button>

      <SidebarMenu
        items={sidebarItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}

export default App;