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

export default Course