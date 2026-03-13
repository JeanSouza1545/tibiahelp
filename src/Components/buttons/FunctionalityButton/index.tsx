import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

import style from './FunctionalityButton.module.css'

interface FunctionalityButtonProps {
    Icon: IconType
    title: string
    description: string
    to: string
    iconSize?: number
    iconColor?: string
    backgroundIcon?: string
    comingSoon?: boolean
}

const FunctionalityButton = ({Icon, title, description, to, backgroundIcon, iconSize = 45, comingSoon = false}: FunctionalityButtonProps) => {
    const handleComingSoonClick = () => {
        alert('Em Breve')
    }

    const content = (
        <>
            {comingSoon && <span className={style.comingSoon}>Em Breve</span>}
            <div className={style.iconContainer} style={backgroundIcon ? { backgroundColor: backgroundIcon } : undefined}>
                <Icon color="white" size={iconSize} />
            </div>
            <span className={style.title}>{title}</span>
            <p className={style.description}>{description}</p>
        </>
    )

    if (comingSoon) {
        return (
            <div
                role="button"
                tabIndex={0}
                onClick={handleComingSoonClick}
                onKeyDown={(e) => e.key === 'Enter' && handleComingSoonClick()}
                className={style.link}
                aria-label={title}
            >
                {content}
            </div>
        )
    }

    return (
        <Link to={to} className={style.link} aria-label={title}>
            {content}
        </Link>
    )
}

export default FunctionalityButton