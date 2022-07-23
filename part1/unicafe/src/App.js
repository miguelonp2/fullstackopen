import { useState } from 'react'

const Button = ( props ) => (
  <><button onClick = { props.onClick }> { props.text } </button></>
);


const Display = (  {good, neutral, bad}  ) => {
  if( good + neutral + bad === 0 ){
    return (<p>No feedback given</p>)
  } else {  
    return (<div>
      <StatisticsLine text = 'Good' type="text" counter = { good }/>
      <StatisticsLine text = 'Neutral' type="text" counter = { neutral }/>
      <StatisticsLine text = 'Bad' type="text" counter = { bad }/>
      <StatisticsLine text = 'All' type="text" counter = { ( good + neutral + bad ) }/>
      <StatisticsLine text = 'Average' type="statistic" counter = { ( good - bad )/( good + neutral + bad ) }/>
      <StatisticsLine text = 'Positive' type="statistic" counter = { ( good )/( good + neutral + bad )  }/>
    </div>)
  }
} 

const StatisticsLine = ( props ) => {
  if( props.type === 'text') {
    return (<><p><span>{ props.text }</span>: {props.counter}</p></>)
  } else if( props.type === 'statistic' ){
    return (<><p><span>{ props.text }</span>: {(props.counter*100).toFixed(2)}%</p></>)
  }
}

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