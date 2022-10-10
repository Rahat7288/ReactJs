const Home = () => {
    const handleClick = (e)=> {
        console.log('tarpor bolo', e);
    }

    const handleAgain = (name) => {
        console.log('hello'+name);
    }
    return ( 
        <div className="home">
            <h1>Home </h1>
            {/* click event in react */}
            <button onClick={handleClick()}>click me</button>
            <button onClick={()=> handleAgain('Akash')}>click again</button>
        </div>
     );
}
 
export default Home;