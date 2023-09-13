import React, {HTMLAttributes} from "react";
import s from './styles.module.css'
import cn from 'classnames'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
	type?: "button" | "submit" | "reset"
	disabled?: boolean
	classNames?: string
}

const Button: React.FC<IButtonProps> = ({type = "button", disabled = false, classNames, children, ...props}) => {
	return <button type={type} disabled={disabled} className={cn(s.btn, classNames)} {...props}>{children}</button>
}

export default Button