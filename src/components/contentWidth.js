import React from "react";

export default class ContentWidth extends React.Component {
    render () {
      return(
        <div className={`fullWidth ${ this.props.bgColour ? 'bleed bleed' + this.props.bgColour : null }`}>
            <div className={`flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full`}>
                {this.props.children}
            </div>
        </div>
      )
    }
  }
