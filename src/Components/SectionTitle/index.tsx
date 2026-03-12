import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'
import style from './SectionTitle.module.css'

interface SectionTitleProps {
    children: ReactNode
    icon?: IconType
}

const SectionTitle = ({ children, icon: Icon }: SectionTitleProps) => {
    return (
        <h2 className={style.title}>
            {Icon && (
                <span className={style.icon}>
                    <Icon color="var(--title-text-color)" size={24} />
                </span>
            )}
            {children}
        </h2>
    )
}

export default SectionTitle
