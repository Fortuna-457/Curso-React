import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // Recupera la cita al cargar la página
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}