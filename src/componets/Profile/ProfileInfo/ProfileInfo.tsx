import React, {useState} from 'react';
import {ProfileStateType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import style from './ProfileInfo.module.css'
import ProfileStatusOnFC from './ProfileStatus/ProfileStatusOnFunctionComponent';
import userPhoto from "../../../assets/images/5546667.png";
import {FormDataType, ProfileDataFormReduxForm} from "./ProfiledataForm";

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
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
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
            <div>
                <div>
                    <img alt={'Profile'} src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
                    <div>
                        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
                    <div>
                        <b>Status:</b> <ProfileStatusOnFC statusProps={status} updateStatus={updateStatus}/>
                    </div>
                    {editMode ?
                        <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile} profile={profile}/> :
                        <ProfileData profile={profile} isOwner={isOwner} goEditMode={goEditMode}/>}
                </div>

            </div>

        </div>
    )
}
const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goEditMode}) => {
    const contactsData = Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>
    return <>
        {isOwner && <div>
            <button onClick={goEditMode}>edit</button>
        </div>}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b>
        </div>
        <div>
            {contactsData.map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
        <div>
            LOOKING FOR A JOB: {profile.lookingForAJob ? "YES!!!" : "NO"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }
    </>
}
const Contact: React.FC<{ contactTitle: string, contactValue: string | null }> =
    ({contactTitle, contactValue}) => {
        return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
    }

export default ProfileInfo;


