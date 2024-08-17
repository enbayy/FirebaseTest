import React from 'react';
import { FaGooglePlusG } from "react-icons/fa";

function Auth() {
    return (
        <div className='full'>
            <div className="auth-container">
                <form className="auth-form">
                    <h2>Giriş Yap</h2>
                    <div className="form-input">
                        <label>E-mail</label>
                        <input type="text" placeholder="Email giriniz" />
                    </div>
                    <div className="form-input">
                        <label>Şifre</label>
                        <input type="password" placeholder="Şifrenizi giriniz" />
                    </div>
                    <div className="button-container">
                        <button className="login-button">Giriş Yap</button>
                        <button className="google-button"><FaGooglePlusG /> Google ile giriş yap</button>
                        <button className="register-button">Kayıt ol</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Auth;