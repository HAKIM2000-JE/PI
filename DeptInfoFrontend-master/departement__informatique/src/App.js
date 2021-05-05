
import './App.css';
import logo from './image/Departementlogo1blanc.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";

import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Enseignant from './component/Enseignant';
import Eleve from './component/Eleve';
import Note from './component/Note';
import Notes from './component/Notes';
import NoteDetail from './component/NoteDetail';
import NouveauDocument from './component/NouveauDocument';



function App() {
  const [{ note_id }] = useStateValue();
  return (
    <div className="App">
      <Router>
       <Switch>
          <Route path="/Enseignant">
              <Navbar />
              <Enseignant />
             

              <Footer />

          </Route>
          

          <Route path="/Eleve">
            <Navbar />
            <Eleve />


            <Footer />

          </Route>

          <Route path="/Notes">
            <Navbar Tableau="link_active" />
            <Notes />


            <Footer />

          </Route>


          <Route path="/NouvelleNotes">
          
            <NouveauDocument />


            <Footer />

          </Route>

          <Route path="/NoteDetail/:id">
            <Navbar />
            <NoteDetail />


            <Footer />

          </Route>

       

            

            <Route>
            <Navbar type="trasparent" Acceuil="link_active" />
            <Banner />
          
            <Cards />

            <Footer />

         </Route>
       </Switch>
      </Router>
      
       
     
    </div>
  );
}

export default  App;
