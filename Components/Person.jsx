function Person({children}){
    return (
        <div className="person-details">
            {/* <h1>name : {props.name}</h1>
            <p>age : {props.age}</p> */}
            {children}
        </div>
    );
}

export default Person;