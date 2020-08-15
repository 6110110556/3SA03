import React from 'react';
import './App.css';
import WordCard from './WordCard';

var quest01 = "";
var quest02 = "";
var quest03 = "";
var word01 = "";
var word02 = "";
var word03 = "";

var i = Math.floor(Math.random()*5);

if(i == 0) {
    quest01 = "สวัสดี";
    word01 = "HELLO";
    quest02 = "แมว";
    word02 = "CAT";
    quest03 = "หมา";
    word03 = "DOG";
}
else if(i == 1) {
    quest01 = "มด";
    word01 = "ANT";
    quest02 = "ดอกไม้";
    word02 = "FLOWER";
    quest03 = "ไก่";
    word03 = "CHICKEN";
}
else if(i == 2) {
    quest01 = "วิ่ง";
    word01 = "RUN";
    quest02 = "เดิน";
    word02 = "WALK";
    quest03 = "นอน";
    word03 = "SLEEP";
}
else if(i == 3) {
    quest01 = "ต้นไม้";
    word01 = "TREE";
    quest02 = "กระโดด";
    word02 = "JUMP";
    quest03 = "โทรศัพท์";
    word03 = "TELEPHONE";
}
else{
    quest01 = "เป็ด";
    word01 = "DUCK";
    quest02 = "เสือ";
    word02 = "TIGER";
    quest03 = "สิงโต";
    word03 = "LION";
}

function App() {
  return (
    <body>
      <div className = 'h01'><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1>WELCOM</h1><br></br></div>
      {/* <center><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h1>WELCOM</h1><br></br></center> */}
      {/* <center><img src="https://image.freepik.com/free-vector/cute-cat-kitten-family-cartoon-doodle-banner_40564-293.jpg" alt="cat" aria-setsize=""></img></center> */}
      <h1> This is Shuffle word game !</h1>
      <h1>We will test your English knowledge.</h1> <br></br>
      
      {/* &nbsp;&nbsp;<button onclick="displayAnswer()">Answer</button> 
      &nbsp;&nbsp;<p id="demo"></p> */}
      &nbsp;&nbsp;<button onClick={() => displayAnswer(word01)}>Click me!</button>
      <div id="demo01"></div><br></br>
      &nbsp;&nbsp;&nbsp;1. "{quest01}" ภาษาอังกฎษว่าอะไร ? <br></br>
      <WordCard value={word01}/>

      {/* &nbsp;&nbsp;<button onclick= "displayAnswer()">Answer</button>
      &nbsp;&nbsp;<p id="demo"></p> */}
      &nbsp;&nbsp;<button onClick={() => displayAnswer(word02)}>Click me!</button>
      <div id="demo02"></div><br></br>
      &nbsp;&nbsp;&nbsp;2. "{quest02}" ภาษาอังกฎษว่าอะไร ? <br></br>
      <WordCard value={word02}/>

      {/* &nbsp;&nbsp;<button onClick = "displayAnswer()">Answer</button>
      &nbsp;&nbsp;<p id="demo"></p> */}
      &nbsp;&nbsp;<button onClick={() => displayAnswer(word03)}>Click me!</button>
      <div id="demo03"></div><br></br>
      &nbsp;&nbsp;&nbsp;3. "{quest03}" ภาษาอังกฎษว่าอะไร ? <br></br>
      <WordCard value={word03}/>
     
      
    </body>
    
  );
  function displayAnswer(word) {
    // alert('Answer this question :'+ word01);
    if(word == word01){
      document.getElementById("demo01").innerText = "Answer this question : "+ word;
    }
    if(word == word02){
      document.getElementById("demo02").innerText = "Answer this question : "+ word;
    }
    if(word == word03){
      document.getElementById("demo03").innerText = "Answer this question : "+ word;
    } 
  }
}

export default App;



