import { IoWarningOutline } from "react-icons/io5";
import logo from "@/Media/logo.png"

import style from './notFound.module.css'
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className={style.notFoundContainer}>
            <img src={logo} className={style.logo}></img>
            <div className={style.notFoundIconContainer}>
                <IoWarningOutline size={70}/>
            </div>
            <h1 className={style.notFoundTitle}>
                404
            </h1>
            <p>
                Página movida ou não encontrada!
            </p>
            <Link to="/home" className={style.homeLink}>
                Voltar para Home
            </Link>
        </div>
    )
}

export default NotFound
