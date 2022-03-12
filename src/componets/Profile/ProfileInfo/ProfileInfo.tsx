import React, {useState} from 'react';
import {ProfileStateType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import style from './ProfileInfo.module.css'
//import ProfileStatusOnFC from './ProfileStatus/ProfileStatusOnFunctionComponent';
//import userPhoto from "../../../../static/media/";
import {FormDataType, ProfileDataFormReduxForm} from "./ProfiledataForm";
import SuperButton from "../../Common/superButton/SuperButton";

type ProfileInfoType = {
    isOwner: boolean
    profile: ProfileStateType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (value: any) => void
    saveProfile: (value: FormDataType) => void
    profileUpdateStatus: "success" | "error"
}
type ProfileDataType = {
    profile: ProfileStateType
    isOwner: boolean
    goEditMode: () => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                    profileUpdateStatus,
                                                    profile,
                                                    status,
                                                    updateStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile
                                                }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    if (!profile.photos || !profile) {
        return <Preloader isFetching={true}/>
    }

    const goEditMode = () => {
        setEditMode(true)
    }
    const onSubmit = (formData: FormDataType) => {
        saveProfile(formData)
        profileUpdateStatus === "success" && setEditMode(false)
    }
    return (
        <div>
            {isOwner && <div className={style.editButton}>
                <SuperButton onClick={goEditMode} className={"yellow"}>edit</SuperButton>
            </div>}
            <div>
                <div>
                    <img alt={'Profile'} src={profile.photos.large} className={style.mainPhoto}/>

                    <div className={style.profileInfo}>
                        <b>Status:</b>
                    </div>
                    {editMode ?
                        <ProfileDataFormReduxForm isOwner={isOwner} savePhoto={savePhoto} onSubmit={onSubmit}
                                                  initialValues={profile} profile={profile}/> :
                        <ProfileData profile={profile} isOwner={isOwner} goEditMode={goEditMode}/>}
                </div>

            </div>

        </div>
    )
}
const ProfileData: React.FC<ProfileDataType> = ({profile}) => {
    const contactsData = Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>
    return <>
        <div className={style.aboutMe}>
            <div><b>Full name:</b> {profile.fullName}</div>
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>Professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
        </div>

        <div className={style.contacts}>
            <div>
                <h3>Contacts:</h3>
            </div>
            <div>
                {contactsData.map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>

        <div className={style.job}>
            LOOKING FOR A JOB: {profile.lookingForAJob ? "YES!!!" : "NO"}
        </div>
    </>
}
const Contact: React.FC<{ contactTitle: string, contactValue: string | null }> =
    ({contactTitle, contactValue}) => {
        return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
    }

export default ProfileInfo;


