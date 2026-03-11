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
}

const FunctionalityButton = ({Icon, title, description, to, backgroundIcon, iconSize = 45}: FunctionalityButtonProps) => {
    return (
        <Link to={to} className={style.link} aria-label={title}>
            <div className={style.iconContainer} style={backgroundIcon ? { backgroundColor: backgroundIcon } : undefined}>
                <Icon color="white" size={iconSize} />
            </div>
            <span className={style.title}>{title}</span>
            <p className={style.description}>{description}</p>
        </Link>
    );
}

export default FunctionalityButton