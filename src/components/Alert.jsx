import React from 'react'

export default function Alert(props) {

  const capitalized=(word)=>{

    const lower=word.toLowerCase();   
    return lower.charAt(0).toUpperCase() + lower.slice(1)

  }

  return (

props.alert &&    <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-1`}  role="alert">
 <strong> {capitalized(props.alert.type)} </strong>: {props.alert.msg}

 {/* // faced errror use this syntax props.alert is null    syntax : props.alert &&  .. */}

 {/* you use & operator inisde the JS then this thing is evaluate 
//  props.alert if becomes false or becomes null then next thing will not 
be evaluate and if it is true and other will be evaluate 
This happened because all the JSX will be converted to JavaScript calls   */}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}
