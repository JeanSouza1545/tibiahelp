import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'
import style from './InfoCard.module.css'

interface InfoCardProps {
    icon?: IconType
    iconImage?: string
    iconColor?: string
    iconPosition?: 'top' | 'right'
    title: string
    value: string | ReactNode
    valueColor?: string
    subtitle?: string
    variant?: 'default' | 'result'
}

const InfoCard = ({ icon: Icon, iconImage, iconColor, iconPosition = 'top', title, value, valueColor, subtitle, variant = 'default' }: InfoCardProps) => {
    const cardClass = variant === 'result' ? `${style.card} ${style.cardResult}` : style.card
    const hasIcon = Icon || iconImage
    const iconRight = iconPosition === 'right' && hasIcon

    return (
        <div className={`${cardClass} ${iconRight ? style.cardIconRight : ''}`}>
            {iconRight ? (
                <>
                    <div className={style.cardContent}>
                        <h3 className={style.title}>{title}</h3>
                        <p className={style.value} style={valueColor ? { color: valueColor } : undefined}>{value}</p>
                        {subtitle && <p className={style.subtitle}>{subtitle}</p>}
                    </div>
                    <div className={style.iconContainerRight}>
                        {iconImage ? (
                            <img src={iconImage} alt="" className={style.iconImageRight} />
                        ) : Icon ? (
                            <Icon color="white" size={32} />
                        ) : null}
                    </div>
                </>
            ) : (
                <>
                    {hasIcon && (
                        <div className={style.iconContainer} style={iconColor ? { backgroundColor: iconColor } : undefined}>
                            {iconImage ? (
                                <img src={iconImage} alt="" className={style.iconImage} />
                            ) : Icon ? (
                                <Icon color="white" size={24} />
                            ) : null}
                        </div>
                    )}
                    <h3 className={style.title}>{title}</h3>
                    <p className={style.value} style={valueColor ? { color: valueColor } : undefined}>{value}</p>
                    {subtitle && <p className={style.subtitle}>{subtitle}</p>}
                </>
            )}
        </div>
    )
}

export default InfoCard
