import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getCategoriess } from '../../app/api/products';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { keywordProduct, toggleCategories } from '../../app/features/Product/actions';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState([])
    useEffect(() => {
        getCategoriess()
            .then(({ data }) => setCategory(data.aaData));
    }, []);

    return (
        < Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'fixed', zIndex: "999", width: "100vw" }
        }>
            {/* {console.log(search)} */}
            {/* {console.log(category)} */}
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image src='hijab-logo-vector-26808833-removebg-preview.png' style={{ height: "200px", margin: "-60px 0px -80px 0px" }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-auto my-lg-0" style={{ display: "grid", gridAutoColumns: "800px" }}>
                        <Form >
                            <div className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    style={{ width: '700px' }}
                                />
                                <Button variant="outline-success" style={{ marginLeft: "-50px", border: "none" }} onClick={() => { dispatch(keywordProduct(search)); navigate(`/`); }}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </div>
                        </Form>
                        <Nav>
                            {category.map((e, i) => {
                                return (
                                    <Nav.Link
                                        key={i}
                                        onClick={() => { dispatch(toggleCategories(e.keyword_id)); navigate(`/`); }}
                                        style={{ fontSize: "13px", height: "14px" }}>
                                        {e.keyword_name}
                                    </Nav.Link>
                                )
                            })}
                        </Nav>
                    </Nav>
                    <LinkContainer to="/">
                        <Nav.Link className='me-5' onClick={() => alert("halaman belum dibuat")}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Nav.Link >
                    </LinkContainer>
                    <Nav className="d-flex me-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" onClick={() => alert("halaman belum dibuat")}>Register</Nav.Link>
                        <div style={{ marginTop: "8px" }}>|</div>
                        <Nav.Link href="#action2" onClick={() => alert("halaman belum dibuat")}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default TopBar;