// const Parts = ({name, exercises}) =>(
//   <p> {name} {exercises} </p>
// )  

// const Content = ({parts}) =>
// (   
//   <>
//     {parts.map(parts =>( 
//           <Parts key = {parts.id} name = {parts.name} exercises = {parts.exercises}/>
//       )
//     )
//     } 
//     {
//       <Total key ={parts.id} parts = {parts}/>  
//     } 
//   </> 
// )

// const Header = ({name}) =>(<h1> {name} </h1> )

// const Total = ({parts}) => 
// (
//     <p>
//       Total of {parts.reduce((s,parts)=>s + parts.exercises,0)} exercises
//     </p>
// )
  
// const Courses = ({course}) =>  (
//   <>
//     {course.map( course => (
//       <div key ={course.name}>
//         <Header   name={course.name}/>
//         <Content  parts={course.parts}/>
//         {/* <Total  parts={course.parts}/> */}
//       </div>  
//       )
//     )}
//   </>
// )

import Courses from './Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
    return (
      <>
        <Courses course={courses}/>           
      </>
   )
  }
  
  export default App