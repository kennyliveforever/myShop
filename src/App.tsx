import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import CategoriesBar from "./CategoriesBar";
import Content from "./Content";
import Filters from "./Filters";
import Footer from "./Footer";
import Register from "./Register";
import {json} from "stream/consumers";
import Cart from "./Cart";

function App() {

    interface Item {
        price: number,
        filter: number,
        title: string,
        description: string
    }

    const [items, setItems] = useState([])
    const [category, setCategory] = useState('https://fakestoreapi.com/products')
    const [sortPrice, setSortPrice] = useState('')
    const [filter, setFilter] = useState(false)
    const [text, setText] = useState('')
    const [textArr, setTextArr]: [Array<string>, Function] = useState([])

    let regex: RegExp = new RegExp(`${text}`, 'i')

    useEffect((() => {
            fetch(category)
                .then(res => res.json())
                .then((result) => {
                    for (let i of result) {
                        i.rating = (Math.random() * 6).toFixed(1)
                        if (result.indexOf(i) % 2 == 0) {
                            i.filter = 0
                        } else {
                            i.filter = 1
                        }
                    }

                    if (sortPrice === 'low') {
                        setItems(result.sort((a: Item, b: Item) => a.price - b.price))
                    } else if (sortPrice === 'high') {
                        setItems(result.sort((a: Item, b: Item) => b.price - a.price))
                    } else {
                        setItems(result)
                    }

                    if (text.includes(' ')) {
                        setTextArr(text.split(' '))
                        console.log(textArr)
                        console.log(text)
                        // for (let i of textArr) {
                        //     if (i.length > 0 && i !== ' ') {
                        //         regex = new RegExp(`${i}`, 'i')
                        //         if (text !== '' && filter) {
                        //             setItems(result.filter((i: Item) => regex.test(i.title)).filter((item: Item) => item.filter == 1))
                        //         } else if (text !== '' && !filter) {
                        //             setItems(result.filter((i: Item) => regex.test(i.title)))
                        //         } else if (text == '' && filter) {
                        //             setItems(result.filter((item: Item) => item.filter == 1))
                        //         }
                        //     }
                        // }
                        regex = new RegExp(`(${textArr[0]})(${textArr[1]})`, 'i')
                    }

                    if (text !== '' && filter) {
                        setItems(result.filter((i: Item) => regex.test(i.title)).filter((item: Item) => item.filter == 1))
                    } else if (text !== '' && !filter) {
                        setItems(result.filter((i: Item) => regex.test(i.title)))
                    } else if (text == '' && filter) {
                        setItems(result.filter((item: Item) => item.filter == 1))
                    }
                })
    }) as () => Function, [category, sortPrice, text, filter, filter, items.length])

    const [registerModalState, setRegisterModalState] = useState(false)
    const [registration, setRegistration] = useState(true)

    useEffect((() => {
        if(registration == true) {
            // fetch('https://fakestoreapi.com/users',{
            //     method:"POST",
            //     body:JSON.stringify(
            //         {
            //             email:'kennyliveforever@gmail.com',
            //             username:'Kennyliveforever',
            //             password:'qwerty',
            //             name:{
            //                 firstname:'Kenny',
            //                 lastname:'Mccormick'
            //             },
            //             address:{
            //                 city:'Gomel',
            //                 street:'Krestianskaya',
            //                 number:32,
            //                 zipcode:'420017',
            //                 geolocation:{
            //                     lat:'-50.3159',
            //                     long:'120.1496'
            //                 }
            //             },
            //             phone:'+375332523322'
            //         }
            //     )
            // })
            //     .then(res=>res.json())
            //     .then(json=> {
            //         console.log(json)
            //     })
        }
        setRegistration(false)
    }) as () => Function, [registration])

    interface CartInt {
        products: Array<Object>
    }

    let cartObj = {

    }

    const [cartModal, setCartModal] = useState(false)
    const [cart, setCart] = useState([])

    return (
    <div className="App">
        {/*<Cart list={cart}/>*/}
        <div className={'main-wpaper'}>
            {registerModalState ? <Register setReg = {setRegistration}/> : null}
            <Header searchFunc={setText}/>
            <CategoriesBar handler={setCategory}/>
            <div className={'filters-content-flex-wrap'}>
                <Filters filterFunc={setFilter} filterState={filter}/>
                <Content loaded={items} sort={setSortPrice} currentSort={sortPrice} text={text} reg={regex} cart={cart}/>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
