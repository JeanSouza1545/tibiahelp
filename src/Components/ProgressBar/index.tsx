import style from './ProgressBar.module.css'

interface ProgressBarProps {
    leftLabel: string
    rightLabel: string
    progress: number
    subtitle?: string
}

const ProgressBar = ({ leftLabel, rightLabel, progress, subtitle }: ProgressBarProps) => {
    const percentage = Math.min(100, Math.max(0, progress * 100))

    return (
        <div className={style.container}>
            <div className={style.labels}>
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
            </div>
            <div className={style.track}>
                <div className={style.fill} style={{ width: `${percentage}%` }} />
            </div>
            {subtitle && <p className={style.subtitle}>{subtitle}</p>}
        </div>
    )
}

export default ProgressBar
