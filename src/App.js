import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

const hour = new Date(2021,1,1,20).getHours()

var hello = "";

const style = {
  color: "red"
};

if(hour < 12){
  hello = "Good morning";
  style.color="red";
} else if(hour < 18){
  hello = "Good Afternoon"
  style.color="green";
} else {
  hello = "Good Night"
  style.color ="blue";
}

function App() {
  return (
    <div className="App">
    <h1 className="{style}">{hello}</h1>
    </div>
  );
}

export default App;
