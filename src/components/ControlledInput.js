// Code ControlledInput Component Here
handleFirstNameChange = event => {
  this.setState({
    firstName: event.target.value
  })
 }
  
 handleLastNameChange = event => {
  this.setState({
    lastName: event.target.value
  })
 }

 handleChange = (e) => {
   this.setState({
     [event.target.name]: event.target.value
   })
 }