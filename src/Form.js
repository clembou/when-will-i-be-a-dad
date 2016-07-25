import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import { browserHistory } from 'react-router';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

export class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      futureDad: '',
      dueDate: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ futureDad: e.target.value });
  }

  handleDateChange(e) {
    console.log(e);
    this.setState({ dueDate: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    browserHistory.push(`/${this.state.futureDad}/${this.state.dueDate}/`);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="wwibadForm">
          <ControlLabel>What is your name?</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
            />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>

          <DateTimeField mode="date" onChange={this.handleNameChange} inputFormat="DD-MM-YYYY" />
        </FormGroup>
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}
