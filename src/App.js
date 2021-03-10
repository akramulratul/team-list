import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header/Header';
import Player from './component/player/Player'


function App() {
  return (
    <div className="container img">
        <Header></Header>
        <Player></Player>
    </div>
  );
}

export default App;
