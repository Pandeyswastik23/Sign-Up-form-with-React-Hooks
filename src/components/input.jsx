import "./input.css";
import React from 'react'

const Input = () =>
{
    
    const [ userRegistration, setUserRegistration ] = React.useState( {
        username: "",
        email: "",
        phone: "",
        password: ""
    } )
    
    const [ records, setRecords ] = React.useState( [] );
    const handleInput = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value)

        setUserRegistration({...userRegistration, [name]:value})
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        
        setRecords( [ ...records, newRecord ] );

        setUserRegistration( { username: "", email: "", phone: "", password: "" } );
    }
  return (
      <div>
          
          <form action="" onSubmit={handleSubmit}>
              <h1>
                  Register
              </h1>
              
              <div className="formInput">
                  <label htmlFor="username">Username</label>
                  <input type = "text" value = {userRegistration.username} onChange={handleInput} name="username" id="username"/>
              </div>

              <div className="formInput">
                  <label htmlFor="email">Email</label>
                  <input type = "email" value = {userRegistration.email} onChange={handleInput} name="email" id="text"/>
              </div>

              <div className="formInput">
                  <label htmlFor="phone">phone</label>
                  <input type = "phone" value = {userRegistration.phone} onChange={handleInput} name="phone" id="phone"/>
              </div>

              <div className="formInput">
                  <label htmlFor="password">Password</label>
                  <input type = "password" value = {userRegistration.password} onChange={handleInput} name="password" id="password"/>
              </div>

              <button type="submit">Submit</button>
          </form>
          
          <div>

              
              {
                  records.map( ( currentElement ) =>
                  {
                      const { id, username, email, phone, password } = currentElement;

                      return (
                          <div>

                              <p>{username}</p>
                              <p>{email}</p>
                              <p>{phone}</p>
                               <p>{password}</p>
                              </div>
                      )
                  })
              }

          </div>
      
      </div>
  )
}

export default Input
