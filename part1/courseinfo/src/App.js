const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content text1={part1} number1={exercises1}
        text2={part2} number2={exercises2}
        text3={part3} number3={exercises3} />
      <Total n1={exercises1} n2={exercises2} n3={exercises3} />
    </>
  )
}

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)
const Content = (props) => {
  console.log(props);
  return (<>
    <Part text={props.text1} number={props.number1} />
    <Part text={props.text2} number={props.number2} />
    <Part text={props.text3} number={props.number3} />
  </>)
}
const Part = (props) => (
  <>
    <p>{props.text} {props.number}</p>
  </>
);
const Total = (props) => (
  <>
    <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>
  </>
)

export default App