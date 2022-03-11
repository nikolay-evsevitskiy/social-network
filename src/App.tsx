import React from 'react';
import './App.css';
import HeaderContainer from "./componets/Header/HeaderContainer";
import {LoginAPIComponent} from "./componets/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./Redux/app-reducer";
import {AppStateType, store} from "./Redux/redux-store";
import {Preloader} from "./componets/Common/Preloader/Preloader";
import {Navbar} from "./componets/Navbar/Navbar";
import {News} from "./componets/News/News";
import {Music} from "./componets/Music/Music";
import {Settings} from "./componets/Setting/Settings";
import {Redirect, Route, Switch} from 'react-router-dom';
import Error404Component from "./componets/Error404/Error404Component";

const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'))


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializedApp: () => void
}
type AppComponentType = MapStateToPropsType & MapDispatchToPropsType

export const PATH = {
    PROFILE: "/profile",
    DIALOGS: "/dialogs",
    SETTINGS: "/settings",
    MUSIC: "/music",
    USERS: "/users",
    NEWS: "/news",
    LOGIN: "/login"
}


class App extends React.Component<AppComponentType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        alert(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializedApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader isFetching={true}/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='main-container'>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={PATH.PROFILE}/>}/>
                            <Route path={PATH.DIALOGS} render={() => {
                                return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path={'/profile/:userId?'} render={() => {
                                return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path={PATH.NEWS} render={() => <News/>}/>
                            <Route path={PATH.MUSIC} render={() => <Music/>}/>
                            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                            <Route path={PATH.USERS} render={() => {
                                return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                    <UsersContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path={PATH.LOGIN} render={() => <LoginAPIComponent/>}/>
                            <Route path={'*'} render={() => <Error404Component/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializedApp})(App)
export const SamuraiJSApp = () => {
    return <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>
}
