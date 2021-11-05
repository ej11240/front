import "./LoginPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {

    // let history = useHistory();

    const logintomain = React.useRef(null);


    const [id, setId] = useState('');
    const onIdChange = (e) => {
        setId(e.target.value);
    }
    const [pw, setPw] = useState('');
    const onPwChange = (e) => {
        setPw(e.target.value);
    }

    const sendServerLogin = () => {

        // axios ...
    }


    return (
        <div>
            {/* <NavBar/> */}
            <div className="Loginpage">
                <div className="Login_main">
                    <Link to="/register" className="Login_link">
                        회원가입하기
                    </Link>
                </div>
            </div>
        </div>
    );
    // }
}