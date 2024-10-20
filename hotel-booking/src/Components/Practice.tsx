type userProps = {
    users: {
        name:string,
        age:number

    }[]
}



function Practice(props:userProps) {
  return (
    <div>
        {props.users.map((user) => (
            <div key={user.name}>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
            </div>
        ))}
    </div>
  )
    
}
export default Practice;