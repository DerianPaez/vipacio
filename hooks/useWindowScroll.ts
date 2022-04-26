import * as React from 'react';

type State = {
  x: number;
  y: number;
}

const useWindowScroll = (): State => {
  const [state, setState] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const { scrollX, scrollY } = window
    setState(() => {
      return { x: scrollX, y: scrollY }
    })
  }, [state])

  return state;
};

export default useWindowScroll;