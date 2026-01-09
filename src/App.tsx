import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='min-h-dvh bg-surface'>
      <Header />
      <Outlet />

      {/* Cambiar el modo oscuro - por el momento queda oculto hasta implementarlo */}
      <button onClick={toggleTheme} className='hidden p-5 bg-surface-inverse text-content-inverse'>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>

    </div>
  );
}

export default App;