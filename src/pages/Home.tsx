import * as S from './Home.styles'
import { Link } from 'react-router-dom';

function Home() {
    return(
        <S.Container>
            <h1>Bem-vindo ao <span>GP</span></h1>
            <p>Comece publicar a suas fotos!</p>
            <Link to='/gallery'><button>Publicar Foto</button></Link>
        </S.Container>
    )
}

export default Home;