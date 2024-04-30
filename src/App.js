import Home from "./components/home";
import DataProviders from "./context/DataProviders";

function App() {
  return (
    <DataProviders>
          <Home/>
    </DataProviders>
  );
}

export default App;
