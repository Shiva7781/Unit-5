import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="App">
      <Logo path={logo}></Logo>

      <Links options={["Services", "Projects", "About"]}></Links>

      <Button></Button>
    </nav>
  );
}


const Logo = (props) => {

  return <img src={props.path} alt="missing"></img>
}
const Links = (props) => {

  return (

    <ul className="menu">

      {props.options.map((e) => {

        return <li className="options">{e}</li>
      })}
    </ul>
  )
}

const Button = () => {

  return <button>Contact</button>
}

export default App;
