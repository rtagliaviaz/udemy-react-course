import React from 'react'
//custom hook
import useInput from '../customHooks/useInput'

const Form = () => {
  const [name, bindName, clearName] = useInput('')
  const [email, bindEmail, clearEmail] = useInput('')
  const [pass, bndpass, clrpsw] = useInput('')
  const submitHandler = e => {
    e.preventDefault()
    alert(`the name is ${name} and email is ${email}, the password is ${pass}`)
    clearName()
    clearEmail()
    clrpsw()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div><label>Name</label>
          <input
            {...bindName}
            type="text"/>
        </div>
        <div><label>Email</label>
          <input
            {...bindEmail}
            type="text"/>
        </div>
        <div><label>Pass</label>
          <input
            {...bndpass}
            type="password"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
