'use client'
import React, { createContext, useContext, useEffect } from 'react';
import { handleTheme } from '../../utils/handleTheme';
import themes from '../themes'

interface ThemeContextValue {
  themeName: ThemeName;
  getSurface: (key: SurfaceKey) => Surface;
  logo: string;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeName: ThemeName = process.env.NEXT_PUBLIC_DEFAULT_THEME as ThemeName || 'wpp'
  const theme = themes[themeName]
  const logo = `/assets/${themeName}.png`;
  
  useEffect(() => {
    handleTheme(theme)
  }, [theme])

  const getSurface = (key: SurfaceKey) => theme.colors.brand[key]

  return (
    <ThemeContext.Provider value={{ themeName, getSurface, logo }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}