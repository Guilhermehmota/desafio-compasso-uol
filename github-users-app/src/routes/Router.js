import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import InitialPage from "../pages/InitialPage/InitialPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ReposPage from "../pages/ReposPage/ReposPage";
import StarredPage from "../pages/StarredPage/StarredPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <InitialPage />
                </Route>
                <Route exact path="/profile/:username">
                    <ProfilePage />
                </Route>
                <Route exact path="/repos/:username">
                    <ReposPage />
                </Route>
                <Route exact path="/starred/:username">
                    <StarredPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router