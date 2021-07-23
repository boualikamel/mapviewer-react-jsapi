import { createContext } from 'react';

export const MapContext = createContext({
  container: null,
  setContainer: () => {},
});

export const WidgetContext = createContext();

