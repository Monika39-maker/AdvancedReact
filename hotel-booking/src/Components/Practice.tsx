type userProps = {
    user?: "Monika" | "Rahul" | "Rohit"
}



function Practice(props:userProps) {
  return (
    <div>
        <h1>Helloo</h1>
        <p>{props.user}</p>
    </div>
  )
    
}
export default Practice;