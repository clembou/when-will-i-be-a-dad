import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import { hashHistory } from 'react-router';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';

export class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      futureDad: '',
      dueDate: '2016-07-22',
      format: 'YYYY-MM-DD',
      inputFormat: 'DD/MM/YYYY',
      mode: 'date',
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
    hashHistory.push(`/${this.state.futureDad}/${this.state.dueDate}/`);
  }

  render() {
    const { dueDate, format, mode, inputFormat } = this.state;
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

          <DateTimeField
            dateTime={dueDate}
            mode={mode}
            format={format}
            viewMode={mode}
            showToday="true"
            inputFormat={inputFormat}
            onChange={this.handleDateChange}
            />;
        </FormGroup>
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}
