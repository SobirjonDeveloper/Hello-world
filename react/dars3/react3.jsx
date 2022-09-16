import React, { Component} from "./react"

  class Children extends Component {
   render(){
    
       return(
         <div>{this.props.student}</div>
           )
        }
}
class Student extends Component {
  render(){
   
      return(
        <div>{this.props.student}</div>
          )
       }
}


class About extends Component {
  render(){
    
    return(
      <div>{this.props.student}</div>
          )
       }
      }
      
      

      export default Children
      export  {About}
      export  {Student}










