const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header course = { course.name } />
      <Content values = { course.parts } />
      <Total values = { course.parts} />
    </>
  )
}

const Header = ( props ) => (
  <>
    <h1>{ props.course }</h1>
  </>
)
const Content = ( props ) => {
  let elements = [];
  let i = 1;
  props.values.map( a => {
    elements.push(<Part key = {i} text={ a.name } number={ a.exercises } />)
    i++
    return null
  } )
  return elements;
}
const Part = ( props ) => (
  <>
    <p>{ props.text } { props.number }</p>
  </>
);
const Total = ( props ) => {
  let sum = props.values.reduce(( acc,obj )=> acc+obj.exercises, 0);
  return (<>
    <p>Number of exercises { sum }</p>
  </>)
}

export default App