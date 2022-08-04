import classes from './Error.module.css'

import { Component, Fragment } from 'react'



class Error extends Component {



  constructor() {

    super()
    
    this.state = { status: false }
    
  }


  
  componentDidCatch(error) {

    this.setState({ status: true })
    
  }



  render() {

    return (

      <Fragment>


	
	{ this.props.children }

	{ this.state.message === true && (
	<p className={ classes.error }>
	  { this.state.message }
	</p>
	) }

      

      </Fragment>
	
    )

  }


  
}



export default Error
