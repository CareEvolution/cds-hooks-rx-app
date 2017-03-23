import React from 'react';

const SmartApp = React.createClass({
  render() {
    const iframeSrc = this.props.all.getIn(['smartApp', 'url']);
    return (
      <div className="fhir-view">
        <iframe src={iframeSrc} style={{width: '100%', height: '100%'}} />
      </div>
    )
  }
});

module.exports = SmartApp;
