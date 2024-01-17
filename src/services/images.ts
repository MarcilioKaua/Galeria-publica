import { Image } from '../types/Image'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as generateId } from 'uuid'

export const getAll = async () => {
    let list: Image[] = []

    const imagesFolder = ref(storage, 'images')
    const imageList = await listAll(imagesFolder)

    for (let i in imageList.items) {
        let imageUrl = await getDownloadURL(imageList.items[i])

        list.push({
            name: imageList.items[i].name,
            url: imageUrl
        })
    }

    return list
}

export const insert = async (file: File) => {
    if(['image/png', 'image/jpg', 'image/jpeg', 'image/svg', 'image/webp'].includes(file.type)) {
        let newFile = ref(storage, `images/${file.name}`)
        const upload = await uploadBytes(newFile, file)
        const imageUrl = await getDownloadURL(upload.ref)
        return { name: file.name, url: imageUrl } as Image
    } else {
        return new Error('Sem suporte para o tipo de arquivo selecionado')
    }
}
