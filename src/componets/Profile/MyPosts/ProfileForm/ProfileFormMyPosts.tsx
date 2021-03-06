import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import SuperButton from "../../../Common/superButton/SuperButton";
import style from "./ProfileformMyPosts.module.css"

type FormDataProfileType = {
    values: string
}

const maxLength10 = maxLengthCreator(10)

export const ProfileFormMyPosts: React.FC<InjectedFormProps<FormDataProfileType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={'addPostBody'}
                   placeholder={'Add post...'}
                   validate={[required, maxLength10]}
            />
        </div>
        <div className={style.button}>
            <SuperButton>
                Add post
            </SuperButton>
        </div>
    </form>

}

export const AddPostFormRedux = reduxForm<FormDataProfileType>({form: 'AddPostForm'})(ProfileFormMyPosts)
