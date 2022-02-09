import './App.css';
// Importing the navbar component inside
// the main app file
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () =>{
return (
	<>
		<Navbar/>
		<Login/>
		<Signup/>
		
		

	</>
);
}

export default App;
