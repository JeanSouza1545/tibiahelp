import style from './Input.module.css'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
}

const Input = (props: InputProps) => {
    return <input className={style.input} {...props} />
}

export default Input
