import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('user name')
    const handleClick = ()=> {
        setName('akash')
    }

    // const handleAgain = (name) => {
    //     console.log('hello'+name);
    // }
    return ( 
        <div className="home">
            <h1>Home </h1>
            
            <p>{name}</p>
            {/* click event in react */}
            <button onClick={handleClick}>click me</button>
            {/* <button onClick={()=> handleAgain('Akash')}>click again</button> */}
        </div>
     );
}
 
export default Home;