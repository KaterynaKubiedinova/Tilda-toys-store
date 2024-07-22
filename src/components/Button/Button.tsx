'use client'

import React from "react"
import style from './Button.module.scss'

export function CustomButton({type, text, handleClick}: {type: 'submit' | 'button', text: string, handleClick?: () => void}) {
	return (
		<div className={style.block}>
			{handleClick ? <button type={type} onClick={handleClick}>
					{text}
			</button> : <button type={type}>
					{text}
			</button>}
		</div>
	)
}