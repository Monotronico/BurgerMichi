import { Carousel } from "./containers/Carousel";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Burguers Michi</h1>
      </header>
      <section>
        <div>
          <h2>Ordena tu pedido Aqui</h2>
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/9addd871-f536-468e-9af4-6216c2a92913"
          ></iframe>
        </div>
        <div>
          <h2>Ofertas</h2>
          <Carousel />
        </div>
      </section>
    </div>
  );
}

export default App;
