import React from "react";
import { useRef } from "react";
import './style.scss';

export const CreditCard = () => {

    const cardInputFirst = useRef();
    const cardInputSecond = useRef();
    const cardInputThird = useRef();
    const cardInputFourth = useRef();

    const handleChangeFirst = (e) => {
        if (e.target.value.length == 4){
            cardInputSecond.current.focus();
        }
    }

    const handleChangeSecond = (e) => {
        if (e.target.value.length == 4){
            cardInputThird.current.focus();
        }
    }

    const handleChangeThird = (e) => {
        if (e.target.value.length == 4){
            cardInputFourth.current.focus();
        }
    }


    return (
        <div className="credit-card">
            <p>Zadejte číslo kreditní karty</p>
            <form>
                <input type="text" maxLength="4" ref={cardInputFirst} onChange={handleChangeFirst}/>
                <input type="text" maxLength="4" ref={cardInputSecond} onChange={handleChangeSecond}/>
                <input type="text" maxLength="4" ref={cardInputThird} onChange={handleChangeThird}/>
                <input type="text" maxLength="4" ref={cardInputFourth}/>
            </form>
        </div>        
    )
}