import './App.css';
import Button from './components/button/Button';
import Card from './components/Card/Card';
import UserCard from './components/UserCard/UserCard';
import Data from './Data';
import Timer from './Timer';
import Weather from './Weather';

function App() {
  return (
    <div>
      {/* <Data /> */}
      {/* <Timer /> */}
      {/* <Weather /> */}
      {/* <UserCard /> */}
      {/* <Button color="red" font="heading">
        Kup teraz
      </Button> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <Card color="violet" image="0" />
        <Card color="green" image="1" />
        <Card color="orange" image="2" />
      </div>
    </div>
  );
}

export default App;
