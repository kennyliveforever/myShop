import React, {useEffect, useState} from "react";
import './Filters.css'

export default function Filters(props: any) {

    let collapsed = {
        width: '304px',
        height: '40px',
        boxShadow: '0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)',
        borderRadius: '4px',
        transition: 'height  0.5s',
        overflow: 'hidden'
    }

    let expand = {
        width: '304px',
        height: '304px',
        background: "#F7F7FA",
        borderRadius: '4px',
        boxShadow: 'none',
        transition: 'height  0.5s',
        overflow: 'hidden'
    }

    const [style, setStyle] = useState(collapsed)
    const [style2, setStyle2] = useState(collapsed)
    const [styleState, setStyleState] = useState(false)
    const [styleState2, setStyleState2] = useState(false)

    useEffect((() => {
        styleState ? setStyle(expand) : setStyle(collapsed)
        styleState2 ? setStyle2(expand) : setStyle2(collapsed)
    }) as () => Function, [styleState, styleState2])

    return(
        <>
            <div className={'filters-wrap'}>
                <div>Filters</div>
                <div className={'collapsed'} style={style2}>
                    <div className={'filter-title'}>Collapsed filters</div>
                    <div className={'filter-arrow'}
                         onClick={() => {styleState2 ? setStyleState2(false) : setStyleState2(true)}}
                    />
                    <div className={'check-flex'}>
                        <div className={'check-item'}>
                            <div className={'check-box'} onClick={() => {props.filterState === false ? props.filterFunc(true) : props.filterFunc(false)}}>

                                <div className={'check-box-border'}>
                                    <input type={'checkbox'} className={'check-item-input'}/>
                                    <div className={'check-box-polygon'}></div>
                                </div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                        <div className={'check-item'}>
                            <div className={'check-box'}>
                                <div className={'check-box-border'}></div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                        <div className={'check-item'}>
                            <div className={'check-box'}>
                                <div className={'check-box-border'}></div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                        <div className={'check-item'}>
                            <div className={'check-box'}>
                                <div className={'check-box-border'}></div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                        <div className={'check-item'}>
                            <div className={'check-box'}>
                                <div className={'check-box-border'}></div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                        <div className={'check-item'}>
                            <div className={'check-box'}>
                                <div className={'check-box-border'}></div>
                            </div>
                            <div className={'check-label'}>Recommended</div>
                        </div>
                    </div>
                </div>
                <div className={'expand'} style={style}>
                    <div className={'filter-title'}>Expanded filters</div>
                    <div className={'filter-arrow'}
                         onClick={() => {styleState ? setStyleState(false) : setStyleState(true)}}/>


                </div>
            </div>
        </>
    )
}