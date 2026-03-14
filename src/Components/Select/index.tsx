import { useState, useRef, useEffect } from 'react'
import style from './Select.module.css'

interface SelectOption {
    value: string
    label: string
}

interface SelectProps {
    value: string
    options: SelectOption[]
    onChange?: (value: string) => void
    className?: string
}

const Select = ({ value, options, onChange, className }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const selected = options.find((opt) => opt.value === value) ?? options[0]
    const longestLabel = options.reduce(
        (a, b) => (a.label.length > b.label.length ? a : b),
        options[0] ?? { label: '' }
    ).label

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={wrapperRef} className={`${style.wrapper} ${className ?? ''}`.trim()}>
            <span className={style.ruler} aria-hidden="true">
                {longestLabel}
            </span>
            <button
                type="button"
                className={`${style.trigger} ${isOpen ? style.triggerOpen : ''}`.trim()}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={style.triggerContent}>
                    <span className={style.triggerLabel}>{selected.label}</span>
                </span>
            </button>
            {isOpen && (
                <ul
                    className={style.dropdown}
                    role="listbox"
                    aria-activedescendant={value}
                >
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            className={`${style.option} ${opt.value === value ? style.selected : ''}`}
                            onClick={() => {
                                onChange?.(opt.value)
                                setIsOpen(false)
                            }}
                        >
                            <span className={style.optionLabel}>{opt.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Select
