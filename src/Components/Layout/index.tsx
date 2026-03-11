import { Outlet } from 'react-router-dom'
import GeneralHeader from '../GeneralHeader'
import GeneralFooter from '../GeneralFooter'
import style from './layout.module.css'

const Layout = () => {
    return (
        <div className={style.layout}>
            <header className={style.header}>
                <GeneralHeader />
            </header>
            <main className={style.main}>
                <Outlet />
            </main>
            <footer className={style.footer}>
                <GeneralFooter />
            </footer>
        </div>
    )
}

export default Layout