import axios from "axios"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import { goToInitialPage, goToRepos, goToStarred } from "../../routes/coordinator"
import { MainContainer } from "../../styled"
import Button from '@material-ui/core/Button';
import { Header, Title, ProfileImage, ContainerBio, Bio, DivButtons, Name } from './styled'

const ProfilePage = () => {

    const history = useHistory()

    const { username } = useParams()
    const [profile, setProfile] = useState({})
    const [starred, setStarred] = useState([])

    useEffect(() => {
        getProfile()
        getStarred()
    }, [])

    const getProfile = async () => {
        try {
            const profile = await axios.get(`${BASE_URL}/${username}`)
            setProfile(profile.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <Title>#{profile.login}</Title>
                <Button onClick={() => goToInitialPage(history)} variant="contained" color="primary" >voltar</Button>
            </Header>
            <ProfileImage src={profile.avatar_url}></ProfileImage>
            <Name>{profile.name}</Name>
            <ContainerBio>
                <Bio>{profile.bio}</Bio>
            </ContainerBio>
            <DivButtons>
                <Button onClick={() => goToRepos(history, username)} variant="outlined" color="primary"> Repositórios: {profile.public_repos}</Button>
                <Button onClick={() => goToStarred(history, username)} variant="outlined" color="primary" >Mais visitados: {starred.length} </Button>
            </DivButtons>

        </MainContainer>
    )
}

export default ProfilePage