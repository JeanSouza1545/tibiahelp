import FormField from '@/Components/FormField'
import style from './BonusSelector.module.css'

const BONUS_OPTIONS = [
    {
        id: 'dummy',
        label: 'Dummy',
        icon: 'https://www.tibiawiki.com.br/images/0/0f/Ferumbras_Exercise_Dummy.gif',
    },
    {
        id: 'doubleXp',
        label: 'Double XP',
        icon: 'https://www.tibiawiki.com.br/images/4/40/XP_Boost_Icon.gif',
    },
] as const

export interface BonusSelection {
    dummy: boolean
    doubleXp: boolean
}

interface BonusSelectorProps {
    value: BonusSelection
    onChange: (value: BonusSelection) => void
}

const BonusSelector = ({ value, onChange }: BonusSelectorProps) => {
    const handleToggle = (id: 'dummy' | 'doubleXp') => {
        onChange({
            ...value,
            [id]: !value[id],
        })
    }

    return (
        <FormField label="Bônus">
            <div className={style.group} role="group" aria-label="Selecione os bônus">
                {BONUS_OPTIONS.map((option) => {
                    const isChecked = value[option.id]
                    return (
                        <label
                            key={option.id}
                            className={`${style.option} ${isChecked ? style.selected : ''}`}
                        >
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleToggle(option.id)}
                                className={style.input}
                            />
                            <span className={style.iconWrapper}>
                                <img src={option.icon} alt="" className={style.icon} />
                            </span>
                            <span className={style.label}>{option.label}</span>
                        </label>
                    )
                })}
            </div>
        </FormField>
    )
}

export default BonusSelector
