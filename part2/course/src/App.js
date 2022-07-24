import { nanoid } from 'nanoid'
const Header = ( { course } ) => <h1>{course}</h1>

const Total = ({ parts }) => {
  let sum = parts.reduce( ( acc, p ) => acc += p.exercises, 0 );
  return ( <p>Number of exercises { sum }</p> ) 
}

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Course = ( { course } ) => {
  return (<>
    <Header course = { course.name } />
    { course.parts.map( part => <Part key = { nanoid() } name = { part.name } exercises = { part.exercises }/> ) }
    <Total parts = { course.parts }/>
  </>)

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'test',
        exercises: 1,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App