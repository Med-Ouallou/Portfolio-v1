import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../theme/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-foreground/5"
    >
      {isDark ? (
        <FiSun className="h-4 w-4" aria-hidden />
      ) : (
        <FiMoon className="h-4 w-4" aria-hidden />
      )}
    </button>
  )
}
