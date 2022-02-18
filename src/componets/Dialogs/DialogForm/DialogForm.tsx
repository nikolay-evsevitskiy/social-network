import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import SuperButton from "../../Common/superButton/SuperButton";

export type FormDataType = {
    message: string
}

const maxLengthInFormOfPost30 = maxLengthCreator(30)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={'addMessageBody'}
                   placeholder={'Add message'}
                   validate={[required, maxLengthInFormOfPost30]}
            />
        </div>
        <div>
            <SuperButton className={"btn-jelly"}>
                Send
            </SuperButton>
        </div>
    </form>

}

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'AddMessageForm'})(AddMessageForm)
