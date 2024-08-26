const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

/* export const getRandomFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => {
            if (!res.ok) throw new Error('Error fetching fact')
            return res.json()
        })
        .then(data => {
            // const { fact } = data es equivalente a const fact = data.fact
            const { fact } = data
            return fact
        })
        .catch((error) => {
            // Tanto si hay error en la respuesta, como si lo hay en la petición
            console.error(error)
        })
} */