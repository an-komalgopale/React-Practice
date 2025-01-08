import Greet from "./Components/Greet";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Greeting from "./Components/Greeting";
import ProductInfo from "./Components/ProductInfo";
import Person from "./Components/Person";
import Product from "./Components/Product";
import Weather from "./Components/Weather";
import UserStatus from "./Components/UserStatus";
import { BiAlarm } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";
import IconComponent from "./Components/IconComponent";
import { useState } from "react";
import ExampleOne from "./Components/ExampleOne";
import Counter from "./Components/Counter";
import ToDo from "./Components/ToDo";
import Profile from "./Components/Profile";

const App = () => {

  const [count, setCount] = useState(() => {
    const initialCount = 0;
    return initialCount;
  });

  const [random, setRandom] = useState(() => {
    const randNum = Math.floor(Math.random()*100);
    return randNum;
  })

  const generateRandom = () => {
    const randNum = Math.floor(Math.random()*100);
    setRandom(randNum);
  }

  console.log(count)

  const increment = () =>{
    setCount(count+1)
  }
  const decrement = () =>{
    setCount(count-1)
  }

  const[fruits, setFruits] = useState(["Apple", "banana", "kivi", "cherry"]);

  const addFruit = () => {
    setFruits([...fruits, "strawberry"])
  }
  const removeFruit = () => {
    setFruits(fruits.filter(f=>(f !== 'strawberry')))
  }

  const[movies, setMovies] = useState([
    { id : 1, title : 'Equalizer 3', ratings : 4},
    { id : 2, title : 'kite', ratings : 5},
    { id : 3, title : 'barbie', ratings : 9},
    { id : 4, title : 'open heimer', ratings : 8},
  ]);

  const updateRating = () => setMovies(movies.map((movie) => (movie.title === 'barbie')? { ...movie, ratings : 9.7} : movie)); 

  

  // const name = "React learning";
  // const multiply = (a, b) => a * b;
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  // const products = [
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     price: 1200,
  //     availability: "In stock",
  //   },
  //   {
  //     id: 2,
  //     name: "Smartphone",
  //     price: 800,
  //     availability: "Out of stock",
  //   },
  //   {
  //     id: 3,
  //     name: "Headphones",
  //     price: 150,
  //     availability: "In stock",
  //   },
  //   {
  //     id: 4,
  //     name: "Monitor",
  //     price: 300,
  //     availability: "Limited stock",
  //   },
  // ];
  // return (
  //   <div>
  //     {/* <ul>
  //       {numbers.map((number, index) => (
  //         <li key={index}>{number}</li>
  //       ))}
  //     </ul> */}

  //     {/* destructuring  */}

  //   {/* {products.map(({ id, name, price, availability }) => (
  //       <ul key={id}>
  //         <li>ID: {id}</li>
  //         <li>Name: {name}</li>
  //         <li>Price: {price}</li>
  //         <li>Availability: {availability}</li>
  //       </ul>
  //     ))} */}

  //   {/* <User name = "test name" age = {20} hello = "helloo"/>
  //   <Person name = "john doe" age = {22}/> */}
  //   {/* <Product>
  //     <h1>Product</h1>
  //     <p>product paragraph</p>
  //   </Product> */}

  //   </div>
  // );
  return (
    <div>
     
      <h2>Random Number: {random}</h2>
      <button onClick={generateRandom}>generate random number</button>

      <Counter />
      <ToDo />
      {/* parent componnet app sending h1 and p to product component and then product compoenet rendering as props.childeren*/}
      
      {/* <h1>Movies are</h1>
        {
          movies.map((movie) => (
            <ul key={movie.id}>
              <li>Title: {movie.title}</li>
              <li>Ratings: {movie.ratings}</li>
            </ul>
          ))
        } */}
      
      {/* <h1>Title: {movie.title}</h1>
      <p>Rating: {movie.ratings}</p> */}

      {/* <button onClick={updateRating}>update Rating</button>

      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <h1>Fruits are</h1>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
      
      <button onClick={addFruit}>Add fruit</button>
      <button onClick={removeFruit}>Remove fruit</button> */}
      

      {/* h1 and p are child elements of product component*/}
      {/* <Person>
        <h3>Person content</h3>
        <p>Some content for person component</p>
      </Person> */}

      {/* <Password isValid={false} /> */}

      {/* conditional rendering exercise */}

      {/* <Weather temperature={10} />
      <Weather temperature={60} />
      <Greeting timeOfDay="afternoon" />
      <UserStatus loggedIn={true} isAdmin={false} />
      <StyledCard />
      <ProfileCard />
      <IconComponent />
      <Button />
      <Move /> */}
      <ExampleOne />
      <Profile />
    </div>
  );
};

const User = ({ name, age, hello }) => {
  return (
    <section>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
      <h3>greeting : {hello}</h3>
    </section>
  );
};

const ValidPassword = () => <h1>valid Password</h1>;
const InvalidPassword = () => <h1>invalid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

function Paragraph() {
  const copied = () => {
    console.log("content copied");
  };
  return (
    <p onCopy={copied}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.
    </p>
  );
}

const Button = () => {
  return <button onClick={() => console.log(Math.random() * 10)}>Click</button>;
};

const Move = () => {
  const moveHandler = () =>{
    console.log("mouse has been moved");
  }
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga
      accusantium tenetur quis quod deserunt, aperiam eveniet totam eius unde,
      eos nisi, voluptate sapiente quos odio tempora dicta. Aliquid, sed?
    </p>
  );
};

export default App;
