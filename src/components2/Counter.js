import React, {useReducer} from 'react';
import {Button, ButtonGroup, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {
  counter: 0
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter+ action.payload}
    case 'decrement':
      return {...state, counter: state.counter- action.payload}
    case 'reset':
      return initialState
    default: return state
      
  }
}

const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
      {/* <div>{count.counter1}</div> */}
      <ButtonGroup>
        <Button color="dark">
          Counter1 <Badge color="light">{state1.counter}</Badge>
        </Button>
        <Button color="dark">
          Counter2 <Badge color="light">{state2.counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch1({type: 'increment', payload: 1})}>Increment</Button>
        <Button color="dark" onClick={() => dispatch1({type: 'decrement', payload: 1})}>Decrement</Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={() => dispatch2({type: 'increment', payload: 10})}>Increment</Button>
        <Button color="dark" onClick={() => dispatch2({type: 'decrement', payload: 10})}>Decrement</Button>
      </ButtonGroup>
      <p></p>
      <Button color="danger" onClick={() => dispatch1({type: 'reset'})}>Reset</Button>
    </div>
  )
}

export default Counter
