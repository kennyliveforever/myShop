import React, {useEffect, useState} from "react";
import style from './Card.module.css'
import listStyle from './CardList.module.css'
import state from './Content'

export default function Card() {
    return (
    <>
        <div className={style.card}>
            <div className={style['card-image']}/>
            <div className={style['card-description']}>
                Vintage Typewriter to post awesome
                stories about UI design and webdev.
            </div>
            <div className={style['card-price']}>$49.50</div>
            <div className={style['card-info']}>
                Eligible for Shipping To Mars or
                somewhere else
            </div>
            <div className={style['card-rate-box']}>
                <div className={style['stars-flex']}>
                    <div className={style.star}/>
                    <div className={style.star}/>
                    <div className={style.star}/>
                    <div className={style.star}/>
                    <div className={style.star}/>
                    <div className={style['card-ratingCount']}>5.00</div>
                </div>
            </div>
            <div className={style['card-cart-button']}>
                <div className={style['card-cart-icon']}></div>
                <div className={style[`card-cart-button-label`]}>To cart</div>
            </div>
        </div>
    </>
    )
}