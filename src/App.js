import React from 'react';
import swym from './swym.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Cards.js';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <Container fluid>
      <Row className="p-3">
        <Col><img src={swym} className="app-logo" alt="logo" /></Col>
      </Row>
      <Row className="google-row">
        {/* Google login for front end */}
          <GoogleLogin
              clientId="688685703520-m7dku75jlgq6f3tuvrbij0map96kcu02.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
      </Row>
      <Row className="cont-design"> 
        <Col>
        {/* The upload button on a card */}
          <Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
