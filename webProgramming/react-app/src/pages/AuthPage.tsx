import { useState } from "react";
import Authorization from "../components/Authorization";

const AuthPage = () => {
    const [isAuthPage, setIsAuthPage] = useState(true);

    return (
        <Authorization/>
        )
}

export default AuthPage;