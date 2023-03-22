import React, {useState} from "react";
import './Content.css'
import Card from "./Card";
import styleGrid from "./Card.module.css";
import styleListed from "./CardList.module.css";

export default function Content(props:any) {

    const [style, setStyle] = useState(styleGrid)

    const Card = (props: any) => {

        return (
            <>
                <div className={style.card}>
                    <div className={style['card-image']} style={{background: 'URL(' + `${props.image}` + ')',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}/>
                    <div className={style.descWrap}>
                        <div className={style['card-description']}>{props.title} {props.condition}</div>
                        <div className={style['card-price']}>$ {props.price} {props.filter}</div>
                        <div className={style['card-info']}>{props.dsc}</div>
                        <div className={style['card-rate-box']}>
                            <div className={style['stars-flex']}>
                                <div className={style.star}/>
                                <div className={style.star}/>
                                <div className={style.star}/>
                                <div className={style.star}/>
                                <div className={style.star}/>
                                <div className={style['card-ratingCount']}>{props.rating}</div>
                            </div>
                        </div>
                        <div className={style['card-cart-button']}>
                            <div className={style['card-cart-icon']}></div>
                            <div className={style[`card-cart-button-label`]}>To cart</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <div className={'content-wrap'}>
                <div className={'sort-flex'}>
                    <div className={'sort'} id={'sort-first'}>
                        <div className={'sort-by-label'}>SORT BY</div>
                        <div className={'select-box'} id={'arrow-first'}>
                            <select className={'sort-menu'} id={'sort-menu-first'} onChange={ e => props.sort(e.target.value)}>
                                <option value={''}>Price (default)</option>
                                <option value={'high'}>Price High-{">"}Low</option>
                                <option value={'low'}>Price Low-{">"}High</option>
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
                        <div className={style['view-box-list']} onClick = {() => {setStyle(styleListed)}}>
                            <div className={'icon-list'}></div>
                        </div>
                        <div className={style['view-box-grid']} onClick = {() => {setStyle(styleGrid)}}>
                            <div className={'icon-grid'}></div>
                        </div>
                    </div>
                </div>
                <div className={style['items-grid']}>
                    {props.loaded.map((item:any) => <Card title={item.title.slice(0, 50)}
                                                   dsc={item['description'].slice(0, 65) + ` ...`}
                                                   price={item.price}
                                                   image={item.image}
                                                   rating={item.rating}
                                                          filter={item.filter}
                                                   // options={item.option}
                                                   // condition={item.condition}
                    />)}
                </div>
            </div>
        </>
    )
}