import React, { Component } from 'react';
import { Fragment } from 'react';
import './BlogGrid.css';

class BlogGrid extends Component {
    constructor(props) {
        super(props);        
    }    
    
    
    render() {
        return (
            <div className="bloggrid-container" >                
                {this.props.children}
            </div>
        );
    }
}

export default BlogGrid;