import React, {JSXElementConstructor, ReactPropTypes, useEffect, useState} from 'react';
import './Register.css'

export default function Register(props: any) {
    return(
        <>
            <div className={'modal-background'}>
                <div className={'modal-main'}>
                    <div className={'modal-fields-flex'}>
                        <span>Email</span>
                        <input type={'text'}/>
                        <span>Login</span>
                        <input type={'text'}/>
                        <span>Password</span>
                        <input type={'text'}/>
                        <div></div>
                        <button onClick={() => props.setReg(true)}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}