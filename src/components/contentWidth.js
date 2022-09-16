import React from "react";

export default class ContentWidth extends React.Component {
    render () {
      return(
        <div className={`fullWidth ${ this.props.bgColour ? 'bleed bleed' + this.props.bgColour : null }`}>
            <div className={`contentContainer`}>
                {this.props.children}
            </div>
        </div>
      )
    }
  }
