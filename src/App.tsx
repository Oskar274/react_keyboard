import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      lastKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastKey}]`}
        </p>
      </div>
    );
  }
}
