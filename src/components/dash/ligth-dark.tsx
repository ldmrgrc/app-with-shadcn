'use client';
import React from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export function DarkTheme() {
  const [open, setOpen] = React.useState(false);
  const { setTheme, theme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setOpen(!open);
  };
  React.useEffect(() => {
    if (theme === 'dark') {
      setOpen(true);
    }
  }
  , [theme]);
  
  return (
    <div className="flex items-center space-x-2" onClick={handleTheme}>
      <Switch id="airplane-mode" checked={open} />
      <Label htmlFor="airplane-mode" className="sr-only">
        Dark Mode
      </Label>
    </div>
  );
}
