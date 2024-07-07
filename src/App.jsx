import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
     <Stack spacing={2} direction="row">
      <Link to="/feedback">
      <Button variant="contained">Feedback</Button>
      </Link>
      <Link to="/phonebook">
      <Button variant="contained">Phonebook</Button>
      </Link>
      </Stack>
       
    </>
  )
}

export default App
