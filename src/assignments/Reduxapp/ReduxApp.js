
import './ReduxApp.css';
import DataTable from './Components/DataTable';
import SignupPage from './Components/SignupPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import EditSignupForm from "./Components/EditedSignupForm"

function ReduxApp() {
  return (
    <div className="App">
      <h1>hi</h1>


      {/* <Router>
        <Routes>
        <Route exact path='/' element={<SignupPage />} />
        <Route exact path='/table' element={<DataTable />} />
        <Route exact path ='/edit/:id' element={<EditSignupForm />} />
        </Routes>
        
      </Router> */}


   

    </div>
  );
}

export default ReduxApp;
