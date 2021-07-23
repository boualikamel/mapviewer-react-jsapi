import React, { useContext } from 'react';
import cloneDeep from 'clone-deep';
import Widget from '../layouts/widgetLayout/Widget';
import { WidgetContext } from '../hooks/AppContext';

const WidgetListConfig = (props) => {
  const { widgetList, setWidgetList } = useContext(WidgetContext);

  const upWidget = (id) => {
    const objWidgets = [...widgetList];

    objWidgets.map((e) => {
      if (e.type === 'normal' && !e.zIndex) e.zIndex = 0;
      else if (e.type === 'submenu') {
        e.sublist.map((el) => {
          if (!el.zIndex) {
            el.zIndex = 0;
          }
        });
      }
    });

    let maxInArray = objWidgets.map((o) => {
      const zi = [];
      if (o.type === 'normal') return o.zIndex;
      if (o.type === 'submenu') {
        o.sublist.map((x) => {
          zi.push(x.zIndex);
        });
      }
      return zi;
    });

    maxInArray = [].concat.apply([], maxInArray);

    const getMax = Math.max.apply(Math, maxInArray);

    let o = objWidgets.find((t) => t.index === id);
    if (o) o.zIndex = getMax + 1;
    else {
      o = objWidgets.filter((t) => t.sublist);
      o.map((e) => {
        const k = e.sublist.find((i) => i.index === id);
        if (k) {
          k.zIndex = getMax + 1;
        }
      });
    }

    setWidgetList(objWidgets);
  };
  const closeWidget = (id) => {
    const objWidgets = [...widgetList];
    objWidgets.map((e) => {
      if (e.type === 'normal' && e.index === id) {
        e.display = 'none';
      } else if (e.type === 'submenu') {
        e.sublist.map((el) => {
          if (el.index === id) {
            el.display = 'none';
          }
        });
      }
    });
    setWidgetList(objWidgets);
  };

  const rend = () => {
    const objWidgets = cloneDeep(widgetList);
    const k = [];
    objWidgets.map((element) => {
      if (element.type === 'normal' && element.rendered) {
        k.push(element);
      } else if (element.type === 'submenu') {
        const w = element;
        const sub = [];
        element.sublist.map((e) => {
          if (e.rendered) sub.push(e);
        });
        if (sub.length > 0) {
          w.sublist = sub;
          k.push(w);
        }
      }
    });

    return k;
  };
  rend();
  return (
    <div className="widgetList">
      {rend().map((obj) => {
        if (obj.type === 'normal') {
          return (
            <Widget
              key={obj.index}
              id={obj.index}
              fix={props.fix}
              title={obj.title}
              zIndex={obj.zIndex}
              upWidget={upWidget}
              initialDimension={obj.initialSize}
              display={obj.display}
              closeWidget={closeWidget}>
              {widgetList.find((e) => e.index === obj.index).body}
            </Widget>
          );
        }
        if (obj.type === 'submenu') {
          const dom = [];
          obj.sublist.map((oj) => {
            dom.push(
              <Widget
                key={oj.index}
                id={oj.index}
                fix={props.fix}
                title={oj.title}
                zIndex={oj.zIndex}
                upWidget={upWidget}
                initialDimension={oj.initialSize}
                display={oj.display}
                closeWidget={closeWidget}>
                {widgetList.find((e) => e.title === obj.title).sublist.find((f) => f.index === oj.index).body}
              </Widget>
            );
          });
          return dom;
        }
      })}
    </div>
  );
};

export default WidgetListConfig;
