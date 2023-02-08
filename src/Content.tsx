import React from "react";
import './Content.css'

export default function Content() {
    return(
        <>
            <div className={'content-wrap'}>
                <div className={'sort-flex'}>
                    <div className={'sort'} id={'sort-first'}>
                        <div className={'sort-by-label'}>SORT BY</div>
                        <div className={'select-box'} id={'arrow-first'}>
                            <select className={'sort-menu'} id={'sort-menu-first'}>
                                <option>Useless first</option>
                            </select>
                        </div>
                    </div>
                    <div className={'sort'} id={'sort-second'}>
                        <div className={'select-box'} id={'arrow-second'}>
                            <select className={'sort-menu'} id={'sort-menu-second'}>
                                <option>Condition</option>
                            </select>
                        </div>
                    </div>
                    <div className={'sort'} id={'sort-third'}>
                        <div className={'select-box'} id={'arrow-third'}>
                            <select className={'sort-menu'} id={'sort-menu-third'}>
                                <div>dsd</div>
                                <option>Delivery options</option>
                                <option>Delivery options</option>
                                <option>Delivery options</option>
                            </select>
                        </div>
                    </div>
                    <div className={'category-flex'}>
                        <span className={'content-category'}>Show all</span>
                        <span className={'content-category'} id={'cat-selected'}>Auction</span>
                        <span className={'content-category'}>Buy now</span>
                    </div>
                    <div className={'view-flex'}>
                        <div className={'view-box-list'}>
                            <div className={'icon-list'}></div>
                        </div>
                        <div className={'view-box-grid'}>
                            <div className={'icon-grid'}></div>
                        </div>
                    </div>
                </div>
                <div className={'items-grid'}>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                </div>
            </div>
        </>
    )
}