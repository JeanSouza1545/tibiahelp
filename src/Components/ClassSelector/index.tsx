import FormField from '@/Components/FormField'
import style from './ClassSelector.module.css'

const CLASS_OPTIONS = [
    { value: 'knight', label: 'Knight', icon: 'https://www.tibiawiki.com.br/images/b/b5/Grand_Sanguine_Razor.gif' },
    { value: 'druid', label: 'Druid', icon: 'https://www.tibiawiki.com.br/images/c/c9/Grand_Sanguine_Rod.gif' },
    { value: 'sorcerer', label: 'Sorcerer', icon: 'https://www.tibiawiki.com.br/images/0/08/Grand_Sanguine_Coil.gif' },
    { value: 'paladin', label: 'Paladin', icon: 'https://www.tibiawiki.com.br/images/3/3a/Grand_Sanguine_Bow.gif' },
    { value: 'monk', label: 'Monk', icon: 'https://www.tibiawiki.com.br/images/3/38/Grand_Sanguine_Claws.gif' },
] as const

export type CharacterClass = (typeof CLASS_OPTIONS)[number]['value']

interface ClassSelectorProps {
    value: CharacterClass
    onChange: (value: CharacterClass) => void
}

const ClassSelector = ({ value, onChange }: ClassSelectorProps) => {
    return (
        <FormField label="Classe">
            <div className={style.group} role="radiogroup" aria-label="Selecione a classe">
                {CLASS_OPTIONS.map((option) => (
                    <label
                        key={option.value}
                        className={`${style.option} ${value === option.value ? style.selected : ''}`}
                    >
                        <input
                            type="radio"
                            name="characterClass"
                            value={option.value}
                            checked={value === option.value}
                            onChange={() => onChange(option.value)}
                            className={style.input}
                        />
                        <span className={style.iconWrapper}>
                            <img src={option.icon} alt="" className={style.icon} />
                        </span>
                        <span className={style.label}>{option.label}</span>
                    </label>
                ))}
            </div>
        </FormField>
    )
}

export default ClassSelector
