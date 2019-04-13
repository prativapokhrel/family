const Users = (props) => {
  var users= props.users.map((user) => {
    return(
      <div key={user.id}>
        <a href="#">{user.name}</a>
      </div>
    )
  })
}