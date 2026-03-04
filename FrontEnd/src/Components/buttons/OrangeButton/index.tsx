import type {ComponentProps} from 'react'

import style from './button.module.css'

type OrangeButton = ComponentProps<'button'>

const OrangeButton = ({children, className, ...rest}: OrangeButton) => {
    return (
        <button className={`${style.button} ${className ?? ''}`} {...rest}>
            {children}
        </button>
    )
}

export default OrangeButton