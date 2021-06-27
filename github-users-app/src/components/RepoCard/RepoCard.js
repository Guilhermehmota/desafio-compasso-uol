import React from "react"
import {RepoContainer, Title, CreatedAt} from "./styled"

const RepoCard = (props) => {
    return (
        <RepoContainer>
            <Title>{props.repoName}</Title>
            <CreatedAt><b>Criado em: </b> {props.createdAt}</CreatedAt>
        </RepoContainer>
    )
}

export default RepoCard

