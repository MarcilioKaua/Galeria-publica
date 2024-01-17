import { Link } from "react-router-dom"
import * as S from './styles'
import logo from '../img/logo.png'

function Navbar() {
    return (
        <S.Navbar>
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='gallery'>Galeria</Link></li>
            </ul>
        </S.Navbar>
    )
}

export default Navbar