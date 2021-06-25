import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
const ProfilePage = () => {

    const {username} = useParams()
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
            // console.log(profile.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
            console.log(starred.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return(
        <div>
            <h1>ProfilePage</h1>
            <p>{profile.login}</p>
            <img src={profile.avatar_url}></img>
            <p>Bio: {profile.bio}</p>
            <p>Following: {profile.following}</p>
            <p>Followers: {profile.followers}</p>
            <p>Repositories: {profile.public_repos}</p>
            <p>Starred: {starred.length} </p>
        </div>
    )
}

export default ProfilePage