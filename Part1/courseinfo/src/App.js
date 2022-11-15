//---------------------------------------------------------- PART 1.1 and 1.2 -------------------------------------------------------
/*const Header = (props) => {
  return(
    <h1> {props.course} </h1>
  )
}

const Part = (props) => {
  return(
    <p> {props.part} {props.exercises} </p>
  )
}

const Content = (props) => {

  return(
    <>
      <Part part = {props.part1} exercises={props.exercises1}/>
      <Part part = {props.part2} exercises={props.exercises2}/>
      <Part part = {props.part3} exercises={props.exercises3}/>
    </>    
  )
}  

const Total = (props) => {
  return(
    <p>Number of exercises  {props.total}</p>
  )
} */
//-----------------------------------------------------------------------------------------------------------------------------------------------

const Header = (props) => {
  return(
    <h1> {props.course.name} </h1>
  )
}


const Content = (props) => {
  
  const [first,second,third] = props.t.parts

  return(
    <>
      <p> {first.name}   {first.exercises}  </p>
      <p> {second.name}  {second.exercises} </p>
      <p> {third.name}   {third.exercises}  </p>
    </>    
  )

}  


const Total = (props) => {
  
  const [first,second,third] = props.course.parts
  
  return(
    <>
      <p>Total = { first.exercises + second.exercises + third.exercises }</p>
    </>
  )

}

const App = () => {

  //-------------------------------------------------------PART 1.1 and 1.2-------------------------------------------------------------
  /*  const courseA = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }                   */
  //--------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------PART 1.4**-------------------------------------------------------
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]
  // const [first,second,third] = parts
//--------------------------------------------------------------------------------------------------------------------------------

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      
      <Header   course = {course}     />
      <Content  t      = {course}     />
      <Total    course = {course}     /> 
       
      {
      //-----------------------------------------------PART 1.4**----------------------------------------------------
      /* <h1> {course} </h1>
        
        <p> {first.name}  {first.exercises}  </p>
        <p> {second.name} {second.exercises} </p>
        <p> {third.name}  {third.exercises}  </p> */
      //-------------------------------------------------------------------------------------------------------------
      }

      {
      //------------------------------------------------PART 1.3--------------------------------------------------
      /* <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part1.exercises}</p>
      <p>{part3.name} {part1.exercises}</p> */
      //-----------------------------------------------------------------------------------------------------------
      }  
    </div>


    //---------------------------------------------------PART 1.1 and 1,2 ------------------------------------------------------------
    /*<div>
      <Header course = {courseA} />
      <Content 
        part1={part1}   exercises1 ={exercises1}
        part2={part2}   exercises2 ={exercises2}
        part3={part3}   exercises3 ={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>*/
    //-----------------------------------------------------------------------------------------------------------------------
  )
}

export default App
