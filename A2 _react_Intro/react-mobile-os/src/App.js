import './App.css';

function App() {
  let title1 = "Mobile Operating System";
  let title2 = "Mobile Manufacturers";
  let list1 = ["Android","Blackberry","IPhone","Windows Phone"];
  let list2 = ["Samsung","HTC","Micromax","Apple"];

  return (
    <div className="App">
      <Comp title={title1} items={list1}/>
      <Comp title={title2} items={list2}/>
    </div>
  );
}

const Comp = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {/* iterating over items array to add to list */}
        {props.items.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
