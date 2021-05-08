import React, {useContext} from 'react'
import {Button, ButtonGroup, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CounterContext} from '../App'
const ComponentA = () => {
  const countercontext = useContext(CounterContext)
  console.log(countercontext)
  const {counter, dispatch} = countercontext
  return (
    
    <div>
      <ButtonGroup>
        <Button color="dark">
          ComponentA Counter <Badge color="light">{counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch({type: 'increment', payload: 1})}>Increment</Button>
        <Button color="dark" onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement</Button>
      </ButtonGroup>
      <p></p>
      <Button color="danger" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
    </div>
  )
}

export default ComponentA
