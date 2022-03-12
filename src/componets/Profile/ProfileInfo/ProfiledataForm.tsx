import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {ProfileStateType} from "../../../Redux/profile-reducer";
import style from './ProfileInfo.module.css'
import s from '../../Common/FormsControls/FormControl.module.css'
import SuperButton from "../../Common/superButton/SuperButton";

export type FormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean

}
type FormPropsType = {
    profile: ProfileStateType
    isOwner: boolean
    savePhoto: (value: any) => void


}


const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, FormPropsType> & FormPropsType> =
    ({profile, handleSubmit, error, isOwner, savePhoto}) => {
        const contactsData = Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>
        const onMainPhotoSelected = (e: any) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }


        return <form onSubmit={handleSubmit}>
            <div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                <SuperButton className={"green"}>
                    save
                </SuperButton>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <b>Full name:</b> {
                <Field component={Input}
                       validate={[required]}
                       type="text"
                       name={"fullName"}
                       placeholder={'Full name'}
                />}
            </div>
            <div>
                <b>About me:</b> {
                <Field component={Input}
                       validate={[required]}
                       type="text"
                       name={"aboutMe"}
                       placeholder={'About me'}
                />}
            </div>
            <div>
                <b>Contacts:</b>
            </div>
            <div>
                <b>Contacts:</b>
                {contactsData.map(key => {
                    return <div className={style.contact} key={key}>
                        <b>{key}: <Field component={Input}
                                         type="text"
                                         name={"contacts." + key}
                                         placeholder={key}
                        /></b>
                    </div>
                })}
            </div>
            <div>
                LOOKING FOR A JOB: {<Field component={Input}
                                           type='checkbox'
                                           name={'lookingForAJob'}/>} yes
            </div>
            <div>
                <b>Professional skills:</b> {
                <Field component={Textarea}
                       validate={[required]}
                       type="text"
                       name={"lookingForAJobDescription"}
                       placeholder={"Professional skills"}
                />}
            </div>
        </form>
    }

export const ProfileDataFormReduxForm = reduxForm<FormDataType, FormPropsType>({form: 'edit-profile'})(ProfileDataForm)


