import React from "react"
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { goToProfile } from "../../routes/coordinator";
import { MainContainer } from "../../styled";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import githubLogo from "../../img/githubLogo.png"
import { LogoGithub, Title, InitialForm } from "./styled";

const initialForm = {
    username: "",
}

const InitialPage = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(initialForm);

    const handleClick = (event) => {
        event.preventDefault();
        goToProfile(history, form.username)
        clear();
    }

    return(
        <MainContainer>
            <Title>Pesquise aqui um perfil no GitHub</Title>
            <LogoGithub src={githubLogo}></LogoGithub>
            <InitialForm onSubmit = {handleClick}>
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