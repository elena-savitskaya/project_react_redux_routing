import React from "react";
import './_button.scss';

class Button extends React.Component {
  render() {
    return (
      <button type={this.props.type} className="form-button">Submit</button>
    )
  }
}

export { Button };
