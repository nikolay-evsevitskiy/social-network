import React from "react";
import s from './FormControl.module.css'

const FormControl = ({input, meta: {touched, error}, ...props}: any) => {
    const hasError = touched && error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{error}</span>}
    </div>
}
export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}
