import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const Widget = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [activeDrags, setActiveDrags] = useState(0);
  const [fixe, setFixe] = useState(true);
  const[height,setHeight]=useState('600px')

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    setPosition({ x: y + ui.deltaY, y: y + ui.deltaY });
  };

  const toggleFixeWidget = () => {
    setPosition({ x: 0, y: 0 });
    setDeltaPosition({ x: 0, y: 0 });
    setFixe(!fixe);
    setHeight('100%')
  };

  let onStart = () => {
    let ad = activeDrags + 1;
    setActiveDrags(ad);
  };

  let onStop = () => {
    let ad = activeDrags - 1;
    setActiveDrags(ad);
    setPosition({ x: deltaPosition.x, y: deltaPosition.y });
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <Draggable
      handle="strong"
      bounds="parent"
      onDrag={handleDrag}
      {...dragHandlers}
      onStart={() => fixe}
      position={position}
    >
      <div className="box no-cursor widgetContainer" style={{height: height}}>
        <strong className="cursor widgetHeader" >
          <div className="widgetTitle">Drag here</div>

          <div className="widgetCustomize">
            <div className="minimizeWidget">
              <ArrowLeftIcon></ArrowLeftIcon>
            </div>
            <div className="maximizeWidget"></div>
            <div className="closeWidget"></div>
            <div className="fixeWidget" onClick={toggleFixeWidget}></div>
          </div>
        </strong>
        <div className="widgetBody">
         
        </div>
      </div>
    </Draggable>
  );
};

export default Widget;
