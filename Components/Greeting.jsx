function Greeting({timeOfDay}){

    let greetMessage = (timeOfDay === 'morning')? 'Good morning!' : 'Good afternoon!';

    // const d = new Date();
    // console.log(d);
    // const name = "john";
    // return (
    // <div>
    //     <h1>HELLO {name}!</h1>
    //     <p>date : {d.toLocaleDateString()}</p>
    // </div>
    // );
    return (
        <p>{greetMessage}</p>
    )
}

export default Greeting;