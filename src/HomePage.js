import * as React from 'react';
import { PageHeader, Jumbotron } from 'react-bootstrap';
import { Form } from './Form';

export default () => (
  <div className="container">
    <PageHeader>#when-will-i-be-a-dad</PageHeader>
    <Jumbotron>
      <Form />
    </Jumbotron>
  </div>
)
;
