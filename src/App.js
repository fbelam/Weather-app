import { useState } from "react";


function App() {

  const [city, setCity] = useState()
  const [weatherForecast, setweatherForecast] = useState({})

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=a1a0985033b54b08b1d232553240506&q=campinas&lang=pt`)
    .then ((response) => {
      if(response.status === 200){
      return(response.json())}
    })
    .then((vasco) =>{
      console.log(vasco)
      console.log(vasco.location)
      console.log(vasco.current.feelslike_c)
    })
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-md nav-bar-dark bg-dark mb-4">
        <a className="navbar-brand text-white" href="stop">
          Previsão de tempo
        </a>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>
            Verifique a previsao de tempo da sua cidade 
          </h1>
          <p className="lead">
            Digite o nome da sua cidade
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input 
              onChange={handleChange}
              className="form-control" 
              value={city}/>
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar 
          </button>

          <div>
            <div>
              <img></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
