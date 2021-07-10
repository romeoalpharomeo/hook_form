import React from  'react';
import FormCard from './UI/FormCard';
    
    
const FormData = (props) => { 
    const { firstName, lastName, email, password, confirmPassword } = props.data;
    
    return(
        <FormCard className="hook-form">
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </FormCard>
    );
};
    
export default FormData;