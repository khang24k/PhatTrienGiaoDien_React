import React from 'react'
import Contact from './Contact'

export default function App1() {
    const chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "HCM City"
    }
    return (
        <Contact chidi={chidi}/>
    )
}
