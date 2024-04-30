import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";

function Calculator(props) {
    const [temparature, setTemparature] = useState('');
    const [scale, setScale] = useState('c');

    const handlCelsiusChange = (temparature) => {
        setTemparature(temparature);
        setScale('c');
    }

    const handlFahrenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale('f');
    }

    const celsius = scale === 'f' ?
        tryConvert(temparature, toCelsius) : temparature;
    const fahrenheit = scale === 'c' ?        
        tryConvert(temparature, toFahrenheit) : temparature;

    return (
        <div>
            <TemparatureInput 
            scale="c"
            temparature={celsius}
            onTemparatureChange={handlCelsiusChange}/>
            <TemparatureInput scale="f"
            temparature={fahrenheit}
            onTemparatureChange={handlFahrenheitChange}/>
            <BoilingVerdict
            celsius={parseFloat(celsius)}/>
        </div>
    )
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 /9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temparature, convert) {
    const input = parseFloat(temparature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}

export default Calculator;