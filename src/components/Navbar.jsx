import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        try {
            if (signOut(auth)) {
                alert("Çıkış yapıldı")
                navigate("/auth")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const login = () => {
        navigate("/auth")
    }
    return (
        <nav className='navbar'>
            <div>
                FİREBASE
            </div>
            <button onClick={login} className='logout'>
                Giriş Yap
            </button>
            <button onClick={logout} className='logout'>
                Çıkış Yap
            </button>
        </nav>
    )
}

export default Navbar