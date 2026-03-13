import style from './ProgressBar.module.css'

interface ProgressBarProps {
    leftLabel: string
    rightLabel: string
    current: number
    target: number
    subtitle?: string
}

const ProgressBar = ({ leftLabel, rightLabel, current, target, subtitle }: ProgressBarProps) => {
    const percentage = target > 0 ? Math.min(100, Math.max(0, (current / target) * 100)) : 0

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
