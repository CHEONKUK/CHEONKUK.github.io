import React, { Component } from "react";

const BoundaryHOC = ProtectedComponent =>
  class BoundaryHOC extends Component {
    state = {
      hasError: false
    };

    componentDidCatch = (error, info) => {
      this.setState({
        hasError: true
      });
    };

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

const ErrorFallback = () => `  ##  Error  ##  `;

class ErrorMaker extends Component {
  state = {
    name: ["A", "B", "C", "D"]
  };

  componentDidMount = () => {
    this.setState({ name: undefined });
  };

  render() {
    const { name } = this.state;
    const names = name.map(name => ` ${name} `);

    return (
      <>
        <div>{names}</div>
      </>
    );
  }
}

const P_ErrorMaker = BoundaryHOC(ErrorMaker);

class ReturnType extends Component {
  render() {
    return "String Type";
  }
}
const P_ReturnType = BoundaryHOC(ReturnType);

class App extends Component {
  state = {
    hasError: false
  };

  render() {
    return (
      <>
        <div>React16</div>
        <P_ReturnType />
        <P_ErrorMaker />
      </>
    );
  }
}

export default BoundaryHOC(App);
