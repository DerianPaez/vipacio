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


const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useWindowScroll;