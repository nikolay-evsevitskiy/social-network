import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileStateType} from "../../Redux/profile-reducer";

type ProfileType = {
    isOwner: boolean
    profile: ProfileStateType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (value: any) => void
}

export const Profile: React.FC<ProfileType> = ({profile, status, updateStatus, isOwner,savePhoto}) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer newPostText={'CHECK'}/>
        </div>
    )
}