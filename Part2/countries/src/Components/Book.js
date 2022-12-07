import { useState } from 'react'
import axios from "axios"

const Listed = ({list, index}) => {
    // console.log(list[index].languages)
    return(
        Object.values(list[index].languages).map(lang => <div key ={lang}>• {lang}</div>)
    )
}

const Info = ({list, index2}) => {
    const index = index2 || 2
    const c = list[index].capital || []
    var Capital = c[0] || "Null"

    const [temperature, setTemperature] = useState("")
    const [picture, setPicture] = useState("01d")
    const [wind, setWind] = useState(0)

    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Capital}&appid=${
            process.env.REACT_APP_API_KEY
        }`
    ).then(response=>{
        setTemperature(response.data.main.temp)
        setPicture(response.data.weather[0].icon)
        setWind(response.data.wind.speed)
        console.log(response.data)
        console.log(response.data.wind.speed)
    })


    console.log(Capital)
    
    return(
        <>
            <h2>NAME: {list[index].name.common}</h2>
            <div>capital: {Capital}</div>
            <div>Area: {list[index].area} m^2</div>
            <h3>Languages</h3>
            <Listed list={list} index={index}/>
            <img src = {list[index].flags.png} width="200" height="141" alt=""/>
            <h2>Weather in {Capital}</h2>
            <div>Temperature {(temperature -273.15).toFixed(2)} Celcius</div>
            <img src = {`http://openweathermap.org/img/wn/${picture}@2x.png`} width="100" height="91" alt=""/>
            <div>Wind {wind} [m/s]</div>
        </>
    )
}

const Show = ({list,result,note}) => {
    const [showcountry, setShowCountry] = useState("")

    const handleChange = () => {setShowCountry("")} 
    
    const handleShow = name2 => () => setShowCountry (note.indexOf(name2))

    return(
    result.map(name =>  {
        let index2 = note.indexOf(name);
    return( <div key={name}>   
                <div>----------------------------------------------------------------------------------------------</div>
                <div> {name} <button onClick={handleShow(name)} onChange={handleChange}>Show</button></div>
                {showcountry===index2 &&  <Info list={list} index2={showcountry}/>}
            </div>
        )
    } 
    )
) 
}

const Book = ({ note, filt, List}) => 
{   
    const result = note.filter(name => name.toLowerCase().includes(filt.toLowerCase()));

    if( result.length<11 && result.length>1) { 
        
        return (
            <Show list = {List} result={result} note={note}/>
        )

    }
    else if (result.length===1)
    {   let index = note.indexOf(result[0]);
        console.log(result)
        return(
            <Info list={List} index2={index}/>
        )
    }  
    else if (result.length>=11)
    {
        return(
            <div>Too many matches, specify another filter</div>
        )
    }  
    else
    {
        return(
            <h3>Not Matches</h3>
        )
    }
}
export default Book