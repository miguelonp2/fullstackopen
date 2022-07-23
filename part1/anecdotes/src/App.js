import { useState } from 'react'

const Button = ( props ) => (
  <><button onClick = { props.onClick }> { props.text } </button></>
);

const Anecdote = ( { anecdote } ) => {
  return (<p>{anecdote}</p>);
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  // save clicks of each button to its own state
  const [selected, setSelected] = useState(anecdotes[Math.floor(Math.random()*anecdotes.length)])
  return (
    <>
      <div>
        <Anecdote anecdote = { selected } />
      <hr/>
      </div>
      <div>
        <Button onClick={ () => setSelected(anecdotes[Math.floor(Math.random()*anecdotes.length)]) } text = 'Next Anecdote' />
      </div>

    </>
  )
}

export default App