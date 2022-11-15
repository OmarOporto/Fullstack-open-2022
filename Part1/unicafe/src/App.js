import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) =>( <><td>{text}</td><td>{value}</td></>) 


const Statistics = (props) => {
  if ((props.good===0)&&(props.neutral===0)&&(props.bad===0)){
    return(
      <div>No feedback given</div>
    )
  }
  
  return(
    <table>
      <tbody>
        <tr><StatisticLine text="good" value ={props.good} /></tr>
        <tr><StatisticLine text="neutral" value ={props.neutral} /></tr> 
        <tr><StatisticLine text="bad" value ={props.bad} /></tr>
        <tr><StatisticLine text="Total" value ={props.total} /></tr>
        <tr><StatisticLine text="average" value ={(props.good - props.bad)/props.total} /></tr>
        <tr><StatisticLine text="average" value ={((props.good)/props.total)*100 + "%" } /></tr>
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGClick = () =>{setGood (good+ 1) ; setTotal (total+ 1)} 
  const handleNClick = () =>{setNeutral (neutral+ 1); setTotal (total+ 1)}
  const handleBClick = () =>{setBad (bad+ 1); setTotal (total+ 1)}

  return (
    <div>
      <h1>give feedback</h1><br></br>
      <Button onClick={handleGClick} text='good'/>
      <Button onClick={handleNClick} text='neutral'/>
      <Button onClick={handleBClick} text='bad'/>   
      <h1>statics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App
