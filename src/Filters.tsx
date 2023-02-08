import React from "react";
import './Filters.css'

export default function Filters() {
    return(
        <>
            <div className={'filters-wrap'}>
                <div className={'collapsed'}>
                    <div className={'filter-title'}>Collapsed filters</div>
                    <div className={'filter-arrow'}></div>
                </div>
                <div className={'expand'}>
                    <div className={'filter-title'}>Expanded filters</div>
                    <div className={'filter-arrow'}></div>
                    <div className={'check-flex'}>
                        <div className={'check-item'}>
                            <div className={'check-box'}></div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}