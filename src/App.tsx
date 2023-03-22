import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import CategoriesBar from "./CategoriesBar";
import Content from "./Content";
import Filters from "./Filters";
import Footer from "./Footer";
import sortPrice from "./Content"
import styleGrid from "./Card.module.css";
import {it} from "node:test";


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
                        console.log('Отсортировано по цене')
                    } else if (sortPrice === 'high') {
                        setItems(result.sort((a: Item, b: Item) => b.price - a.price))
                        console.log('Отсортировано по цене')
                    } else {
                        setItems(result)
                        console.log("Загружен список")
                    }
                })
    }) as () => Function, [category, sortPrice, filter, text])

    // useEffect((() => {
    //     if (filter == true) {
    //         setItems(items.filter((item: Item) => item.filter == 1))
    //         console.log("Отфильтровано по фильтру")
    //     }
    // }) as () => Function, [filter, items.length, text])

    useEffect((() => {
        if (text !== '') {
            // @ts-ignore
            setItems(items.filter((i: Item) => i.title.includes(text)))
            console.log("Отфильтровано по поиску")
        }
    }) as () => Function, [text, items.length])

  return (
    <div className="App">
        <div className={'main-wpaper'}>
            <Header searchFunc={setText}/>
            <CategoriesBar handler={setCategory}/>
            <div className={'filters-content-flex-wrap'}>
                <Filters filterFunc={setFilter} filterState={filter}/>
                <Content loaded={items} sort={setSortPrice} currentSort={sortPrice}/>
            </div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
