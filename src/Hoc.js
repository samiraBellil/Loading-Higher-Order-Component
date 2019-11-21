import SpinnerComp  from './Spinner'
import React from 'react'

const Hoc = (ListComponent)=>{
    return (props) => props.load ? <SpinnerComp /> : <ListComponent {...props}/>
}

export default Hoc