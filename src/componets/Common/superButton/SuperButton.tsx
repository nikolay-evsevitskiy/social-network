import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './superButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const fulClassName = className === "red" ? `${s.button} ${s.red}` :
        className === "yellow" ? `${s.button} ${s.yellow}` :
            className === "green" ? `${s.button} ${s.green}` :
                `${s.button} ${s.blue}`

    return (
        <button
            className={fulClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
