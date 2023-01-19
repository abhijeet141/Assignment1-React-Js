import React from 'react'

export const Welcome = (Props) =>{
    return(
        <div className='information'>
        <div className='name-prop'>
        <h1 className='name'>Hey {Props.name}!</h1>
        </div>
        <div className='greeting-prop'>
        <h2>Welcome to College</h2>
        </div>
        </div>
    )
}

