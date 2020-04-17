import React from 'react';
import Spinner from "./Spinner";

const HOC = LoadingComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timeup: true
      };

      setTimeout(
        () =>
          this.setState({
            timeup: false
          }),
        4000
      );
      console.log(this.state.timeup);
    }

    render() {
      return this.state.timeup ? (
        <Spinner />
      ) : (
        <LoadingComponent {...this.props} />
      );
    }
  };
};

export default HOC;