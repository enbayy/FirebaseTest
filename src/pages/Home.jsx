import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';

function Home() {
    const [information, setInformation] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setInformation(user.email)
            } else {
            }
        });
    },)

    return (
        <div>Home {information}</div>
    )
}

export default Home