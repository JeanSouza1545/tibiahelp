
import style from './footer.module.css'

const GeneralFooter = () => {
    return(
        <footer className={style.footerContainer}>
            <p className={style.footerText}>
                &copy; 2026 TibiaHelp - Sua fonte de ajuda para Tibia.
            </p>
            <p className={style.smallFooterText}>
                Este site não é afiliado com a CipSoft.
            </p>
        </footer>
    )
}

export default GeneralFooter