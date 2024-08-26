import '../public/css/App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import { Otro } from './Components/Otro'

export function App() {

    // Custom hook
    // Recupera la cita al cargar la página
    // Return un fact y una función
    const { fact, refreshFact } = useCatFact()

    // Custom hook
    // Recupera una imagen cada vez que tenemos una cita nueva
    // Return https://...'
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the three first words for ${fact}`} />}

            {/* <Otro /> */}
        </main>
    )
}