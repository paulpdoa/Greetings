import './App.css';
import reactDom from 'react-dom';

const hour = new Date().getHours()

var hello = "";

const style = {
  color: "white"
};

if(hour < 12){
  hello = "Good Morning";
  style.color="red";

} else if(hour < 18){
  hello = "Good Afternoon"
  style.color="green";

} else {
  hello = "Good Night"
  style.color ="blue";
}

const App = () => {
  return (
    <div className="App">
    <h1 style={style}>{hello}</h1>
    </div>
  );
}

export default App;
