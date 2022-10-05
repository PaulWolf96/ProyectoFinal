import React from 'react';
import Footer from '../../components/common/footer';
import NavBar from '../../components/common/navbar';
import RegisterForm from '../../components/RegisterForm';  

const Register = () => {
    return (
        <div>
            <NavBar/>
            <RegisterForm/>
            <Footer/>
            
        </div>
    );
};

export default Register;