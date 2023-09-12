import logo from './logo.svg';
import './App.css';
import './components/Welcome';
import './components/StateComponent';
import './components/EventComponent';
import StateComponent from './components/StateComponent';
import EventComponent from './components/EventComponent';
import ListComponent from './components/ListComponent';
import StyledComponent from './components/StyledComponent';
const Welcome = ({username, age}) => {
  return (<>
    <p> {username}님 {age}세 안녕하세요!</p>
  </>)
}
function App() {
  return (
    <div className="App">
    <StateComponent></StateComponent>
    <EventComponent></EventComponent>
    <ListComponent></ListComponent>
    <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
