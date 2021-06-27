import React from "react"
import {StarredContainer, Title, Description} from "./styled"

const StarredCard = (props) => {
    return (
        <StarredContainer>
            <Title>{props.name}</Title>
            <Description>{props.description}</Description>
        </StarredContainer>
    )
}

export default StarredCard