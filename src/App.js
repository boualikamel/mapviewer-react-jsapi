import React from 'react';
import { Layout } from 'antd';
import { MapProvider } from './hooks/MapProvider';
import { WidgetProvider } from './hooks/WidgetProvider';
import '@arcgis/core/assets/esri/themes/light/main.css';
import Sidebar from './layouts/sidebar/Sidebar';
import Main from './layouts/main/Main';
import widgetConfig from './configs/widgetConfig';



console.log('YOYOYO')
function Gis() {
  return (
    <MapProvider>
      <div className="App">
        <Layout className="app-layout">
          <WidgetProvider>
            <Sidebar />
            <Main widgetList={widgetConfig} />
          </WidgetProvider>
        </Layout>
      </div>
    </MapProvider>
  );
}

export default Gis;
