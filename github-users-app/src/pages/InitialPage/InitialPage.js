import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { goToProfile } from "../../routes/coordinator"
import { MainContainer } from "../../styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import githubLogo from "../../img/githubLogo.png"
import { LogoGithub, Title, InitialForm } from "./styled"
import { CircularProgress } from "@material-ui/core"
import { BASE_URL } from "../../constants/url"

const initialForm = {
    username: "",
}

const InitialPage = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(initialForm);
    

    const getProfile = async (event) => {
        event.preventDefault();
        try {
            await axios.get(`${BASE_URL}/${form.username}`)
            goToProfile(history, form.username)
        } catch (error) {
            alert("Este usuário não existe")
            clear()
        }
    }

    return(
        <MainContainer>
            <Title>Pesquise aqui por um perfil do GitHub</Title>
            {githubLogo? <LogoGithub src={githubLogo}/> : <CircularProgress color="primary"/>}
            <InitialForm onSubmit = {getProfile}>
                <div>
                <TextField
                required
                name="username"
                label="Nome do usuário"
                value={form.username}
                onChange={onChange}
                type="text"
                />
                </div>
                <Button type="submit" variant="contained" color="primary" >buscar perfil</Button>
            </InitialForm>
        </MainContainer>
    )
}

export default InitialPage