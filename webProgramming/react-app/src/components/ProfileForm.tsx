import React from 'react';
import AuthInput from '../obejcts/AuthInput';
import authRepository from '../Repositories/AuthRepository';

const ProfileForm = () => {

    return (
        <div className="profile">
                <h1>Авторизация</h1>
                <div className="inputDiv">
                    <h4>Логин</h4>
                    <input></input> 
                </div>
                <div className="inputDiv">
                    <h4>Пароль</h4>
                    <input></input>
                </div>

                <button>Войти</button> 
        </div>
    );
}

export default ProfileForm;
