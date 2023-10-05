import { createContext, useState } from 'react'

export const SwitchThemeContext = createContext()

export const ThemeSwitchProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return <SwitchThemeContext.Provider value={{ theme, setTheme }}>{children}</SwitchThemeContext.Provider>
}
