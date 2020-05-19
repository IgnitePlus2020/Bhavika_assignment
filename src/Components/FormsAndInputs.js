 import React, { Component } from 'react'

function MyTextInput(props){
    function handleChange(event){
         if (props.onChange) props.onChange(event)  
    }
    return (
         <p>
             <input type='email' value={props.value} name={props.name} ref={props.inputRef} onChange={handleChange} />
         </p>
     )
}

class MyInputBlock extends Component {
    constructor(props){
        super(props)
       
        this.setTextInputRef = element => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus()
        }

    }

    handleChange = (event) =>{
         if (this.props.onChange) this.props.onChange(event)  
    }
    componentDidMount(){
        this.focusTextInput()
    }

    render() {
        return (
            <div>
          <p><input ref={this.setTextInputRef} type='text' placeholder='password'  name={this.props.inputFullName} onChange={this.handleChange}/></p>
          </div>
      )
    }
}

class FormsAndInputs extends Component {
    constructor(props){
        super(props)
        this.state = {
            myFullName: '',
           
            email: ''
        }
        this.inputFullNameRef = React.createRef()
        this.inputEmailRef = React.createRef()
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        // console.log(this.inputFullNameRef.current.value)
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
       // console.log(event)
       // console.log(event.target.name)
       // console.log(event.target.value)
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleFocusClick = (event) => {
        event.preventDefault()
            this.inputEmailRef.current.focus()
    }
    handleClearClick = (event) => {
        event.preventDefault()
            this.inputFullNameRef.current.value = ''
            this.setState({
                myFullName: ''
            })
    }
    // componentDidMount(){
    //     this.inputFullNameRef.current.focus()
    // }
  render () {
      const {myFullName} = this.state
      const {email} = this.state
    return (
      <div>
        <h1>Login</h1>
        <p>User Name: {myFullName}</p>
        <form onSubmit={this.handleSubmit}>
            <MyTextInput inputRef={this.inputEmailRef} value={email} name='email'  onChange={this.handleInputChange}/>
            <MyInputBlock onChange={this.handleInputChange}  />
          <p><button>Submit</button></p>
          
        </form>
      </div>
    )
  }
}

export default FormsAndInputs