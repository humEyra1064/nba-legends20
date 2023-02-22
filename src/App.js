
import { Container } from 'react-bootstrap';
import './App.css';
import CardContainer from './components/cardcontainer/CardContainer';
import Header from './components/header/Header';

function App() {
  return (
   
      <Container className='text-center mt-4'>
     <Header/>
     <CardContainer/>
     </Container>
    
  );
}

export default App;
