import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";// fix is word 1 2 3
function App() {
  return (
    <body>
       <center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1>WELLCOM</h1><br></br></center>
      {/* <center><img src="https://image.freepik.com/free-vector/cute-cat-kitten-family-cartoon-doodle-banner_40564-293.jpg" alt="cat" aria-setsize=""></img></center> */}
      <div>
        <h1> This is Shuffle word game !</h1>
        <h1>We will test your English knowledge.</h1>
        
        1. "สวัสดี" ภาษาอังกฎษว่าอะไร ? <br></br>
        <WordCard value={word}/>

        2. "แมว" ภาษาอังกฎษว่าอะไร ? <br></br>
        <WordCard value={word}/>

        3. "วิ่ง" ภาษาอังกฎษว่าอะไร ? <br></br>
        <WordCard value={word}/>
        
      </div>
    </body>
    
  );
}

export default App;
