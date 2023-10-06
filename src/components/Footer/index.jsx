import { faFacebookF, faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', width: "100vw" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{ display: "grid", gridTemplateColumns: "auto", placeItems: "center", textAlign: "center" }}>
                        <h3>Kontak Kami</h3>
                        <Link style={{ color: "white", textDecoration: "none" }}>Jl. Palagan km 10 Rejodani, Ngaglik Sleman Yogyakarta</Link>
                        <Link style={{ color: "white", textDecoration: "none" }}>Email: info@example.com</Link>
                        <Link style={{ color: "white", textDecoration: "none" }}>Phone: (123) 456-7890</Link>
                    </div>
                    <div className="col-md-4" style={{ display: "grid", gridTemplateColumns: "auto", placeItems: "center", textAlign: "center" }}>
                        <h3>Layanan Kami</h3>
                        <Link style={{ color: "white", textDecoration: "none" }}>Bantuan</Link>
                        <Link style={{ color: "white", textDecoration: "none" }}>Metode Pembayaran</Link>
                        <Link style={{ color: "white", textDecoration: "none" }}>Pemngembalian dan Penukaran</Link>
                        <Link style={{ color: "white", textDecoration: "none" }}>Syarat dan Ketentuan</Link>

                    </div>
                    <div className="col-md-4" style={{ display: "grid", gridTemplateColumns: "auto", textAlign: "center" }}>
                        <h3>Ikuti Kami</h3>
                        <div className="col-sm-12" style={{ display: "flex", justifyContent: "space-evenly" }} >
                            <Link href='https://www.facebook.com/hijjaindonesia/'>
                                <FontAwesomeIcon icon={faFacebookF}
                                    style={{
                                        backgroundColor: "whitesmoke",
                                        width: "30px",
                                        height: "30px",
                                        padding: "8px",
                                        borderRadius: "50%"
                                    }} />
                            </Link>
                            <Link href='https://hijja.sistemtoko.com/?page=10#'>
                                <FontAwesomeIcon icon={faInstagram}
                                    style={{
                                        backgroundColor: "whitesmoke",
                                        width: "30px",
                                        height: "30px",
                                        padding: "8px",
                                        borderRadius: "50%"
                                    }} />
                            </Link>
                            <Link href='https://www.instagram.com/hijjaindonesia/'>
                                <FontAwesomeIcon icon={faXTwitter}
                                    style={{
                                        backgroundColor: "whitesmoke",
                                        width: "30px",
                                        height: "30px",
                                        padding: "8px",
                                        borderRadius: "50%"
                                    }} />
                            </Link>
                            <Link href='https://www.instagram.com/hijjaindonesia/'>
                                <FontAwesomeIcon icon={faThreads}
                                    style={{
                                        backgroundColor: "whitesmoke",
                                        width: "30px",
                                        height: "30px",
                                        padding: "8px",
                                        borderRadius: "50%"
                                    }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <center style={{ fontSize: "12px", marginTop: "40px" }}>supported by www.sistemtoko.com. Allright reserved</center>
        </footer >
    );
};

export default Footer;
