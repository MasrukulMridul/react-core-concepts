import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Rubel Nayok','Jashim','Baapparaj','salman', 'bappi','korim']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$9.99'},
    {name:'kkppl', price:'$19.99'},
  ]
  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header"> 
      <p>my first paragraph</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      
       {/* <Product  product={products[0]}></Product>
       <Product  product={products[1]}></Product> */}

       {/* <Person name = {nayoks[0]} nayika="mousumi"></Person>
       <Person name = {nayoks[1]} nayika="sabana"></Person>
       <Person name = {nayoks[2]} nayika="fokinni"></Person>
       <Person name = {nayoks[3]} nayika="Bobita"></Person> */}
       
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '400px',
    width:'400px',
    float: 'left',
  }
  return(
    <div style={productStyle}>
     <h2>{props.product.name}</h2>
     <h3>{props.product.price}</h3>
     <button>Buy Now</button>
    </div>
  )
}
function Person(props){ 
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1>Nayok: {props.name}</h1>
    <h3>Nayika: {props.nayika}</h3>
  </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);  
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick ={() => setCount(count - 1)}>Decrease</button>
      <button onClick ={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
