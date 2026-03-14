import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'tibiahelp-theme'

interface ThemeContextValue {
    theme: Theme
    toggleTheme: (buttonRef?: React.RefObject<HTMLButtonElement | null>, duration?: number) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'dark'
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark') return stored
    return 'dark'
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = useCallback((buttonRef?: React.RefObject<HTMLButtonElement | null>, duration = 400) => {
        const applyTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

        const button = buttonRef?.current
        if (!button || typeof document.startViewTransition !== 'function') {
            applyTheme()
            return
        }

        const { top, left, width, height } = button.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const viewportWidth = window.visualViewport?.width ?? window.innerWidth
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight
        const maxRadius = Math.hypot(
            Math.max(x, viewportWidth - x),
            Math.max(y, viewportHeight - y)
        )

        document.startViewTransition(() => {
            flushSync(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')))
        }).ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration,
                    easing: 'ease-in-out',
                    pseudoElement: '::view-transition-new(root)',
                }
            )
        })
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
