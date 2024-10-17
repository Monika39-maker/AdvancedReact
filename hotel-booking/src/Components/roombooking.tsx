import React from 'react';

interface userProps {
    name: string;
    age: number;
}

const RoomBooking: React.FC<userProps> = ({name}) => {

  return (
    <div>
      <h1>RoomBooking</h1>
      <p>Hello {name}</p>
    </div>
    
  )
}
export default RoomBooking;