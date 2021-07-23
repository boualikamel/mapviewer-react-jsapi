import React, { useState } from 'react';
import widgetConfig from '../configs/widgetConfig';

import { WidgetContext } from './AppContext';

export const WidgetProvider = ({ children }) => {
  const [widgetList, setWidgetList] = useState(widgetConfig);

  return <WidgetContext.Provider value={{ widgetList, setWidgetList }}>{children}</WidgetContext.Provider>;
};
