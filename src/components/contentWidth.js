import React from "react";

export default class ContentWidth extends React.Component {
  render() {
    return (
      <div className="fullWidth">
        <div className="contentContainer">{this.props.children}</div>
      </div>
    );
  }
}
