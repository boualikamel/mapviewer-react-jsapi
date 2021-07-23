import React from 'react';
import { Button } from 'antd'
import { AiOutlineShrink, AiOutlineScissor } from "react-icons/ai";
const selecFeature = () => {
  console.log('select featuer')
}
const dedoublement = () => {
  console.log('dedoublment')

}
const fusion = () => {
  console.log('fusion')
}
const Cotation = () => (
  <div className="Cotation">
    <p>Cotation</p>
    <Button icon={<i className="esri-icon-cursor-filled" />} onClick={selecFeature}></Button>
    <Button icon={<AiOutlineScissor />} onClick={dedoublement}></Button>
    <Button icon={<AiOutlineShrink />} onClick={fusion}></Button>
  </div>
);

export default Cotation;
