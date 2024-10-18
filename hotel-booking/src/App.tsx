import React from 'react';
import './App.css';
import RoomBooking from './Components/roombooking';
import Practice from './Components/Practice';

function App() {
  const user = {
    name: "Ram Prasad",
    age: 25
  }
  //const users = [
    // {
    //   name: "Ram Prasad",
    //   age: 25
    // },
    // {
    //   name: "Shyam Prasad",
    //   age: 25
    // },
    // {
    //   name: "Hari Prasad",
    //   age: 25
    // }
  //]

  return (
    <div className="App">
      
      <RoomBooking visitorName="Ram Prasad" roomNumber={102} />
       <Practice user={user}/>
    </div>
  );
}
//users.map((user) => {
  // return <Practice user={user} />
// })
export default App;
