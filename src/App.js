import { Container } from 'react-bootstrap';
import './App.css';
import MyComments from './components/Comments/comments';
import Grid from './components/grid/grid';
import MyNavbar from './components/Navbar/navbar';



function App() {
  return (
     <div  id="cnt">
       <Container>
         <MyNavbar/>
         </Container>
         <Grid />
          <MyComments/>
     </div>
  );
}

export default App;
