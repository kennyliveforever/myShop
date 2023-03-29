import React, {JSXElementConstructor, ReactPropTypes, useEffect, useState} from 'react';
import './Cart.css'

export default function Cart(props: any) {
    return(
        <>
            <div className={'cart-back'}>
                <div className={'cart-block'}>
                    <div className={'cart-list'}>
                        {props.list.map( (i: any)  => <div>{i.productId}</div>) }
                    </div>
                </div>
            </div>
        </>
    )
}