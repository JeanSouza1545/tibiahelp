import style from "./home.module.css"
import OrangeButton from "../../Components/buttons/OrangeButton"
import WhiteButton from "../../Components/buttons/WhiteButton"
import FunctionalityButton from "@/Components/buttons/FunctionalityButton"

import { IoSearch, IoMapOutline, IoCalculator, IoLibrary } from "react-icons/io5";

const Home = () => {
    return(
        <div className={style.mainContainer}>
            <h1 className={style.homeTitle}>
                Bem-vindo ao TibiaHelp
            </h1>
            <p className={style.titleDesc}>
                Sua fonte completa de ajuda para Tibia! Ferramentas, guias e recursos para melhorar sua experiência no jogo.
            </p>
            <nav className={style.navContainer}>
                <OrangeButton className={style.toolsButton} onClick={() => alert('Em Breve')}>
                    Explorar Ferramentas
                </OrangeButton>
                <WhiteButton className={style.guidesButton} onClick={() => alert('Em Breve')}>
                    Ver Guias
                </WhiteButton>
            </nav>

            <nav className={style.funcionalityNavigation}>
                <h2 className={style.funcionalityTitle}>Principais Funcionalidades</h2>
                <div className={style.optionContainer}>
                    <FunctionalityButton Icon={IoSearch} title="Buscar Quests" description="Encontre informações detalhadas sobre todas as quests do Tibia" to="/" iconSize={54} comingSoon />
                    <FunctionalityButton Icon={IoMapOutline} title="Mapa Interativo" description="Navegue por mapas detalhados de todas as regiões de Tibia" backgroundIcon="#0091C2" to="/" comingSoon />
                    <FunctionalityButton Icon={IoCalculator} title="Calculadora" description="Calcule dano, experiência e otimize seu personagem" backgroundIcon="#F0165D" to="/exercise-weapon"/>
                    <FunctionalityButton Icon={IoLibrary} title="Guias" description="Aprenda todas as mecânicas e estratégias do jogo" backgroundIcon="#00BB59" to="/" comingSoon />
                </div>
            </nav>

            <div className={style.aboutContainer}>
                <section className={style.aboutSection}>
                    <h2 className={style.aboutTitle}>Sobre o TibiaHelp</h2>
                    <p className={style.aboutContent}>
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