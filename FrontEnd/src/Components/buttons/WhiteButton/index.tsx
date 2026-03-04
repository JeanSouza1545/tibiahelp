import type {ComponentProps} from 'react'

import style from './button.module.css'

type WhiteButton = ComponentProps<'button'>

const WhiteButton = ({children, className, ...rest}: WhiteButton) => {
    return (
        <button className={`${style.button} ${className ?? ''}`} {...rest}>
            {children}
        </button>
    )
}

export default WhiteButton