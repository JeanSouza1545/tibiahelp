interface SelectOption {
    value: string
    label: string
}

interface SelectProps {
    value: string
    options: SelectOption[]
    onChange?: (value: string) => void
}

import style from './Select.module.css'

const Select = ({ value, options, onChange }: SelectProps) => {
    return (
        <select
            className={style.select}
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
