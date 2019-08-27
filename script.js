function Badge (props) {
  return (
    <div>
      <img src={''} />
      <h1>Name: {props.name}</h1>
      <h3>username: {props.username}</h3>
    </div>
  )
}

ReactDOM.render(
  <Badge 
    name='Akhil Joshi'
    username='thecreepacess'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
  />,
  document.getElementById('app')
);
