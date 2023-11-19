// import Glogout from './Glogout'

// function Home(){

//     return(
//         <>
//             <h2>Welcome Home</h2>

//             <Glogout />
        
//         </>
//     )
// }
// export default Home;

// Create a new component for the Home page (e.g., Home.js)


import { useEffect, useState } from 'react';
import axios from 'axios';
//import logo from './assets/cat.jpg'
import './assets/home.css'

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user's email from local storage or state
    const userEmail = localStorage.getItem('userEmail');

    // Make an API call to get user details
    axios.get(`http://localhost:3000/login/${userEmail}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []); // Run this effect only once on component mount

  return (
    <div className=".container">
        <div className='bg-white p-5 rounded w-50 m-5'>
      {/* <h2>Welcome to the Home Page</h2> */}
      {user && (
        <div>
            {/* <div className=".rounded-circle img">
          <img src={logo} alt='logo' />
          </div> */}
            <div className="details-section">
          <h3>{user.name}</h3>
          <h5>{user.title}</h5>
          <p>Email: {user.email}</p>
          <p>{user.bio}</p>

          {/* Add more fields as needed */}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;
