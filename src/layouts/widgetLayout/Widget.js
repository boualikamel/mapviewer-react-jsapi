import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const Widget = (props) => {
  const widgetContainerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [activeDrags, setActiveDrags] = useState(0);
  const [fixe, setFixe] = useState(true);
  const [dimension, setDimension] = useState({
    height: "600px",
    width: "600px",
  });
  const [initialDimension, setInitialDimension] = useState({});
  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    setPosition({ x: y + ui.deltaY, y: y + ui.deltaY });
  };

  const fixWidget = () => {
    setPosition({ x: 0, y: 0 });
    setDeltaPosition({ x: 0, y: 0 });
    setFixe(false);
    setDimension({ height: "100%", width: "600px" });
    setInitialDimension({
      x: widgetContainerRef.current.offsetHeight,
      y: widgetContainerRef.current.offsetWidth,
    });
  };

  const defixWidget = () => {
    setFixe(true);
    setDimension({
      height: initialDimension.height,
      width: initialDimension.width,
    });
  };

  const onStart = () => {
    let ad = activeDrags + 1;
    setActiveDrags(ad);
  };

  const onStop = () => {
    let ad = activeDrags - 1;
    setActiveDrags(ad);
    setPosition({ x: deltaPosition.x, y: deltaPosition.y });
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };

  useEffect(() => {
    props.fix ? fixWidget() : defixWidget();
  }, [props.fix]);

  return (
    <Draggable
      handle="strong"
      bounds="parent"
      onDrag={handleDrag}
      {...dragHandlers}
      onStart={() => fixe}
      position={position}
    >
      <div
        className="box no-cursor widgetContainer"
        style={{ height: dimension.height, width: dimension.width }}
        ref={widgetContainerRef}
      >
        <strong className="cursor widgetHeader">
          <div className="widgetTitle">Drag here</div>

          <div className="widgetCustomize">
            <div className="minimizeWidget"></div>
            <div className="maximizeWidget"></div>
            <div className="closeWidget"></div>
          </div>
        </strong>
        <div className="widgetBody">{props.children}</div>
      </div>
    </Draggable>
  );
};

export default Widget;