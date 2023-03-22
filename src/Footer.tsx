import React from "react";
import './Footer.css'

export default function Footer() {
    return(
        <>
            <div className={'footer-wrap'}>
                <div className={'footer-content'}>Developed by Evgeniy Karovackiy</div>
                <a href={'https://fakestoreapi.com/'}>fakestoreapi.com</a>
                <div className={'social-flex'}>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" rel="noreferrer" className={'footer-icon'} id={'git'}>github</a>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" className={'footer-icon'} id={'git'}></a>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" className={'footer-icon'} id={'git'}></a>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" className={'footer-icon'} id={'git'}></a>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" className={'footer-icon'} id={'git'}></a>
                    <a href={'https://github.com/kennyliveforever'} target="_blank" className={'footer-icon'} id={'git'}></a>
                </div>
            </div>
        </>
    )
}