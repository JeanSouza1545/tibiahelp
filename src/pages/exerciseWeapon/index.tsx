import { useState } from 'react'
import {
    IoCalculator,
    IoStatsChart,
    IoFlashOutline,
    IoBulbOutline,
    IoLinkOutline,
    IoTimeOutline,
    IoTrendingUpOutline,
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
import style from './exerciseWeapon.module.css'

const TABS: TabItem[] = [
    { id: 'calculadora', label: 'Calculadora', icon: IoCalculator },
    { id: 'comparacao', label: 'Comparação', icon: IoStatsChart },
]


const WEAPON_OPTIONS = [
    { value: '1h', label: 'Exercise Weapon (1h) - 262.500 gp' },
]

const DICAS = [
    'Exercise weapons podem ser usadas offline, permitindo treinar enquanto não está jogando',
    'O Loyalty Bonus aumenta significativamente a eficiência do treinamento - quanto maior o bonus, melhor',
    'Weapons de maior duração (15min e 30min) têm melhor custo-benefício em skills mais altos',
    'Treine em um dummy ou monk para maximizar a utilização das charges',
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
                            <div className={style.configCard}>
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
                                    <FormField label="Skill Atual">
                                        <div className={style.skillInputWrapper}>
                                            <Input
                                                type="number"
                                                min={0}
                                                max={999}
                                                step={1}
                                                value={skillCurrent}
                                                onChange={handleSkillCurrentChange}
                                                inputMode="numeric"
                                            />
                                        </div>
                                    </FormField>
                                    <FormField label="Percentual">
                                        <div className={style.percentualInputWrapper}>
                                            <Input
                                                type="number"
                                                min={0}
                                                max={100}
                                                step={0.01}
                                                value={percentual}
                                                onChange={handlePercentualChange}
                                            />
                                        </div>
                                    </FormField>
                                    <FormField label="Skill Desejado">
                                        <div className={style.skillInputWrapper}>
                                            <Input
                                                type="number"
                                                min={0}
                                                max={999}
                                                step={1}
                                                value={skillTarget}
                                                onChange={handleSkillTargetChange}
                                                inputMode="numeric"
                                            />
                                        </div>
                                    </FormField>
                                </div>
                                <FormField label={`Loyalty Bonus: ${loyaltyBonus}%`}>
                                    <Slider
                                        value={loyaltyBonus}
                                        min={0}
                                        max={50}
                                        onChange={setLoyaltyBonus}
                                    />
                                </FormField>
                                <FormField label="Tipo de Exercise Weapon">
                                    <Select
                                        value="1h"
                                        options={WEAPON_OPTIONS}
                                    />
                                </FormField>
                                <ProgressBar
                                    leftLabel={`Skill ${skillCurrent}`}
                                    rightLabel={`Skill ${skillTarget}`}
                                    current={skillCurrent}
                                    target={skillTarget}
                                    subtitle={`+${Math.max(0, skillTarget - skillCurrent)} levels para treinar`}
                                />
                            </div>
                        </section>

                        <section className={style.resultsSection}>
                            <InfoCard
                                icon={IoLinkOutline}
                                iconColor="#F54B00"
                                title="Custo Total"
                                value="1.516.200.000 gp"
                                valueColor="#F54B00"
                                subtitle="75.810.000 gp por skill"
                                variant="result"
                            />
                            <InfoCard
                                icon={IoTimeOutline}
                                iconColor="#0091C2"
                                title="Tempo Total"
                                value="240d 16h 0m"
                                valueColor="#0091C2"
                                subtitle="5.776 weapons necessárias"
                                variant="result"
                            />
                            <InfoCard
                                icon={IoTrendingUpOutline}
                                iconColor="#F0165D"
                                title="Hits Necessários"
                                value="2.887.571"
                                valueColor="#F0165D"
                                variant="result"
                            />
                        </section>
                    </div>

                    <section className={style.detalhamentoSection}>
                        <SectionTitle>Detalhamento</SectionTitle>
                        <div className={style.detalhamentoCards}>
                            <InfoCard
                                title="Weapon Selecionada"
                                value="Exercise Weapon (1h)"
                                subtitle="500 charges"
                            />
                            <InfoCard
                                title="Skill Points Necessários"
                                value="2.887.570"
                                subtitle="pontos de progresso"
                            />
                            <InfoCard
                                title="Duração por Weapon"
                                value="60 min"
                                subtitle="de treinamento offline"
                            />
                            <InfoCard
                                title="Loyalty Bonus Ativo"
                                value={`${loyaltyBonus}%`}
                                subtitle="skill gain extra"
                            />
                        </div>
                    </section>

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
