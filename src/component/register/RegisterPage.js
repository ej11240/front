import "./RegisterPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {

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
            <div className="Registerpage">
                <div className="Register_main">
                    <Link to="/login" className="Login_link">
                        login하기
                    </Link>
                </div>
            </div>
        </div>
    );
    // }
}