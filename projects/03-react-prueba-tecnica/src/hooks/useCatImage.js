import { getRandomImage } from '../services/image'
import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')

        getRandomImage(threeFirstWords).then(newImage => setImageUrl(newImage))
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}