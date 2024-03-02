import React from 'react'

export default function SecondTitle({ title }: { title: string }): JSX.Element {
    return (
        <h2 className='font-extrabold text-5xl md:text-7xl text-gradient mb-7 ml-3 md:ml-12'>{title}</h2>
    )
}
