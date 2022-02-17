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
import {Redirect, Route} from 'react-router-dom';

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
                        <Route path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/dialogs'} render={() => {
                            return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/profile/:userId?'} render={() => {
                            return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => {
                            return <React.Suspense fallback={<Preloader isFetching={true}/>}>
                                <UsersContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/login'} render={() => <LoginAPIComponent/>}/>
                        <Route path={'*'} render={() => <div>404 PAGE IS NOT FOUND!!!</div>}/>
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
