import * as React from 'react';

interface IProps {
  prop1: string;
  prop2: string;
}

class ComponentForLegacy extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
          <section className="section">
            <div className="heading">Hello eRyk !!!</div>
            <div className="prop">{this.props.prop1}</div>
            <div className="prop">{this.props.prop2}</div>
          </section>
      </React.Fragment>
    );
  }
}

export default ComponentForLegacy;
