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
      const response = await fetch('http://localhost:8080/auth/login', {
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



async function postCrop() {
  try {
      const response = await fetch('https://farmsaasapi.onrender.com/geo/addgeo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
          credentials: 'include',
          withCredentials: true,
          body: JSON.stringify({
            "name":"abseron zeytun 1",
            "country":"Azerbaycan",
            "city":"Absheron",
            "area":453,
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                  [532414,5342372],
                  [532214,6542325]
                ]
            }
        }),
      });

      const responseData = await response.json();
      if (response.ok && responseData.success) {
          console.log("---------------------------")
          console.log(responseData.data);
      } else {
          console.error("Login failed:", responseData.error);
      }
  } catch (e){
      console.error("catch error");
  }
}


//postCrop()



async function putCrop() {
  try {
      const response = await fetch('https://farmsaasapi.onrender.com/geo/updategeoline?Id=65d47c0de703863db82da586', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
            },
          credentials: 'include',
          withCredentials: true,
          body: JSON.stringify({
            "name":"taxıl",
            "country":"Azerbaycan",
            "city":"Absheron",
            "area": 453,
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                  [33333333,44444444],
                  [11111111,22222222]
                ]
            }
        }),
      });

      const responseData = await response.json();
      console.log("---------------------------")
      if (response.ok && responseData.success) {
          console.log(responseData);
      } else {
          console.error("Login failed:", responseData.error);
      }
      console.log(responseData);
  } catch (e){
      console.error("catch error");
  }
}


putCrop();