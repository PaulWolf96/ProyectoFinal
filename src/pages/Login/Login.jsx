import React from 'react';
import  './login.css';
import NavBar from '../../components/common/navbar';
import Footer from '../../components/common/footer';
import LoginForm from '../../components/common/LoginForm';

const Login = () => {
    return (
        <div>
            <NavBar/>
            <LoginForm/>
            <Footer/>
        </div>
    );
};

export default Login;