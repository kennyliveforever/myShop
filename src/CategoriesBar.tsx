import React from 'react';
import './CategoriesBar.css'

export default function CategoriesBar() {
    return (
        <>
            <div className={'bar-wrap'}>
                <div className={'bar-icons'}>
                    <div className={'catBar-button'}>
                        <div className={'catBar-icon'} id={'flash'}></div>
                        <div className={'catBar-link'}>Electronics</div>
                    </div>
                    <div className={'catBar-button'}>
                        <div className={'catBar-icon'} id={'ship'}></div>
                        <div className={'catBar-link'}>Jewelery</div>
                    </div>
                    <div className={'catBar-button'}>
                        <div className={'catBar-icon'} id={'men'}></div>
                        <div className={'catBar-link'}>Men's clothing</div>
                    </div>
                    <div className={'catBar-button'}>
                        <div className={'catBar-icon'} id={'women'}></div>
                        <div className={'catBar-link'}>Women's clothing</div>
                    </div>
                </div>
            </div>
        </>
    )
}