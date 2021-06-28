import styled from 'styled-components'
import { darkColor } from "./constants/colors"

export const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    justify-content: flex-start;
    background-color: ${darkColor};
`


