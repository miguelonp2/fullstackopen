import { useState } from 'react'

const Button = ( props ) => (
  <><button onClick = { props.onClick }> { props.text } </button></>
);

const Text = ( props ) => (
  <><p><span>{ props.text }</span>: {props.counter}</p></>
);

const Display = (  {good, neutral, bad}  ) => {
  if( good + neutral + bad === 0 ){
    return (<p>No feedback given</p>)
  } else {  
    return (<div>
      <Text text = 'Good' counter = { good }/>
      <Text text = 'Neutral' counter = { neutral }/>
      <Text text = 'Bad' counter = { bad }/>
      <Text text = 'All' counter = { ( good + neutral + bad ) }/>
      <Statistics text = 'Average' counter = { ( good - bad )/( good + neutral + bad ) }/>
      <Statistics text = 'Positive' counter = { ( good )/( good + neutral + bad )  }/>
    </div>)
  }
} 

const Statistics = ( props ) => (
  <><p><span>{ props.text }</span>: {(props.counter*100).toFixed(2)}%</p></>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setPoint = ( button ) => {
    if( button === 'good' ) {
      setGood(good+1);
    } else if ( button === 'neutral' ) {
      setNeutral( neutral+1 );
    } else {
      setBad( bad + 1 );
    }
  };


  return (
    <>
      <div>
        <Button onClick={ () => setPoint('good') } text = 'Good' />
        <Button onClick={ () =>  setPoint('neutral') } text = 'Neutral' />
        <Button onClick={ () =>  setPoint('bad') } text = 'Bad' />
      </div>
      <hr/>
      <div>
        <Display good = { good } neutral = { neutral } bad = {bad} />
      </div>

    </>
  )
}

export default App