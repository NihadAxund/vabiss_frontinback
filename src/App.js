import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


async function loginUser(email, password, fullname) {
  try {
      const response = await fetch('https://farmsaasapi.onrender.com/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password,
              fullname: fullname
          }),
          credentials: 'include'
      });

      const responseData = await response.json();
      console.log("---------------------------")
      if (response.ok && responseData.success) {
          console.log("Login successful!");
          console.log("User ID:", responseData.data._id);
          console.log("User Fullname:", responseData.data.fullname);
          console.log(responseData);
      } else {
          console.error("Login failed:", responseData.error);
      }
  } catch (error) {
      console.error("An error occurred:", error.message);
  }
}


loginUser("User@gmail.com", "User123A4$", "User");



function getAuthTokenFromCookie() {
  const cookies = document.cookie.split(';');
  return cookies
}
async function getAllGeoLines() {
  try {
      const cookies = getAuthTokenFromCookie();
      console.log(cookies);
      const response = await fetch('https://farmsaasapi.onrender.com/geo/getallgeo', {
          method: 'GET',
          credentials: 'include',
          withCredentials: true,
          headers: {
              'Content-Type': 'application/json'
          }
      });

      // Sunucudan gelen cevabı JSON olarak alın
      const data = await response.json();

      // Cevabı işleyin
      if (response.ok) {
          console.log('GeoLines:', data);
      } else {
          console.error('Error:', data.error);
      }
  } catch (error) {
      console.error('An error occurred:', error.message);
  }
}

//getAllGeoLines();



