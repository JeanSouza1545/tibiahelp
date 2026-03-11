import logo from '@/Media/logo.png'
import { IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import OrangeButton from '../Buttons/OrangeButton'

import style from './generalHeader.module.css'

const GeneralHeader = () => {
    return(
        <header className={style.generalHeaderContainer}>
            <Link to={'/'} className={style.logoContainer}>
                <img className={style.logoImg} src={logo} alt="Logo TibiaHelp"/>
            </Link>
            <nav className={style.optionContainer}>
                <OrangeButton className={style.userButton}>
                    <IoLogInOutline size={20} /> Login
                </OrangeButton>
            </nav>
        </header>
    )
}

export default GeneralHeader
