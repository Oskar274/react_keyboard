import React, { useEffect } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = React.useState<string>('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setLastKey(event.key);
    });
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${lastKey}]`}
      </p>
    </div>
  );
};
