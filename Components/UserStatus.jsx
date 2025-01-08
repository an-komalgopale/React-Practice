function UserStatus({loggedIn, isAdmin}){
    // let loggedIn = true;
    // let isAdmin = false;
    let message = '';

    if(loggedIn && isAdmin){
        message = "Welcome Admin!";
    }else if(loggedIn && !isAdmin){
        message = "Welcome User!";
    }
    return <p>{message}</p>
}

export default UserStatus;