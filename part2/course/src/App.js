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

const Course = ( { courses } ) => {
  return (<>
    { courses.map( course => {
      return (
        <div key = { nanoid() }>
          <Header course = { course.name } key = { nanoid() }/>
          { course.parts.map( part => <Part key = { nanoid() } name = { part.name } exercises = { part.exercises }/> ) }
          <Total parts = { course.parts } key = { nanoid() }/>
        </div>
      )
    }) }
  </>)

}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App