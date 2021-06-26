import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"

const StarredPage = () => {
    const {username} = useParams()
    const [starred, setStarred] = useState([])

    useEffect(() => {
        getStarred()
    }, [])

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
            console.log(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const starredList = starred && starred.map((starred) => {
        return (
            <div key={starred.id} >
                <p>{starred.name}</p>
                <p>{starred.description}</p>
            </div>
        )
    })
    return(
        <div>
            <h1>StarredPage</h1>
            {starredList}
        </div>
    )
}

export default StarredPage