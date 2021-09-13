import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>
      <Form />
    </div>
  );
}

export default App;
