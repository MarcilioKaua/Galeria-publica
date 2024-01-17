import * as S from './styles'

type Props = {
    name: string
    url: string 
}

function ImageItem({ name, url } : Props) {
    return(
        <S.Container>
            <img src={url} alt={`image-${name}`} />
            {name}
        </S.Container>
    )
}

export default ImageItem