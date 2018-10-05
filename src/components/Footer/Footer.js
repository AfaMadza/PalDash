import React from 'react';
import classes from './Footer.css';
import 'mdbreact/dist/css/mdb.css';

class FooterPage extends React.Component {
    render(){
        return(
            
                <section id="lab_social_icon_footer">
                    <div>
                            <div className={classes.inner}>
                                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                                    <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                    </div>
                </section>
          
        );
    }
}

export default FooterPage;