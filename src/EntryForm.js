import * as React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { hashHistory } from 'react-router';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';

export class EntryForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      futureDad: '',
      dueDate: null,
      format: 'YYYY-MM-DD',
      mode: 'days',
      validationMessage: '',
      nameValidationState: null,
      dueDateValidationState: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ futureDad: e.target.value });
  }

  handleDateChange(d) {
    this.setState({ dueDate: d });
  }

  handleSubmit(e) {
    e.preventDefault();

    const nameIsValid = this.state.futureDad.length !== 0;
    const dateIsValid = !!this.state.dueDate;

    if (nameIsValid && dateIsValid){
      hashHistory.push(`/${this.state.futureDad}/${this.state.dueDate.format(this.state.format)}/`);
    } else {
      this.setState({
        nameValidationState: nameIsValid ? '' : 'error',
        dueDateValidationState: dateIsValid ? '' : 'error',
        validationMessage: 'Please enter your name and due date before pressing submit'});
    }
  }

  render() {
    const { dueDate, mode } = this.state;
    return (
      <Form>
        <FormGroup controlId="wwibadName" bsSize="large" validationState={this.state.nameValidationState}>
          <ControlLabel>What is your name?</ControlLabel>
          {' '}
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup controlId="wwibadName" bsSize="large" validationState={this.state.dueDateValidationState}>
          <ControlLabel>What is your due date?</ControlLabel>{' '}
          <Datetime
            dateTime={dueDate}
            mode={mode}
            dateFormat={true}
            timeFormat={false}
            viewMode={mode}
            showToday={true}
            closeOnSelect={true}
            onChange={this.handleDateChange}
          />
        </FormGroup>
        <p><strong>{this.state.validationMessage}</strong></p>
        <Button type="submit" onClick={this.handleSubmit} bsSize="large">
          Submit
        </Button>
      </Form>
    );
  }
}
