import logo from '@/Media/logo.png'
import { IoLogInOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { Link } from 'react-router-dom'
import OrangeButton from '../buttons/OrangeButton'
import { useTheme } from '@/contexts/ThemeContext'

import style from './generalHeader.module.css'

const GeneralHeader = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className={style.generalHeaderContainer}>
            <Link to={'/'} className={style.logoContainer}>
                <img className={style.logoImg} src={logo} alt="Logo TibiaHelp"/>
            </Link>
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
