import * as React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

export class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="wwibadForm"
          validationState={this.getValidationState()}
        >
          <ControlLabel>What is your name?</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>

          <DateTimeField mode="date" />
        </FormGroup>
      </form>
    );
  }
}
