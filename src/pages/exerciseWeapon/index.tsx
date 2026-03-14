import { useState } from 'react'
import {
    IoCalculator,
    IoStatsChart,
    IoFlashOutline,
    IoBulbOutline,
} from 'react-icons/io5'
import Tabs, { type TabItem } from '@/Components/Tabs'
import InfoCard from '@/Components/InfoCard'
import SectionTitle from '@/Components/SectionTitle'
import ClassSelector, { type CharacterClass } from '@/Components/ClassSelector'
import BonusSelector, { type BonusSelection } from '@/Components/BonusSelector'
import FormField from '@/Components/FormField'
import SkillTypeSelector, { type SkillType } from '@/Components/SkillTypeSelector'
import Select from '@/Components/Select'
import Input from '@/Components/Input'
import Slider from '@/Components/Slider'
import ProgressBar from '@/Components/ProgressBar'
import OrangeButton from '@/Components/buttons/OrangeButton'
import style from './exerciseWeapon.module.css'

const TABS: TabItem[] = [
    { id: 'calculadora', label: 'Calculadora', icon: IoCalculator },
    { id: 'comparacao', label: 'Comparação', icon: IoStatsChart },
]


const WEAPON_OPTIONS = [
    { value: 'auto', label: 'Auto' },
    { value: '500', label: '500 Cargas (16 Min)' },
    { value: '1800', label: '1800 Cargas (1 Horas)' },
    { value: '14400', label: '14400 Cargas (8 Horas)' },
]

const DICAS = [
    'Exercise weapons podem ser usadas offline, permitindo treinar enquanto não está jogando',
    'O Loyalty Bonus aumenta significativamente a eficiência do treinamento - quanto maior o bonus, melhor',
    'Dummy privados aumentam em 10% o rendimento do treinamento',
    'Se o valor do tibia coin for menor que 13800 é melhor comprar as exercise weapons na store'
]

