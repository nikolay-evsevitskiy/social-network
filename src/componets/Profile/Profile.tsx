import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileStateType} from "../../Redux/profile-reducer";
import {FormDataType} from "./ProfileInfo/ProfiledataForm";

type ProfileType = {
    isOwner: boolean
    profile: ProfileStateType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (value: any) => void
    saveProfile: (value: FormDataType) => void
    profileUpdateStatus: "success" | "error"
}

export const Profile: React.FC<ProfileType> = ({profileUpdateStatus, profile, status, updateStatus, isOwner,savePhoto, saveProfile}) => {

    return (
        <div className={s.content}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
                profileUpdateStatus={profileUpdateStatus}
            />
            <MyPostsContainer newPostText={'CHECK'}/>
        </div>
    )
}