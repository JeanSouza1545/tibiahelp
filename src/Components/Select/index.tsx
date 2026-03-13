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

import style from './Select.module.css'

const Select = ({ value, options, onChange, className }: SelectProps) => {
    return (
        <select
            className={`${style.select} ${className ?? ''}`.trim()}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    )
}

export default Select
