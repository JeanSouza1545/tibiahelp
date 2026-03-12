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
import FormField from '@/Components/FormField'
import Select from '@/Components/Select'
import Input from '@/Components/Input'
import Slider from '@/Components/Slider'
import ProgressBar from '@/Components/ProgressBar'
import style from './exerciseWeapon.module.css'

const TABS: TabItem[] = [
    { id: 'calculadora', label: 'Calculadora', icon: IoCalculator },
    { id: 'comparacao', label: 'Comparação', icon: IoStatsChart },
]

const SKILL_TYPE_OPTIONS = [
    { value: 'melee', label: 'Melee (Sword/Axe/Club)' },
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

    return (
        <div className={style.mainContainer}>
            <header className={style.pageHeader}>
                <h1 className={style.pageTitle}>
                    Calculadora de Exercise Weapons
                </h1>
                <p className={style.tagline}>
                    Planeje seu treinamento de skills e otimize seus recursos
                </p>
            </header>

            <Tabs tabs={TABS} activeId={activeTab} onChange={setActiveTab} />

            {activeTab === 'calculadora' && (
                <>
                    <div className={style.contentGrid}>
                        <section className={style.configSection}>
                            <SectionTitle icon={IoFlashOutline}>
                                Configuração de Treinamento
                            </SectionTitle>
                            <div className={style.configCard}>
                                <FormField label="Tipo de Skill">
                                    <Select
                                        value="melee"
                                        options={SKILL_TYPE_OPTIONS}
                                    />
                                </FormField>
                                <FormField label="Skill Atual">
                                    <Input value="80" readOnly />
                                </FormField>
                                <FormField label="Loyalty Bonus: 0%">
                                    <Slider value={0} min={0} max={50} />
                                </FormField>
                                <FormField label="Tipo de Exercise Weapon">
                                    <Select
                                        value="1h"
                                        options={WEAPON_OPTIONS}
                                    />
                                </FormField>
                                <FormField label="Skill Desejado">
                                    <Input value="100" readOnly />
                                </FormField>
                                <ProgressBar
                                    leftLabel="Skill 80"
                                    rightLabel="Skill 100"
                                    progress={0.2}
                                    subtitle="+20 levels para treinar"
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
                                value="0%"
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
