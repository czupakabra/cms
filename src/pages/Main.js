import React, { Component } from 'react';
import { Fragment } from 'react';
import './Main.css';

import AboutMe from './main/AboutMe';
import Blog from './main/Blog';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { page: 'blog' };

        this._blogOnClick = this._blogOnClick.bind(this);
        this._aboutMeOnClick = this._aboutMeOnClick.bind(this);
        //this._cmsOnClic = this._cmsOnClic.bind(this);
    }

    _blogOnClick() {
        this.setState({ page: 'blog' });        
    }
    _aboutMeOnClick() {
        this.setState({ page: 'aboutMe' });        
    }
    _cmsOnClick(){

    }
    render() {
        let body;
        switch (this.state.page) {
            case 'main':
                    body = <AboutMe />;
                break;
            case 'aboutMe':
                    body = <AboutMe />;
                break;
            case 'blog':
                    body = <Blog />;
                break;
            default:
                    body = <AboutMe />;
                break;
        }
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

export default Main;