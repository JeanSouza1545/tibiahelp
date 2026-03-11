import { IoWarningOutline, IoHome  } from "react-icons/io5";
import logo from "@/Media/logo.png"

import style from './notFound.module.css'
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className={style.notFoundContainer}>
            <img src={logo} className={style.logo} alt="Logo TibiaHelp"/>
            <div className={style.notFoundIconContainer}>
                <IoWarningOutline size={70}/>
            </div>
            <h1>
                404
            </h1>
            <p>
                Página movida ou não encontrada!
            </p>
            <Link to="/home" className={style.homeLink}>
                <IoHome /> Voltar para Home
            </Link>
        </div>
    )
}

export default NotFound
