import React, { useState } from 'react';
import { FaGooglePlusG } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user
            if (user) {
                alert("Giriş başarılı")
                navigate("/")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user
            if (user) {
                alert("Google ile giriş yapıldı")
                navigate("/")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                alert("başarılı")
                navigate("/")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='full'>
            <div className="auth-container">
                <div className="auth-form">
                    <h2>Giriş Yap</h2>
                    <div className="form-input">
                        <label>E-mail</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email giriniz" />
                    </div>
                    <div className="form-input">
                        <label>Şifre</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Şifrenizi giriniz" />
                    </div>
                    <div className="button-container">
                        <button onClick={login} type='submit' className="login-button">Giriş Yap</button>
                        <button onClick={loginWithGoogle} className="google-button"><FaGooglePlusG /> Google ile giriş yap</button>
                        <button onClick={register} type='submit' className="register-button">Kayıt ol</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Auth;