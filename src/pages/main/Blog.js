import React, { Component } from 'react';
import { Fragment } from 'react';
import './Blog.css';

import Masonry from 'masonry-layout';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.masonry = null;

        this.blogCotainerRef = React.createRef();
    }
    
    componentDidMount(){
        if(this.blogCotainerRef.current !== null){
            this.masonry = new Masonry(this.blogCotainerRef.current, {
                columnWidth: 300,
                fitWidth: true,
                gutter: 20,
                itemSelector: '.item',
                transitionDuration: 0
                });
        }
    }
    
    render() {
        return (
            <div className="blog-container" ref={this.blogCotainerRef}>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                
            </div>
        );
    }
}

export default Blog;