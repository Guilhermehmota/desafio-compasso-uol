export const goBack = (history) => {
    history.goBack()
}

export const goToInitialPage = (history) => {
    history.push('/')
}

export const goToProfile = (history, username) => {
    history.push(`/profile/${username}`)
}

export const goToRepos = (history, username) => {
    history.push(`/repos/${username}`)
}

export const goToStarred = (history, username) => {
    history.push(`/starred/${username}`)
}


