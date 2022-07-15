const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content text={part1} number={exercises1}/>
      <Content text={part2} number={exercises2}/>
      <Content text={part3} number={exercises3}/>
      <Total n1={exercises1} n2={exercises2} n3={exercises3}/>
    </div>
  )
}

const Header = (promp) => (
  <>
  <h1>{promp.course}</h1>
  </>
)
const Content = (promp) => (
  <>
    <p>{promp.text} {promp.number}</p>
  </>
)
const Total = (promp) => (
  <>
    <p>Number of exercises {promp.n1 + promp.n2 + promp.n3}</p>
  </>
)

export default App