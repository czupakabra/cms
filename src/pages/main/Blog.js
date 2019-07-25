import React, { Component } from 'react';
import { Fragment } from 'react';
import './Blog.css';

import Masonry from 'masonry-layout';
import BlogGrid from '../../lib/BlogGrid/BlogGrid';

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="blog-container" >
                <BlogGrid>
                    <div className="bloggrid-item bloggrid-item-span--2x"><h1>1</h1></div>
                    <div className="bloggrid-item"><h1>2</h1></div>
                    <div className="bloggrid-item"><h1>3</h1></div>
                    <div className="bloggrid-item"><h1>4</h1></div>
                    <div className="bloggrid-item"><h1>5</h1></div>
                    <div className="bloggrid-item"><h1>6</h1></div>
                    <div className="bloggrid-item"><h1>7</h1></div>
                    <div className="bloggrid-item"><h1>8</h1></div>
                    <div className="bloggrid-item bloggrid-item-span--2x"><h1>9</h1></div>
                    <div className="bloggrid-item"><h1>10</h1></div>
                    <div className="bloggrid-item"><h1>11</h1></div>
                    <div className="bloggrid-item"><h1>12</h1></div>

                    <div className="bloggrid-item"><h1>1</h1></div>
                    <div className="bloggrid-item"><h1>2</h1></div>
                    <div className="bloggrid-item"><h1>3</h1></div>
                    <div className="bloggrid-item"><h1>4</h1></div>
                    <div className="bloggrid-item"><h1>5</h1></div>
                    <div className="bloggrid-item"><h1>6</h1></div>
                    <div className="bloggrid-item"><h1>7</h1></div>
                    <div className="bloggrid-item"><h1>8</h1></div>
                    <div className="bloggrid-item"><h1>9</h1></div>
                    <div className="bloggrid-item"><h1>10</h1></div>
                    <div className="bloggrid-item"><h1>11</h1></div>
                    <div className="bloggrid-item"><h1>12</h1></div>
                </BlogGrid>                
            </div>
        );
    }
}

export default Blog;