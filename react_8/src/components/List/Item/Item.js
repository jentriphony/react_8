import classes from './Item.module.css'

import { Component } from 'react'



class Item extends Component {



  componentWillUnmount() {

    console.log('item unmount')
    
  }

  

  render() {

    return (

      <li className={ classes.item }>



	{ this.props.title }


	
      </li>
      
    )
    
  }


  
}



export default Item
