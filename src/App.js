import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
//   var person={
//  name: 'SOUROV',
//  job:'Googler'
//   }
  // var style={
  //   color:'green',
  //   backgroundColor:'pink'
  // }
  const nayoks=['Sourov','dibyo','sourov purkayastha','d'];
  const products=[
    {name:'photoshop',price:'$67'},
    {name:'illastrator',price:'$10'},
    {name:'PDF Reader',price:'$1'},
    {name:'Adove Reader',price:'$1'}
  ]
 const friends=[
  {friendName:'Anik',age:24},
  {friendName:'shuhin',age:24},
 ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
         <h1 className="" style={style}>My heading:{person.name+" "+person.job}</h1>
         <p>My first react paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a> */}
  <Counter></Counter>
  <Users></Users>
        <p>I am react person</p>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            friends.map(friend=><li>{friend.friendName}</li>)
          }
            
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        {
          friends.map(friend=><Friend friend={friend}></Friend>)
        }
   
       {/* <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
       <Product product={products[2]}></Product> */}
        <Person name={nayoks[0]} gf='debarati'></Person>
       <Person name='dibyo'gf='deeya'></Person>
       <Person name='Sourov purkayastha' gf='Debarati choudhury deeya'></Person>

      </header>
    </div>
  );
}
function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    float:'left',
    height:'200px',
    width:'200px'

  }
  
  const {name,price}=props.product;

  

    
    
  
  
  // console.log(name,price);
 
  return (
    <div style={productStyle}> 
      {/* <h2>{props.product.name}</h2> */}
  {/* <h5>{props.product.price}</h5> */}
       <h3>{name}</h3>
   

       <h5>{price}</h5>
      
       
      <button>By now</button>
      

    </div>
    
  )
}
function Friend(props) {
  const friendStyle={
    border:'1px solid gray',
  borderRadius:'5px',
  backgroundColor:'lightgray',
  float:'left',
  height:'200px',
  width:'200px'
  }
  const{friendName,age}=props.friend;

  return(
    <div style={friendStyle}> 
      {/* <h2>{props.product.name}</h2> */}
  {/* <h5>{props.product.price}</h5> */}
       <h3>{friendName}</h3>
   

       <h5>{age}</h5>
      
       
      <button>By now</button>
      

    </div>

  )
}

// same look and field..

function Person(props) { 
  const personalStyle={
    border:'2px solid red',
    margin:'10px',
    padding:'10px'
  }
  return(
   <div style={personalStyle}> 
    
    <h1>Name:{props.name}</h1>  
  <h3>Hero of {props.gf}</h3> 
  </div>
  );
}

function Counter() {
  const [count,setCount]=useState(10);
  // const handleIncrease=()=>{ setCount(count+1);
    // const newCount=count+1;
    
  // }
  return(
    <div>
      <h1>Count:{count}</h1>
   
         
       
    
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=>{
        if(count<1){
          setCount(0)
        }
        else{
          setCount(count -1);
        }
      }}>

      </button>
     
      {/* <button onClick={handleIncrease}>Increase</button> */}
      {/* <button onClick={()=>setCount(count-1)}>Decrease</button> */}

    </div>
  )
}
function Users() {
  const  [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      // .then(users=>setUsers(users))
      .then(data=>setUsers(data))
    },[])
  return(
    <div>
     <h2>Dynamic Users:{users.length}</h2>
     {
       <ul>
         {
           console.log(users)
         }
         {
           users.map(user=><li>{user.phone}</li>)
         }
       </ul>
     }
    </div>
  )
  
}

export default App;
