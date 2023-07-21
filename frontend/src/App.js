import './App.css';
import { userSignIn, userSignUp } from './utils/supabase';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1>Welcome to DashJobs</h1>
      <p>A one stop solution to finding opportunities and applying to them</p>
      <br></br>
      <h3>Click here to Login to the application</h3>
      <button onClick={() => userSignIn("shangodwork@gmail.com", "dummypassword")} >Login</button>
      <br></br>
      <h4>New to the app? Sign up here!</h4>
      <Link to="/signup">
      <button onClick={() => userSignUp("shangodwork@gmail.com", "dummypassword")}>Sign Up</button>
      </Link>
      
    </div>
  );
}

export default App;
