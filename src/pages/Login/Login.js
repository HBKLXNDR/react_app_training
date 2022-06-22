import {useContext} from "react";

import {Input} from "../../components";
import {AuthContext} from "../../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder="Input login"/>
                <Input type="password" placeholder="Input password"/>
                <Input>Log in</Input>
            </form>
        </div>
    );
};

export {Login};