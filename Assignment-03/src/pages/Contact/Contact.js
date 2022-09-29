import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from "../../components/Particle";
import Button from "react-bootstrap/Button";

class Contact extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                    username: "",
                    email: "",
                    message: ""
        }
    }

    onNameChange = e => {
        this.setState({name: e.target.value});
    }

    onEmailChange = e => {
        this.setState({email: e.target.value});
    }

    onMessageChange = e => {
        this.setState({message: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log("onsubmit event being fired");
        this.setState({ username:"", email:"", message:"" })
    }

    render() {
        return (
            <Container fluid className="contact-section">
                <Particle />
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Contact Me</h1>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <p>fitriauliasanni@gmail.com</p>
                        <br />
                        <br />
                    </Col>
                    <Col lg="5" className="d-flex align-items-center">
                        <form  className="contact__form w-100" onSubmit={this.onSubmit}>
                            <Row>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Name" 
                                        type="text"
                                        value={this.state.username} 
                                        onChange={this.onNameChange.bind(this)}
                                        required 
                                    />
                                </Col>
                                <Col lg="6" className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        placeholder="Email"
                                        type="text" 
                                        value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                        required 
                                    />
                                </Col>
                                <br />
                                <br />
                                <br />
                            </Row>
                                <textarea
                                    className="form-control rounded-0"
                                    placeholder="Message"
                                    rows="5" 
                                    type="text"
                                    value={this.state.message} 
                                    onChange={this.onMessageChange.bind(this)}
                                    required
                                ></textarea>
                                <br />
                            <Row>
                                <Col lg="12" className="form-group">
                                    <Button onClick={this.onSubmit.bind(this)} variant="light">Submit</Button>{' '}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
            </Container>
            )
        }
    }

export default Contact;
