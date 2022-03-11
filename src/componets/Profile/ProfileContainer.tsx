import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileStateType, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {Profile} from "./Profile";
import {FormDataType} from "./ProfileInfo/ProfiledataForm";
import { PATH } from "../../App";

type MapStateToPropsType = {
    profile: ProfileStateType
    isAuth: boolean
    status: string
    authorizedUserId: number | null
    profileUpdateStatus: "success" | "error"
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (value: FormDataType) => void
}
type PathParamsType = {
    userId: any
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = OwnPropsType & RouteComponentProps<PathParamsType>


class ProfileAPIComponent extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push(PATH.LOGIN)
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
                        profileUpdateStatus={this.props.profileUpdateStatus}
        />
    }

}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.data.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.id,
    profileUpdateStatus: state.profilePage.profileUpdateStatus

})

export default compose<React.ComponentType>(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {
        getUserProfile,
        updateStatus,
        getStatus,
        savePhoto,
        saveProfile
    })
)(ProfileAPIComponent)
