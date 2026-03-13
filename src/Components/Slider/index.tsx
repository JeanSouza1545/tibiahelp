import style from './Slider.module.css'

const MARKS = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

interface SliderProps {
    label?: string
    value: number
    min: number
    max: number
    step?: number
    onChange?: (value: number) => void
}

const THUMB_RADIUS = 9

const Slider = ({ label, value, min, max, step = 5, onChange }: SliderProps) => {
    const getMarkPosition = (markValue: number) => {
        if (max <= min) return 0
        return (markValue - min) / (max - min)
    }

    const visibleMarks = MARKS.filter((m) => m >= min && m <= max)

    return (
        <div className={style.container}>
            {label && <span>{label}</span>}
            <div className={style.trackWrapper}>
                <input
                    type="range"
                    className={style.slider}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => onChange?.(Number(e.target.value))}
                />
                <div className={style.markers}>
                    {visibleMarks.map((markValue) => {
                        const proportion = getMarkPosition(markValue)
                        return (
                        <span
                            key={markValue}
                            className={style.marker}
                            style={{
                                left: `calc(${THUMB_RADIUS}px + (100% - ${THUMB_RADIUS * 2}px) * ${proportion})`,
                            }}
                        >
                            <span className={style.markerLine} />
                            <span className={style.markerLabel}>{markValue}%</span>
                        </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Slider
