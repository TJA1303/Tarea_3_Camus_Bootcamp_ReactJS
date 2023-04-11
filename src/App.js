import logo from './logo.svg';
import './App.css';
import Clock from './Components/Component_class';
import ComponentFuncional from './Components/Component_funcional';
/* PARA COMENTAR ES SHIFT+ALT+A */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ComponentFuncional></ComponentFuncional>
        {/* <Clock></Clock> */}
      </header>
    </div>
  );
}

export default App;
