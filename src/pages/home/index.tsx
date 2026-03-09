import style from "./home.module.css"
import OrangeButton from "../../Components/buttons/OrangeButton"
import WhiteButton from "../../Components/buttons/WhiteButton"
import FuncionalityButton from "@/Components/buttons/FunctionalityButton"

import { IoSearch, IoMapOutline, IoCalculator, IoLibrary } from "react-icons/io5";

const Home = () => {
    return(
        <div className={style.mainContainer}>
            <h1 className={style.homeTitle}>
                Bem-vindo ao TibiaHelp
            </h1>
            <p className={style.titleDesc}>
                Sua fonte completa de ajuda para Tibia! Ferramentas, guias e recursos <br/>para melhorar sua experiência no jogo.
            </p>
            <nav className={style.navContainer}>
                <OrangeButton className={style.toolsButton}> Explorar Ferramentas </OrangeButton>
                <WhiteButton className={style.guidesButton}> Ver Guias </WhiteButton>
            </nav>
            <div className={style.funcionalitiesContainer} >
                <nav className={style.funcionalitiesNavigation}>
                    <h2 className={style.funcionalitiesTitle}>Principais Funcionalidades</h2>
                    <div className={style.optionContainer}>
                        <FuncionalityButton Icon={IoSearch} title="Buscar Quests" description="Encontre informações detalhadas sobre todas as quests do Tibia" />
                        <FuncionalityButton Icon={IoMapOutline} title="Mapa Interativo" description="Navegue por mapas detalhados de todas as regiões de Tibia" backgroundIcon="#0091C2" />
                        <FuncionalityButton Icon={IoCalculator} title="Calculadora" description="Calcule dano, experiência e otimize seu personagem" backgroundIcon="#F0165D"/>
                        <FuncionalityButton Icon={IoLibrary} title="Guias" description="Aprenda todas as mecânicas e estratégias do jogo" backgroundIcon="#00BB59"/>
                    </div>
                </nav>
            </div>
            <div className={style.aboutContainer}>
                <section className={style.aboutSection}>
                    <h2 className={style.aboutTitle}>Sobre o TibiaHelp</h2>
                    <p className={style.abountContent}>
                        O TIBIAHELP é uma plataforma de estudo desenvolvida para auxiliar jogadores de Tibia em todas as suas aventuras. Aqui você encontrará ferramentas essenciais, guias detalhados e informações atualizadas sobre o mundo de Tibia.
                        <br/><br/>
                        Nossa missão é fornecer recursos de qualidade que facilitem o aprendizado das mecânicas do jogo, ajudem no planejamento de quests e otimizem sua experiência como jogador.
                        <br/><br/>
                        Seja você um iniciante ou um veterano, o TIBIAHELP oferece conteúdo valioso para todos os níveis de experiência.                    
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Home