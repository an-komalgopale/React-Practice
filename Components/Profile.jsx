import { useState } from "react";

const Profile = () => {

    const[profile, setProfile] = useState([
        {name: "john doe", age: 10},
        {name: "jane doe", age: 13},
    ])
    const [errorMessage, setErrorMessage] = useState(['']);
    const addProfile = (event) => {
        event.preventDefault(); 
        let name = event.target.name.value.trim();
        let age = event.target.age.value;
        let newProfile = {};
        if(name !== '' && age !== ''){
            newProfile = {name, age};
            setProfile([... profile, newProfile]);
        }else{
            setErrorMessage("please fill both the fields");
        }
        event.target.reset();
    }
    const updateProfile = () => {
        setProfile(profile.map(p => 
            p.name === 'john doe' ? { ...p, name: "john yarn", age: 12.5} : p
          ));
    }
    return (
        <div>
            <h1>profile info</h1>
            <form onSubmit={addProfile}>
                <input type="text" name="name" id="inputName" placeholder="Enter name"/>
                <input type="number" name="age" id="inputNumber" placeholder="Enter age"/>
                <button type="submit">Add</button>
            </form>
            <button onClick={updateProfile}>Update</button>
            <p style={{color: "red"}}>{errorMessage}</p>
            <h5>Profiles are</h5>
            {profile.map(m => (
                <ul key={Math.random()}>
                    <li>name: {m.name}</li>
                    <li>age: {m.age}</li>
                </ul>
            ))}
        </div>
    )
}
export default Profile;