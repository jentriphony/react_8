import classes from './Search.module.css'

import { Component, Fragment } from 'react'
import ListContext from './../../../context/list'
import Error from './../../Error/Error'
import List from './../List'


class Search extends Component {



  static contextType = ListContext


  
  constructor() {

    super()

    this.state = {
      filteredList: [],
      filter: ''
    }
    
  }



  componentDidMount() {

    this.setState({ filteredList: this.context.list })
    
  }



  componentDidUpdate(previousProps, previousState) {

    if(previousState.filter !== this.state.filter) {
      this.setState({ filteredList: this.context.list.filter(item =>
	item.title.includes(this.state.filter)
      ) })
    }
    
  }



  handler(event) {

    this.setState({ filter: event.target.value })
    
  }



  render() {

    return (

      <Fragment>



	<div className={ classes.search }>
	  <input type='search' onInput={ this.handler.bind(this) } />
	</div>

	<Error>
	  <List list={ this.state.filteredList } />
	</Error>

      

      </Fragment>
      
    )
    
  }


  
}



export default Search
