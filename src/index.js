import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { InputGroup, FormControl, Container, Row, Col, Button, Form, Stack } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const messageProps = 'Hello React!';

ReactDOM.render(
  <React.StrictMode>
      <Container fluid>
          <Row>
              <Col sm={2}>
                  <Row style={{padding:'0 12px', margin:'6px 0', backgroundColor: '#F0FFFF', border: '1px solid blue', borderRadius: '3px'}}>Чат 1</Row>
                  <Row style={{padding:'0 12px', margin:'6px 0',  backgroundColor: '#F0FFFF', border: '1px solid blue', borderRadius: '3px'}}>Чат 2</Row>
                  <Row style={{padding:'0 12px', margin:'6px 0',  backgroundColor: '#F0FFFF', border: '1px solid blue', borderRadius: '3px'}}>Чат 3</Row>
                  <Row style={{padding:'0 12px', margin:'6px 0',  backgroundColor: '#F0FFFF', border: '1px solid blue', borderRadius: '3px'}}>Чат 4</Row>
              </Col>
              <Col sm={10}>
                  <Row  className="justify-content-end" style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#F0E68C'}}>
                      Текст сообщений пользователя
                  </Row>
                  <Row style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#7CFC00'}}>
                      Текст сообщений робота
                  </Row>
                  <Row  className="justify-content-end" style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#F0E68C'}}>
                      Текст сообщений пользователя
                  </Row>
                  <Row style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#7CFC00'}}>
                      Текст сообщений робота
                  </Row>
                  <Row  className="justify-content-end" style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#F0E68C'}}>
                      Текст сообщений пользователя
                  </Row>
                  <Row style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#7CFC00'}}>
                      Текст сообщений робота
                  </Row>
                  <Row  className="justify-content-end" style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#F0E68C'}}>
                      Текст сообщений пользователя
                  </Row>
                  <Row style={{padding:'0 12px',  margin:'6px 0', backgroundColor: '#7CFC00'}}>
                      Текст сообщений робота
                  </Row>
                  <hr/>
                  <Stack direction="horizontal" gap={1}>
                      <Form.Control placeholder="Введите текст сообщения" />
                      <Button variant="success">Отправить</Button>
                      <div className="vr" />
                      <Button variant="outline-danger">Очистить</Button>
                  </Stack>
              </Col>
          </Row>
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

