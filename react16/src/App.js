import React, { Component } from "react";

const BoundaryHOC = ProtectedComponent =>
  class BoundaryHOC extends Component {
    state = {
      hasError: false
    };

    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };

    render() {
      const { hasError } = this.setState;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

const ErrorFallback = () => "Error ! ";

class ErrorMaker extends Component {
  state = {
    name: ["A", "B", "C", "D"]
  };

  render() {
    const { name } = this.state;
    const names = name.map(name => <p>{name}</p>);

    return (
      <>
        <div>{names}</div>
      </>
    );
  }
}

const P_ErrorMaker = BoundaryHOC(ErrorMaker);

class App extends Component {
  render() {
    return (
      <>
        <div>React16</div>
        <ErrorMaker />
      </>
    );
  }
}

export default BoundaryHOC(App);
