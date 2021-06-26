import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { goBack } from "../../routes/coordinator"
import { MainContainer } from "../../styled"
import Button from '@material-ui/core/Button';
import { Header, Title } from "./styled"
import RepoCard from "../../components/RepoCard/RepoCard"


const ReposPage = () => {
    const {username} = useParams()
    const [repos, setRepos] = useState([])

    const history = useHistory()

    useEffect(() => {
        getRepos()
    }, [])

    const getRepos = async () => {
        try {
            const repos = await axios.get(`${BASE_URL}/${username}/repos`)
            setRepos(repos.data)
            // console.log(repos.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const reposList = repos && repos.map((repo) => {
        const date = repo.created_at.split("T")
        const splittedDate = date[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

        return (
            <RepoCard 
                key={repo.id}
                repoName={repo.name}
                description={repo.description}
                createdAt={correctedDate}
                >
            </RepoCard>
        )
    })

    return(
        <MainContainer>
            <Header>
                <Title>Repositórios</Title>
                <Button onClick={() => goBack(history)} variant="contained" color="primary" >voltar</Button>
            </Header>            
            {reposList}            
        </MainContainer>
    )
}

export default ReposPage