import React from 'react';
import { Layout } from 'antd';
import { WebMapView } from '../../components/WebMapView';
import WidgetListConfig from '../../utils/widgetListConfig';
import ToolboxBottomLeft from '../../components/tools/ToolboxBottomLeft/ToolboxBottomLeft';


const { Content } = Layout;

function Main() {

  return (
    <Layout className="app-content-layout">
      <Content className="app-content">
        <WebMapView />
        <WidgetListConfig />

        <ToolboxBottomLeft />

      </Content>
    </Layout>
  );
}

export default Main;
