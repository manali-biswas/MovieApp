import './App.css';
import { BrowserRouter , useHistory } from "react-router-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

function App() {
  
  const history = useHistory();

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main history={history}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
