import React from "react";
import './Content.css'

export default function Content() {
    return(
        <>
            <div className={'content-wrap'}>
                <div className={'sort-flex'}>
                    <div className={'sort'} id={'sort-first'}>
                        <form>
                            <select className={'sort-menu'} id={'sort-menu-first'}>
                                <option>Useless first</option>
                            </select>
                        </form>
                    </div>
                    <div className={'sort'} id={'sort-second'}>
                        <form>
                            <select className={'sort-menu'} id={'sort-menu-second'}>
                                <option>Condition</option>
                            </select>
                        </form>
                    </div>
                    <div className={'sort'} id={'sort-third'}>
                        <form>
                            <select className={'sort-menu'} id={'sort-menu-third'}>
                                <option>Useless first</option>
                            </select>
                        </form>
                    </div>
                    <div className={'category-flex'}>
                        <span className={'content-category'}>Show all</span>
                        <span className={'content-category'} id={'cat-selected'}>Auction</span>
                        <span className={'content-category'}>Buy now</span>
                    </div>
                    <div className={'view-flex'}>
                        <div className={'icon-list'}></div>
                        <div className={'icon-grid'}></div>
                    </div>
                </div>
            </div>
        </>
    )
}