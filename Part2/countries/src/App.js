import { useState } from 'react'
import Book from './Components/Book'

const Filter = ({filter,handleFilter}) =>
(
  <div>
    Filter Countries < input value ={filter ||""} onChange={handleFilter}/>
  </div>
)

function App(props) {
  const [filter, setFilter] = useState()
  const List = props.notes

  const handleChange = setValue => a => {setValue(a.target.value)} 
  
  const List2 = List.map(note =>note.name.common)
  return (
   <div>
      <h2>Countries</h2>
      <Filter filter={filter} handleFilter={handleChange(setFilter)}/><br></br>
      <div>
        <Book note={List2} filt={filter || ""} List={List}/>
      </div>
   </div>
  );
}

export default App;