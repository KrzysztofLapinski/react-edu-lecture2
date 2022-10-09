
type UserProps = {
  name: string;
}
// function User(props: UserProps) {
//   return (
//     <div>
//       <span>User name is {props.name}</span>
//     </div>
//   )
// }

function User({name}: {name: string}) {
  return (
    <div>
      <span>User name is {name}</span>
    </div>
  )
}