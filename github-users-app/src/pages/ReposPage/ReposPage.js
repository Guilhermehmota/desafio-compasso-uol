import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"


const ReposPage = () => {
    const {username} = useParams()
    const [repos, setRepos] = useState([])

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
            <div key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <p>criado em: {correctedDate}</p>
            </div>
        )
    })

    return(
        <div>
            <h1>ReposPage</h1>
            {reposList}            
        </div>
    )
}

export default ReposPage