import { Provider } from "react-redux";
import { store } from "./store/index"
import Notes from "./components/Notes";
import './App.css'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Notes />
      </div>
    </Provider>

  );
}

export default App;
