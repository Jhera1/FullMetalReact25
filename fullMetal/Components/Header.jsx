import React from 'react'
import '../CSS/header.css'

export function Header({ navButtons }){
    return (
        <>
        <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
            {navButtons.map(a => (
             <li>{a}</li>
            ))}
        </nav>
        </header>
        </>
    )
}