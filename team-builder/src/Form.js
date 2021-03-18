import React, { useState } from 'react';

const Form = (props) => {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <label>Username
                <input type='text' value={values.username}  placeholder='Username' name='username' maxLength='20' onChange={onChange}/>

            </label>Email
                <input type='text' value={values.email} placeholder='Email' name='email' onChange={onChange}/>
            <label>Role
                <select name='role' onChange={onChange} value={values.role}>
                    <option>Select One</option>
                    <option>Child</option>
                    <option>Fur Baby</option>
                    <option>Plant Baby</option>
                </select>
            </label>
            <div className='submit'>
                <button>SUBMIT</button>
            </div>
        </form>
    )
}

export default Form;