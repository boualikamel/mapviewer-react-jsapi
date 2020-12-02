import React, { useState } from "react";
import Drawing from "../components/widgets/Drawing";
import Affaire from "../components/widgets/Affaire";
import Statistique from "../components/widgets/Statistique";

import Widget from "../layouts/widgetLayout/Widget";
const WidgetList = (props) => {
  const [listWidget, setListWidget] = useState([
    {
      title: "Affaire",
      menuTitle: "",
      body: <Affaire />,
      icon: "",
      initialSize: "",
      initalPosition: "",
      zIndex: 0,
    },
    {
      title: "Drawing",
      menuTitle: "",
      body: <Drawing />,
      icon: "",
      initialSize: "",
      initalPosition: "",
      zIndex: 0,
    },
    {
      title: "Statistique",
      menuTitle: "",
      body: <Statistique />,
      icon: "",
      initialSize: "",
      initalPosition: "",
      zIndex: 0,
    },
  ]);
  //   const [zIndex, setZIndex] = useState(0);

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

  return (
    <div className="widgetList">
      {listWidget.map((obj, i) => {
        return (
          <Widget
            key={i}
            id={i}
            fix={props.fix}
            title={obj.title}
            zIndex={obj.zIndex}
            upWidget={upWidget}
          >
            {obj.body}
          </Widget>
        );
      })}
    </div>
  );
};

export default WidgetList;
