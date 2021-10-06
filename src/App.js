import './App.css';
import { HomePageMessage } from "./HomePageMessage/HomePageMessage";

export function App(props) {
  return (
    <div className="App">
       <HomePageMessage message={props.message}/>
    </div>
  );
}

