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
    // this.setState({ name: undefined });
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

const eatPizza = state => {
  const { pizza } = state;
  const maxPizza = 20;

  if (pizza < maxPizza) {
    return { pizza: pizza + 1 };
  } else {
    return null;
  }
};

class Pizza extends Component {
  handleClick = () => {
    this.setState(eatPizza);
  };

  state = {
    pizza: 0
  };

  render() {
    const { pizza } = this.state;
    return (
      <button onClick={this.handleClick}> I have eaten {pizza} pizza </button>
    );
  }
}

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
        <Pizza />
      </>
    );
  }
}

export default BoundaryHOC(App);
