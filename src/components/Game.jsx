import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

export default function Game({ name, released, image }) {
    return (
        <StyledGame>
            <h2>{name}</h2>
            <p>{released}</p>
            <img src={image} alt="" />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`;
