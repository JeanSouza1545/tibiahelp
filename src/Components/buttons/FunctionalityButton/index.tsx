import type { IconType } from "react-icons";

interface FunctionalityButtonProps {
    Icon: IconType
    title: string
    description: string
    iconSize?: number
    iconColor?: string
    backgroundIcon?: string
}

import style from './FunctionalityButton.module.css'

const FunctionalityButton = ({Icon, title, description, backgroundIcon}: FunctionalityButtonProps) => {
    return(
        <button type="button" className={style.button} aria-label={title}>
            <div className={style.iconContainer} style={{backgroundColor: `${backgroundIcon}`}}>
                <Icon color="white" size={45} />
            </div>
            <span className={style.title}>{title}</span>
            <p className={style.description}>{description}</p>
        </button>
    )
}

export default FunctionalityButton