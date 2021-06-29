

import React from 'react'


export default function Die(props) {
    return (
        <i class={`Die fas fa-dice-${props.face} ${props.rolling && 'shaking'}`}></i>

    )
}
