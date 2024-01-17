import { useState, useEffect, FormEvent } from 'react'
import * as C from './Gallery.styles'
import * as Images from '../services/images'
import { Image } from '../types/Image'
import ImageItem from '../components/ImageItem'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Gallery = () => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<Image[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    getImages()
  }, [])

  async function getImages() {
    setLoading(true)
    setImages(await Images.getAll())
    setLoading(false)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const file = data.get('file') as File;

    if(file && file.size > 0) {
      setUploading(true)
      const result = await Images.insert(file)
      setUploading(false)

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newImageList = [...images]
        newImageList.push(result)
        setImages(newImageList)
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Imagens</C.Header>

        <C.UploadFile method='POST' onSubmit={handleSubmit}>
          <input type='file' name='file'/>
          {uploading && <C.LoadingImg><AiOutlineLoading3Quarters /></C.LoadingImg>}
          <input type='submit' value='Enviar'/>
        </C.UploadFile>

        {loading &&
          <C.Info>
            <C.LoadingImg><AiOutlineLoading3Quarters /></C.LoadingImg>
            <div>Carregando...</div>
          </C.Info>
        }

        {!loading && images.length > 0 && 
          <C.ImageList>
            {images.map((i, index) => (
              <ImageItem key={index} name={i.name} url={i.url}  />
            ))}
          </C.ImageList>
        }

        {!loading && images.length == 0 && 
          <C.Info>
          <div>Não há imagens cadastradas</div>
        </C.Info>
        }
      </C.Area>
    </C.Container>
  )
}

export default Gallery