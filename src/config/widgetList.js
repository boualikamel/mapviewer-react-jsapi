import React, { useState } from "react";
// import Drawing from "../components/widgets/Drawing";
// import Affaire from "../components/widgets/Affaire";
// import Statistique from "../components/widgets/Statistique";
import Widget from "../layouts/widgetLayout/Widget";
const WidgetList = (props) => {
  const [listWidget, setListWidget] = useState(props.listWidget);

  const upWidget = (id) => {
    let objWidgets = [...listWidget];
    let getMax = Math.max.apply(
      Math,
      objWidgets.map(function (o) {
        return o.zIndex;
      })
    );

    objWidgets.map((obj, i) => {
      if (i === id) {
        objWidgets[i].zIndex = getMax + 1;
      }
      //   else {
      //     if (objWidgets[i].zIndex !== 0) {
      //       objWidgets[i].zIndex = objWidgets[i].zIndex - 1;
      //     }
      //   }
    });
    setListWidget(objWidgets);
  };
  const closeWidget = (index) => {
    console.log("index", index);
    let objWidgets = [...listWidget];
    objWidgets[index].display = "none";
    setListWidget(objWidgets);
  };

  const rend = props.listWidget.filter((widget, i) => {
    return widget.rendered === true;
  });

  return (
    <div className="widgetList">
      {rend.map((obj) => {
        return (
          <Widget
            key={obj.i}
            id={obj.i}
            fix={props.fix}
            title={obj.title}
            zIndex={obj.zIndex}
            upWidget={upWidget}
            initialDimension={obj.initialSize}
            display={obj.display}
            closeWidget={closeWidget}
          >
            {obj.body}
          </Widget>
        );
      })}
    </div>
  );
};

export default WidgetList;
