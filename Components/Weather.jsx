function Weather({temperature}){
    let message = '';
        
    if(temperature < 15){
        message = "its cold outside";
    }else if(temperature < 25 && temperature > 15){
        message = "its nice outside";
    }else{
        message = "its hot outside";
    }

    return (<p>{message}</p>);
    
}
export default Weather;