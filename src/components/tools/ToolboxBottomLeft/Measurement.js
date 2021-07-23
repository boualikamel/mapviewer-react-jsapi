import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'antd';
import Measurements from '@arcgis/core/widgets/Measurement';
import { view } from '../../../hooks/MapProvider';

function Measurement() {
  const [measurement, setMeasurement] = useState(null);

  const measurementContentRef = useRef(null);

  const handleClickLine = () => {
    measurement.activeTool = 'distance';
  };
  const handleClickArea = () => {
    measurement.activeTool = 'area';
  };
  const handleClickTrash = () => {
    measurement.clear();
  };

  useEffect(() => {
    setMeasurement(
      new Measurements({
        view,
        container: measurementContentRef.current,
      })
    );
  }, []);

  return (
    <>
      <div className="measurement">
        <Button className="toolbox-bottom-left-measurement-item " icon={<i className="esri-icon-measure-line" />} onClick={handleClickLine} />
        <Button className="toolbox-bottom-left-measurement-item " icon={<i className="esri-icon-measure-area" />} onClick={handleClickArea} />
        <Button className="toolbox-bottom-left-measurement-item " icon={<i className="esri-icon-trash" />} onClick={handleClickTrash} />
      </div>
      <div className="measurement-content" ref={measurementContentRef} />
    </>
  );
}

export default Measurement;
