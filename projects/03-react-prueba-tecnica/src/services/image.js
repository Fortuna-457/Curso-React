export const getRandomImage = async (threeFirstWords) => {
    const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)

    if (!res.ok) throw new Error('Error fetching image')

    const data = await res.json()
    const { _id } = data
    const url = `/cat/${_id}/says/${threeFirstWords}?width=400&height=400`

    return url
}