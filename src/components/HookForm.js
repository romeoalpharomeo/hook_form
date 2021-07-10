import React from  'react';
import FormCard from './UI/FormCard';
import './HookForm.css'
    
    
const HookForm = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }
    
    return(
        <FormCard className="hook-form">
        <form>
            <div className="form-item">
                <label>First Name: </label> 
                <input type="text" onChange={onChange} name="firstName" />
            </div>
            <div className="form-item">
                <label>Last Name: </label> 
                <input type="text" onChange={onChange} name="lastName" />
            </div>
            <div className="form-item">
                <label>Email: </label> 
                <input type="text" onChange={onChange} name="email" />
            </div>
            <div className="form-item">
                <label>Password: </label>
                <input type="text" onChange={onChange} name="password"  />
            </div>
            <div className="form-item">
                <label>Confirm Password: </label>
                <input type="text" onChange={onChange} name="confirmPassword"  />
            </div>
        </form>
        </FormCard>
    );
};
    
export default HookForm;
