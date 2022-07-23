import { useState } from 'react'

const Button = ( props ) => (
  <><button onClick = { props.onClick }> { props.text } </button></>
);

const Anecdote = ( { anecdote, votes, anecdotes, type = 'random' } ) => {
  if ( type === 'random') {
    return (
    <>
      <p>{anecdotes[anecdote]}</p>
      <p>Has {votes[anecdote]} votes</p>
      </>
    );
  } else {
    let keyVotes = Object.keys( votes );
    let max = 0
    let key = 0;
    keyVotes.map ( k => {
      if ( max < votes[k] ){
        max = votes[k];
        key = k;
      }
      return ''
    })
    return(
      <>
        <p>{anecdotes[key]}</p>
        <p>Has {votes[key]} votes</p>
      </>
    )
  }
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
  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length));
  let initialVotes = {};
  for ( let i = 0 ; i <= anecdotes.length ; i++ ) {
    initialVotes[i]=0;
  }
  const [votes, setVotes] = useState(initialVotes);

  const addVote = ( selected ) => {
    let newVotes = {
      ...votes
    }
    newVotes[selected] = newVotes[selected]+1;
    setVotes( newVotes );
  }

  return (
    <>
      <div>
        <Anecdote anecdote = { selected } votes = { votes } anecdotes = { anecdotes } type = 'random'/>
      <hr/>
      </div>
      <div>
        <Button onClick={ () => setSelected( Math.floor( Math.random() * anecdotes.length )) } text = 'Next Anecdote' />
        <Button onClick={ () => addVote(selected) } text = 'Vote' />
      </div>
      <div>
        <Anecdote anecdote = { selected } votes = { votes } anecdotes = { anecdotes } type = 'max'/>
      </div>


    </>
  )
}

export default App