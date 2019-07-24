import React, { Component } from 'react';
import { Fragment } from 'react';
import './Main.css';

import AboutMe from './main/AboutMe';
import Blog from './main/Blog';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { page: 'blog', classBody: 'main-body-blog' };

        this._blogOnClick = this._blogOnClick.bind(this);
        this._aboutMeOnClick = this._aboutMeOnClick.bind(this);
        //this._cmsOnClic = this._cmsOnClic.bind(this);
    }

    _blogOnClick() {
        this.setState({ page: 'blog', classBody: 'main-body-blog'});        
    }
    _aboutMeOnClick() {
        this.setState({ page: 'aboutMe', classBody: 'main-body' });        
    }
    _cmsOnClick(){

    }
    render() {
        let body, classBody;
        switch (this.state.page) {
            case 'main':
                    body = <AboutMe />;
                    classBody = 'main-body-blog';
                break;
            case 'aboutMe':
                    body = <AboutMe />;
                    classBody = 'main-body';
                break;
            case 'blog':
                    body = <Blog />;
                    classBody = 'main-body-blog';
                break;
            default:
                    body = <AboutMe />;
                    classBody = 'main-body';
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

                <section className={classBody}>
                    {body}
                </section>
            </Fragment>
        );
    }
}

export default Main;