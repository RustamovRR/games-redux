import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import loadGames from '../redux/actions/gamesAction'
import Game from '../components/Game'

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGames())
    }, [])

    const { popular, newGames, upcoming } = useSelector((state) => state.games)

    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {
                    upcoming?.map((game) => (
                        <Game
                            id={game.id}
                            key={game.id}
                            name={game.name}
                            released={game.released}
                            image={game.background_image}
                        />
                    ))
                }
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 1rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;