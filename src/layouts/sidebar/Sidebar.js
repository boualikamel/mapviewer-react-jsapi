import React, { useState, useEffect, useContext } from 'react';
import { Layout, Menu } from 'antd';
import { WidgetContext } from '../../hooks/AppContext';
import Profil from './Profil';

const { Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const { widgetList, setWidgetList } = useContext(WidgetContext);

  const clone = [...widgetList];
  let incr = widgetList.length + 1;

  const onClickMenu = (index) => {
    const l = [...widgetList];

    l.map((e) => {
      if (e.type === 'normal' && e.index === index) {
        if (e.rendered) {
          e.display = 'flex';
        } else {
          e.rendered = true;
          e.display = 'flex';
        }
      } else if (e.type === 'submenu') {
        const elemeSub = e.sublist.find((x) => x.index === index);
        if (elemeSub) {
          if (elemeSub.rendered) {
            elemeSub.display = 'flex';
          } else {
            elemeSub.rendered = true;
            elemeSub.display = 'flex';
          }
        }
      }
    });
    setWidgetList(l);
  };
  useEffect(() => setWidgetList(clone), []);

  return (
    <Sider className="app-sidebar" collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <div className="logo">
        <div className="dessin">
          <div className='rond'></div>
        </div>
        <span className='hta-text'>hta</span>
        <span className='num-text'>num</span>
      </div>
      <Menu className="app-sidebar-menu" defaultSelectedKeys={['1']} mode="inline">
        {widgetList.map((obj, i) => {
          clone[i].index = i + 1;
          if (obj.type === 'normal') {
            return (
              <Menu.Item key={i + 1} icon={obj.icon} onClick={() => onClickMenu(i + 1)}>
                {obj.title}
              </Menu.Item>
            );
          }
          if (obj.type === 'submenu') {
            return (
              <SubMenu key={i + 1} icon={obj.icon} title={obj.title}>
                {obj.sublist.map((x, j) => {
                  j === 0 ? (incr = incr + j + 1) : (incr += j);

                  clone[i].sublist[j].index = incr;

                  return (
                    <Menu.Item key={incr} onClick={() => onClickMenu(clone[i].sublist[j].index)}>
                      {x.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
      <div className="app-sidebar-profil">
        <Profil />
      </div>
    </Sider>
  );
}

export default Sidebar;
