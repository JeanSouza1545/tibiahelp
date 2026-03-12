import style from './Slider.module.css'

interface SliderProps {
    label?: string
    value: number
    min: number
    max: number
    onChange?: (value: number) => void
}

const Slider = ({ label, value, min, max, onChange }: SliderProps) => {
    return (
        <div className={style.container}>
            {label && <span>{label}</span>}
            <input
                type="range"
                className={style.slider}
                value={value}
                min={min}
                max={max}
                onChange={(e) => onChange?.(Number(e.target.value))}
            />
        </div>
    )
}

export default Slider
