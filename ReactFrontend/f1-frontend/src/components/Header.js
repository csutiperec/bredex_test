import Login from './Login';
import '../styling/Header.css'
import logo from '../assets/f1_logo.png'
import Logo from './Logo'
import NewTeamButton from './NewTeamButton'

const Header = () => {
    return (
        <header className='header-container'>
            <Logo src={logo} alt='F1Logo'/>
            <NewTeamButton />
            <Login />
        </header>
    )
}
export default Header;
