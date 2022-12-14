import React from 'react'
import Navigation from '../components/Navigation'

export default function App(props) {
    document.title = props.title
    return (
        <div>
            <Navigation/>
            <main className="pt-5">
                {props.children}
            </main>
        </div>
    )
}
