import React, {useEffect, useState} from 'react';
import './CategoriesBar.css'
import Content from "./Content";
import './App'

export default function CategoriesBar(props:any) {

    return (
        <>
            <div className={'bar-wrap'}>
                <div className={'bar-icons'}>
                    <div className={'catBar-button'} onClick={() => props.handler('https://fakestoreapi.com/products')}>
                        <div className={'catBar-link'}>All categories</div>
                    </div>
                    <div className={'catBar-button'} onClick={() => props.handler('https://fakestoreapi.com/products/category/electronics')}>
                        <div className={'catBar-icon'} id={'flash'}></div>
                        <div className={'catBar-link'}>Electronics</div>
                    </div>
                    <div className={'catBar-button'} onClick={() => props.handler('https://fakestoreapi.com/products/category/jewelery')}>
                        <div className={'catBar-icon'} id={'ship'}></div>
                        <div className={'catBar-link'}>Jewelery</div>
                    </div>
                    <div className={'catBar-button'} onClick={() => props.handler(`https://fakestoreapi.com/products/category/men's clothing`)}>
                        <div className={'catBar-icon'} id={'men'}></div>
                        <div className={'catBar-link'}>Men's clothing</div>
                    </div>
                    <div className={'catBar-button'} onClick={() => props.handler(`https://fakestoreapi.com/products/category/women's clothing`)}>
                        <div className={'catBar-icon'} id={'women'}></div>
                        <div className={'catBar-link'}>Women's clothing</div>
                    </div>
                </div>
            </div>
        </>
    )
}