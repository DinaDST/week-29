import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(({ count }) => ({ count: count + 1 }));
    useEffect(() => console.log(count), [count]);
    return <button onClick={handleClick}>{count}</button>;
  };
};

export default Counter;

/*
class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
*/