const ExerciseWeapon = () => {
    const [activeTab, setActiveTab] = useState('calculadora')
    const [characterClass, setCharacterClass] = useState<CharacterClass>('knight')
    const [bonusSelection, setBonusSelection] = useState<BonusSelection>({
        dummy: false,
        doubleXp: false,
    })
    const [loyaltyBonus, setLoyaltyBonus] = useState(0)
    const [skillType, setSkillType] = useState<SkillType>('melee')
    const [skillCurrent, setSkillCurrent] = useState(80)
    const [skillTarget, setSkillTarget] = useState(100)
    const [percentual, setPercentual] = useState<number>(0)
    const [weaponType, setWeaponType] = useState<string>('auto')

    const handleSkillCurrentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val === '') {
            setSkillCurrent(0)
            return
        }
        const num = parseInt(val, 10)
        if (!Number.isNaN(num) && num >= 0 && num <= 999) {
            setSkillCurrent(num)
        }
    }

    const handleSkillTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val === '') {
            setSkillTarget(0)
            return
        }
        const num = parseInt(val, 10)
        if (!Number.isNaN(num) && num >= 0 && num <= 999) {
            setSkillTarget(num)
        }
    }

    const handlePercentualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (val === '') {
            setPercentual(0)
            return
        }
        const num = parseFloat(val.replace(',', '.'))
        if (!Number.isNaN(num) && num >= 0 && num <= 100) {
            setPercentual(Math.round(num * 100) / 100)
        }
    }

    return (
        <div className={style.mainContainer}>
            <header className={style.pageHeader}>
                <h1 className={style.pageTitle}>
                    Calculadora de Exercise Weapons
                </h1>
                <div className={style.taglineRow}>
                    <p className={style.tagline}>
                        Planeje seu treinamento de skills e otimize seus recursos
                    </p>
                    <span
                        className={style.constructionBadge}
                        role="status"
                        onClick={() => alert('Em Construção')}
                    >
                        Em Construção
                    </span>
                </div>
            </header>

            <Tabs tabs={TABS} activeId={activeTab} onChange={setActiveTab} />

            {activeTab === 'calculadora' && (
                <>
                    <div className={style.contentGrid}>
                        <section className={style.configSection}>
                            <form className={style.configCard} onSubmit={(e) => e.preventDefault()}>
                                <div className={style.configCardTitle}>
                                    <SectionTitle icon={IoFlashOutline}>
                                        Configuração de Treinamento
                                    </SectionTitle>
                                </div>
                                <div className={style.classAndBonusRow}>
                                    <ClassSelector
                                        value={characterClass}
                                        onChange={setCharacterClass}
                                    />
                                    <BonusSelector
                                        value={bonusSelection}
                                        onChange={setBonusSelection}
                                    />
                                </div>
                                <div className={style.skillFieldsRow}>
                                    <FormField label="Tipo de Skill">
                                        <SkillTypeSelector
                                            value={skillType}
                                            onChange={setSkillType}
                                            className={style.skillTypeSelect}
                                        />
                                    </FormField>
                                    <FormField label="Tipo de Exercise Weapon">
                                        <Select
                                            value={weaponType}
                                            options={WEAPON_OPTIONS}
                                            onChange={setWeaponType}
                                            className={style.weaponTypeSelect}
                                        />
                                    </FormField>
                                    <FormField label="Skill Atual">
                                        <Input
                                            type="number"
                                            min={0}
                                            max={999}
                                            step={1}
                                            value={skillCurrent}
                                            onChange={handleSkillCurrentChange}
                                            inputMode="numeric"
                                        />
                                    </FormField>
                                    <FormField label="Percentual">
                                        <Input
                                            type="number"
                                            min={0}
                                            max={100}
                                            step={0.01}
                                            value={percentual}
                                            onChange={handlePercentualChange}
                                        />
                                    </FormField>
                                    <FormField label="Skill Desejado">
                                        <Input
                                            type="number"
                                            min={0}
                                            max={999}
                                            step={1}
                                            value={skillTarget}
                                            onChange={handleSkillTargetChange}
                                            inputMode="numeric"
                                            />
                                    </FormField>
                                </div>
                                <FormField label={`Loyalty Bonus: ${loyaltyBonus}%`}>
                                    <div className={style.sliderWithButton}>
                                        <Slider
                                            value={loyaltyBonus}
                                            min={0}
                                            max={50}
                                            onChange={setLoyaltyBonus}
                                        />
                                        <OrangeButton
                                            type="button"
                                            onClick={() => alert('Calculo em construção')}
                                            className={style.calcularButton}
                                        >
                                            Calcular
                                        </OrangeButton>
                                    </div>
                                </FormField>
                                <ProgressBar
                                    leftLabel={`Skill ${skillCurrent}`}
                                    rightLabel={`Skill ${skillTarget}`}
                                    current={skillCurrent}
                                    target={skillTarget}
                                    subtitle={`+${Math.max(0, skillTarget - skillCurrent)} levels para treinar`}
                                />
                            </form>
                        </section>

                        <section className={style.resultsSection}>
                            <InfoCard
                                iconImage="https://www.tibiawiki.com.br/images/b/b0/Gold_Coin.gif"
                                iconPosition="right"
                                title="Custo Total"
                                value="1.516.200.000 gp"
                                valueColor="#F59E0B"
                                subtitle="75.810.000 gp por skill"
                                variant="result"
                            />
                            <InfoCard
                                iconImage="https://www.tibiawiki.com.br/images/5/58/Pendulum_Clock.gif"
                                iconPosition="right"
                                title="Tempo Total"
                                value="240d 16h 0m"
                                valueColor="#0091C2"
                                subtitle="5.776 cargas necessárias"
                                variant="result"
                            />
                            <div className={style.weaponsCard}>
                                <h3 className={style.weaponsCardTitle}>Weapons necessárias</h3>
                                <div className={style.weaponsCardColumns}>
                                    <div className={style.weaponsColumn}>
                                        <img
                                            src="https://www.tibiawiki.com.br/images/e/e8/Exercise_Rod.gif"
                                            alt="Regular"
                                            className={style.weaponsColumnIcon}
                                        />
                                        <span className={style.weaponsColumnLabel}>Regular</span>
                                        <span className={style.weaponsColumnQty}>2x</span>
                                    </div>
                                    <div className={style.weaponsColumn}>
                                        <img
                                            src="https://www.tibiawiki.com.br/images/3/3e/Durable_Exercise_Rod.gif"
                                            alt="Durable"
                                            className={style.weaponsColumnIcon}
                                        />
                                        <span className={style.weaponsColumnLabel}>Durable</span>
                                        <span className={style.weaponsColumnQty}>1x</span>
                                    </div>
                                    <div className={style.weaponsColumn}>
                                        <img
                                            src="https://www.tibiawiki.com.br/images/3/31/Lasting_Exercise_Rod.gif"
                                            alt="Lasting"
                                            className={style.weaponsColumnIcon}
                                        />
                                        <span className={style.weaponsColumnLabel}>Lasting</span>
                                        <span className={style.weaponsColumnQty}>0x</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className={style.dicasSection}>
                        <SectionTitle icon={IoBulbOutline}>Dicas</SectionTitle>
                        <div className={style.dicasCard}>
                            <ul className={style.dicasList}>
                                {DICAS.map((dica, i) => (
                                    <li key={i}>{dica}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </>
            )}

            {activeTab === 'comparacao' && (
                <div className={style.placeholder}>
                    <p>Em breve</p>
                </div>
            )}
        </div>
    )
}

export default ExerciseWeapon
