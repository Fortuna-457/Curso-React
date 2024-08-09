import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernández',
        initialIsFollowing: false
    },
    {
        userName: 'goncy',
        name: 'Nico García',
        initialIsFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, initialIsFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName} // Identificador único que indica a React qué es qué
                            userName={userName}
                            name={name}
                            initialIsFollowing={initialIsFollowing}
                        />
                    )
                })
            }
        </section>
    )
}