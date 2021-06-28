import React from "react"
import { MainContainer } from "../../styled"
import octoCat from "../../img/octoCat.png"
import {OctocatImg, Title} from "./styled"
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import { goToInitialPage } from "../../routes/coordinator"
import { CircularProgress } from "@material-ui/core"

const ErrorPage = () => {

    const history = useHistory()

    return(
        <MainContainer>
            <Title>Ops! Esta página não existe =(</Title>
            {octoCat? <OctocatImg src={octoCat}/> :  <CircularProgress color="primary"/>}
            <Button type="submit" variant="contained" color="primary" onClick={() => goToInitialPage(history)}>voltar a para página inicial</Button>
        </MainContainer>
    )
}

export default ErrorPage