type userProps = {
    userData: {
        name:string,
        age:number

    }
}

// type userProps2 = {
//     name:string,
//     age:number
// }[]

function Practice(user:userProps) {
  return (
    <div>Hello {user.userData.name}, your are {user.userData.age} years old</div>
  )
}
export default Practice;