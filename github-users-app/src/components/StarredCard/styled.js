import styled from 'styled-components'
import { darkColor, lighColor } from '../../constants/colors'

export const StarredContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    border-radius: 6px;
    margin-top: 20px;
    background-color: ${lighColor};
    border: 1px solid white;
    padding: 5px 20px;
`
export const Title = styled.h3`
    color: ${darkColor};
`
export const Description = styled.p`
    color: ${darkColor};
`