import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'

// const notes = [
//   { name: 'Arto Hellas', number: '040-123456', id: 1 },
//   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ] notes={notes} 
axios.get('http://localhost:3001/persons').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})