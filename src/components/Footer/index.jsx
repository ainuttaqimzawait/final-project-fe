import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', width: "100vw" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Layanan Pelanggan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo sed odio vestibulum auctor.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <address>
                            123 Main Street<br />
                            City, State 12345<br />
                            Email: info@example.com<br />
                            Phone: (123) 456-7890
                        </address>
                    </div>
                    <div className="col-md-4">
                        <h3>Ikuti Kami</h3>
                        <div>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faFacebookF} />
                                <p>Facebook</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faInstagram} />
                                <p>Instagram</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon icon={faXTwitter} />
                                <p>X-Twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
