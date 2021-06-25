import React from "react"
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { goToProfile } from "../../routes/coordinator";

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
        <div>
            <h1>InitialPage</h1>
            <form onSubmit = {handleClick}>
                <input
                required
                name="username"
                value={form.username}
                onChange={onChange}
                type="text"
                />
                <button type="submit">pesquisar</button>
            </form>
        </div>
    )
}

export default InitialPage