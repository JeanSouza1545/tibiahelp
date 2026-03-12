import type { IconType } from 'react-icons'
import style from './Tabs.module.css'

export interface TabItem {
    id: string
    label: string
    icon?: IconType
}

interface TabsProps {
    tabs: TabItem[]
    activeId: string
    onChange: (id: string) => void
}

const Tabs = ({ tabs, activeId, onChange }: TabsProps) => {
    return (
        <div className={style.tabs} role="tablist">
            {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = tab.id === activeId
                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={isActive ? `${style.tab} ${style.tabActive}` : style.tab}
                        onClick={() => onChange(tab.id)}
                    >
                        {Icon && <Icon size={20} />}
                        {tab.label}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs
