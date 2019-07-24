import React, { Component } from 'react';
import { Fragment } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }    
    
    render() {
        return (
            <div className="aboutme-container">
                <div className="aboutme-txt-container">
                    <div className="aboutme-txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas nisl non sollicitudin blandit. Suspendisse risus risus, euismod et ipsum nec, vulputate aliquam lacus. Donec maximus, tellus sit amet vestibulum vulputate, sapien diam suscipit libero, et imperdiet metus nibh nec risus. Nunc massa massa, pretium nec porttitor non, cursus ac mauris. Fusce tincidunt vel nibh id rhoncus. Cras aliquam est eu ipsum fermentum blandit. Mauris nec nunc nec velit tincidunt blandit vel feugiat mauris.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas nisl non sollicitudin blandit. Suspendisse risus risus, euismod et ipsum nec, vulputate aliquam lacus. Donec maximus, tellus sit amet vestibulum vulputate, sapien diam suscipit libero, et imperdiet metus nibh nec risus. Nunc massa massa, pretium nec porttitor non, cursus ac mauris. Fusce tincidunt vel nibh id rhoncus. Cras aliquam est eu ipsum fermentum blandit. Mauris nec nunc nec velit tincidunt blandit vel feugiat mauris.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas nisl non sollicitudin blandit. Suspendisse risus risus, euismod et ipsum nec, vulputate aliquam lacus. Donec maximus, tellus sit amet vestibulum vulputate, sapien diam suscipit libero, et imperdiet metus nibh nec risus. Nunc massa massa, pretium nec porttitor non, cursus ac mauris. Fusce tincidunt vel nibh id rhoncus. Cras aliquam est eu ipsum fermentum blandit. Mauris nec nunc nec velit tincidunt blandit vel feugiat mauris.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas nisl non sollicitudin blandit. Suspendisse risus risus, euismod et ipsum nec, vulputate aliquam lacus. Donec maximus, tellus sit amet vestibulum vulputate, sapien diam suscipit libero, et imperdiet metus nibh nec risus. Nunc massa massa, pretium nec porttitor non, cursus ac mauris. Fusce tincidunt vel nibh id rhoncus. Cras aliquam est eu ipsum fermentum blandit. Mauris nec nunc nec velit tincidunt blandit vel feugiat mauris.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas nisl non sollicitudin blandit. Suspendisse risus risus, euismod et ipsum nec, vulputate aliquam lacus. Donec maximus, tellus sit amet vestibulum vulputate, sapien diam suscipit libero, et imperdiet metus nibh nec risus. Nunc massa massa, pretium nec porttitor non, cursus ac mauris. Fusce tincidunt vel nibh id rhoncus. Cras aliquam est eu ipsum fermentum blandit. Mauris nec nunc nec velit tincidunt blandit vel feugiat mauris.
                        </p>
                    </div>
                </div>
                <div className="aboutme-photo-cotainer">
                    <div className="aboutme-photo">
                        <img src={require("./img/mePhoto.jpg")} alt="mePhoto" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;