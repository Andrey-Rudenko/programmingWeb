import React from 'react';
import AuthInput from '../obejcts/AuthInput';
import authRepository from '../Repositories/AuthRepository';

const Authorization = () => {
    const loginRef: React.RefObject<HTMLInputElement> = React.createRef();
    const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const buttonHandler = () => {
        const authInput: AuthInput = {
            login: loginRef?.current?.value ?? "",
            password: passwordRef?.current?.value ?? ""
        }
        event?.preventDefault();
        console.log(authInput);

        authRepository.login(authInput);

    }

    return (
        <div className = "auth">
            <form className="form">
                <h1>Авторизация</h1>
                <div className="inputDiv">
                    <h4>Логин</h4>
                    <input ref={loginRef}></input> {/*TODO: inputRef*/}
                </div>
                <div className="inputDiv">
                    <h4>Пароль</h4>
                    <input ref={passwordRef}></input>
                </div>

                <button onClick={buttonHandler}>Войти</button> {/*preventDefault*/}
            </form>
        </div>
        );
}
export default Authorization;
