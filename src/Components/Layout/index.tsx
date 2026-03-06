import { Outlet } from 'react-router-dom'
import GeneralHeader from '../GeneralHeader'
import GeneralFooter from '../GeneralFooter'

const Layout = () => {
    return (
        <>
            <GeneralHeader />
            <Outlet />
            <GeneralFooter />
        </>
    )
}

export default Layout