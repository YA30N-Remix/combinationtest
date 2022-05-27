
import { useEffect, useState } from 'react';
import './App.css';
import ApiServices from './ApiServices'


function App() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {

    ApiServices.GetAllData().then(data => {
      setUserdata(data)
    });

  }, []);

  return (
    <div className="App">
      <div class="cards-container">

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img src={userdata[0].picture.medium} alt={userdata[0].name.last} />
            </div>
          </header>

          <h3>{userdata[0].name.first}  {userdata[0].name.last}</h3>
          <div class="desc">
          <span>Country : {userdata[0].location.country}</span>
          </div> 
          <footer>
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
          </footer>
        </div>

      </div> 
    </div>
  );
}

export default App;


