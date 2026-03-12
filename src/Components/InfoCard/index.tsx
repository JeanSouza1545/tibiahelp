import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'
import style from './InfoCard.module.css'

interface InfoCardProps {
    icon?: IconType
    iconColor?: string
    title: string
    value: string | ReactNode
    valueColor?: string
    subtitle?: string
    variant?: 'default' | 'result'
}

const InfoCard = ({ icon: Icon, iconColor, title, value, valueColor, subtitle, variant = 'default' }: InfoCardProps) => {
    const cardClass = variant === 'result' ? `${style.card} ${style.cardResult}` : style.card

    return (
        <div className={cardClass}>
            {Icon && (
                <div className={style.iconContainer} style={iconColor ? { backgroundColor: iconColor } : undefined}>
                    <Icon color="white" size={24} />
                </div>
            )}
            <h3 className={style.title}>{title}</h3>
            <p className={style.value} style={valueColor ? { color: valueColor } : undefined}>{value}</p>
            {subtitle && <p className={style.subtitle}>{subtitle}</p>}
        </div>
    )
}

export default InfoCard
