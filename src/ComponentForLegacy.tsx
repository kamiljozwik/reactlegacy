import * as React from 'react';

interface IProps {
  prop1: string
  prop2: string
}

class ComponentForLegacy extends React.Component<IProps> {
  render() {
    return (
      <React.Fragment>
          <div>Hello eRyk !!!</div>
          <div>{this.props.prop1}</div>
          <div>{this.props.prop2}</div>
      </React.Fragment>
    );
  }
}


export default ComponentForLegacy;
