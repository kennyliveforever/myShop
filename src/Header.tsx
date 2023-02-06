import React from "react";
import './Header.css'

export default function Header() {
    return (
        <>
            <header className={'header-wrapper'}>
                <div className={'header-logo'}></div>
                <div className={'header-search'}>
                    <div className={'search-lens'}></div>
                    <form>
                        <input className={'search-input'} type={'text'} placeholder={'Search...'}></input>
                    </form>
                    <div className={'search-close'}></div>
                </div>
                <div className={'header-sign'}>Sign in</div>
                <div className={'header-cart'}>My cart</div>
                <div className={'cart-counter-box'}>
                    <div className={'cart-counter'}>5</div>
                </div>
                <div className={'header-avatar'}></div>
            </header>
        </>
    )
}