import type { ReactNode } from 'react'
import style from './FormField.module.css'

interface FormFieldProps {
    label: string
    children: ReactNode
}

const FormField = ({ label, children }: FormFieldProps) => {
    return (
        <div className={style.field}>
            <label className={style.label}>{label}</label>
            {children}
        </div>
    )
}

export default FormField
