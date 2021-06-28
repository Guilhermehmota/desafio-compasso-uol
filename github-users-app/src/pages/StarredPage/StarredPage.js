import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import StarredCard from "../../components/StarredCard/StarredCard"
import { MainContainer } from "../../styled"
import { Header, Title } from "./styled"
import Button from '@material-ui/core/Button'
import { goBack } from "../../routes/coordinator"

const StarredPage = () => {

    const history = useHistory()

    const { username } = useParams()

    const [starred, setStarred] = useState([])


    useEffect(() => {
        getStarred()
    }, [])

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const starredList = starred && starred.map((starred) => {
        return (
            <StarredCard
                key={starred.id}
                name={starred.name}
                description={starred.description}
            >
            </StarredCard>
        )
    })
    return (
        <MainContainer>
            <Header>
                <Title>Repositórios estrelados</Title>
                <Button onClick={() => goBack(history)} variant="contained" color="primary" >voltar</Button>
            </Header>
            {starred[0] ? starredList : <Title>Nenhum repositório encontrado</Title>}
        </MainContainer>
    )
}

export default StarredPage