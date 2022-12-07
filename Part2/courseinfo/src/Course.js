const Parts = ({name, exercises}) =>(
    <p> {name} {exercises} </p>
  )  
  
  const Content = ({parts}) =>
  (   
    <>
      {parts.map(parts =>( 
            <Parts key = {parts.id} name = {parts.name} exercises = {parts.exercises}/>
        )
      )
      } 
      {
        <Total key ={parts.id} parts = {parts}/>  
      } 
    </> 
  )
  
  const Header = ({name}) =>(<h1> {name} </h1> )
  
  const Total = ({parts}) => 
  (
      <p>
        Total of {parts.reduce((s,parts)=>s + parts.exercises,0)} exercises
      </p>
  )
    
  const Courses = ({course}) =>  (
    <>
      {course.map( course => (
        <div key ={course.name}>
          <Header   name={course.name}/>
          <Content  parts={course.parts}/>
          {/* <Total  parts={course.parts}/> */}
        </div>  
        )
      )}
    </>
  )

  export default Courses 