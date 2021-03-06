
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
import Departement from './component/Departement';
import Filiere from './component/Filiere';
import Dept from './component/Dept'

// import Stages from './component/Stages';
// import AdminCards from './component/AdminCards';

import User from './component/User';
import Enseignants from "./component/Enseignants";
import Etudiants from "./component/Etudiants";



function App() {
  //const [{ note_id }] = useStateValue();
  return (
    <div className="App">
      <Router>
       <Switch>
           <Route path="/enseignants">
               <Navbar />
               <Enseignants />


               <Footer />

           </Route>
           <Route path="/etudiants">
               <Navbar />
               <Etudiants />


               <Footer />

           </Route>
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

          {/* <Route path="/Stages">
            <Navbar />
            <Stages/>


            <Footer />

          </Route> */}


          <Route path="/NouvelleNotes">
          
            <NouveauDocument />


            <Footer />

          </Route>

          <Route path="/NoteDetail/:id">
            <Navbar Notes="active" />
            <NoteDetail />


            <Footer />

          </Route>

       

          



          {/* <Route path="/admin">


            <Navbar Acceuil="active" />
            <Banner />

            <AdminCards />

            <Footer />

          </Route> */}

          <Route path="/User">
            <Navbar />
            <User />


            <Footer />

          </Route>

          <Route path="/Departement">
            <Navbar />
            <Departement />
            <Footer />
          </Route>

          <Route path="/Filiere">
            <Navbar />
            <Filiere />
            <Footer />
          </Route>

          <Route path="/Dept">
            <Navbar />
            <Dept />
            <Footer />
          </Route>


            <Route>
            <Navbar Acceuil="active" />
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
