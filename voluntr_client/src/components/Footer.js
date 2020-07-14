import React from 'react';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <hr />
                <div className="row">
                    <h5 className="col-sm">
                        &copy;{new Date().getFullYear()} VOLUNTR INC | All rights reserved | Terms of Service | Privacy
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;