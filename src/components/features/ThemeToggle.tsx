'use client';

import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}
