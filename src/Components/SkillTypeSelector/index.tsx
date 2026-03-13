import { useState, useRef, useEffect } from 'react'
import style from './SkillTypeSelector.module.css'

export type SkillType = 'melee' | 'fist' | 'distance' | 'magic' | 'shield'

export interface SkillTypeOption {
    value: SkillType
    label: string
    icon: string
}

const SKILL_TYPE_OPTIONS: SkillTypeOption[] = [
    {
        value: 'melee',
        label: 'Sword / Axe / Club',
        icon: 'https://www.tibiawiki.com.br/images/d/db/Lasting_Exercise_Sword.gif',
    },
    {
        value: 'fist',
        label: 'Fist',
        icon: 'https://www.tibiawiki.com.br/images/1/12/Lasting_Exercise_Wraps.gif',
    },
    {
        value: 'distance',
        label: 'Distance',
        icon: 'https://www.tibiawiki.com.br/images/7/7c/Lasting_Exercise_Bow.gif',
    },
    {
        value: 'magic',
        label: 'Magic Level',
        icon: 'https://www.tibiawiki.com.br/images/3/31/Lasting_Exercise_Rod.gif',
    },
    {
        value: 'shield',
        label: 'Shield',
        icon: 'https://www.tibiawiki.com.br/images/3/39/Lasting_Exercise_Shield.gif',
    },
]

interface SkillTypeSelectorProps {
    value: SkillType
    onChange: (value: SkillType) => void
    className?: string
}

const SkillTypeSelector = ({ value, onChange, className }: SkillTypeSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const selected = SKILL_TYPE_OPTIONS.find((opt) => opt.value === value) ?? SKILL_TYPE_OPTIONS[0]
    const longestLabel =
        SKILL_TYPE_OPTIONS.reduce((a, b) => (a.label.length > b.label.length ? a : b)).label

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
                <span className={style.rulerIcon} />
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
                    <img src={selected.icon} alt="" className={style.triggerIcon} />
                    <span className={style.triggerLabel}>{selected.label}</span>
                </span>
            </button>
            {isOpen && (
                <ul
                    className={style.dropdown}
                    role="listbox"
                    aria-activedescendant={value}
                >
                    {SKILL_TYPE_OPTIONS.map((opt) => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            className={`${style.option} ${opt.value === value ? style.selected : ''}`}
                            onClick={() => {
                                onChange(opt.value)
                                setIsOpen(false)
                            }}
                        >
                            <img src={opt.icon} alt="" className={style.optionIcon} />
                            <span className={style.optionLabel}>{opt.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export { SKILL_TYPE_OPTIONS }
export default SkillTypeSelector
