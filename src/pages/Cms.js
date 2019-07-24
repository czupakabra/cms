import React, { Component } from 'react';
import { Fragment } from 'react';
import './Cms.css';

class Cms extends Component {
    constructor(props) {
        super(props);

        this.state = { page: 'blog' };    
    }

    
    render() {
        let body;
        
        return (
            <Fragment>
                <header className="main-header">
                    <div className="main-logo"></div>
                    <nav className="main-menu">
                        <div className="main-menu-item" onClick={this._blogOnClick}   >Blog</div>
                        <div className="main-menu-item" onClick={this._aboutMeOnClick}>Omnie</div>
                    </nav>
                    <div className="main-cms" >
                        <div className="main-menu-item">CMS</div>
                    </div>
                </header>

                <section className="main-body">
                    {body}
                </section>
            </Fragment>
        );
    }
}

export default Cms;