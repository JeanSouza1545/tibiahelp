import logo from '@/Media/logo.png'
import { IoCalculator, IoLogInOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { Link, useLocation } from 'react-router-dom'
import OrangeButton from '../buttons/OrangeButton'
import { useTheme } from '@/contexts/ThemeContext'

import style from './generalHeader.module.css'

const GeneralHeader = () => {
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()
    const isExerciseWeapon = location.pathname === '/exercise-weapon'

    return (
        <header className={style.generalHeaderContainer}>
            <div className={style.leftSection}>
                <Link to={'/'} className={style.logoContainer}>
                    <img className={style.logoImg} src={logo} alt="Logo TibiaHelp"/>
                </Link>
            </div>
            {isExerciseWeapon && (
                <div className={style.centerSection}>
                    <IoCalculator className={style.pageIcon} size={20} />
                    <span className={style.pageTitle}>Exercise Weapons Calculator</span>
                </div>
            )}
            <nav className={style.optionContainer}>
                <button
                    type="button"
                    className={style.themeToggle}
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
                >
                    {theme === 'dark' ? <IoSunnyOutline size={22} /> : <IoMoonOutline size={22} />}
                </button>
                <OrangeButton className={style.userButton}>
                    <IoLogInOutline size={20} /> Login
                </OrangeButton>
            </nav>
        </header>
    )
}

export default GeneralHeader
