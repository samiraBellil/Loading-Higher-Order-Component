import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class SpinnerComp extends React.Component{
    

    render()
    {
        return(
            <div>
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
            </div>

        );
    }
}

export default SpinnerComp;