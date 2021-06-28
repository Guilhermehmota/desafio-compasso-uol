import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const Header = styled.header`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const Title = styled.h2`
    color: ${primaryColor};
    display: flex;
    justify-content: center;
    padding: 10px;
`
export const ProfileImage = styled.img`
    width: 200px;
    border-radius: 30%;
`
export const ContainerBio = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
`
export const Name = styled.h2`
    letter-spacing: 2px;
    color: ${primaryColor}
`
export const Bio = styled.h4`
    color: white;
`
export const DivButtons = styled.div`
    display: flex;
    gap: 10px;
`
export const DivFollow = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
`