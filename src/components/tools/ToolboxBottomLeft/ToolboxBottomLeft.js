import React, { useState } from 'react';
import { Button } from 'antd';
import { AiOutlineTeam } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Measurement from './Measurement';
import LegendList from './Legend';
import Layers from './Layers';
import BasemapGalery from './BasemapGalery';
// import Draw from './Draw';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const listToolboxBottomLeft = [
  {
    id: 1,
    name: 'Basemap Galery',
    icon: <i className="esri-icon-basemap" />,
    content: <BasemapGalery />,
  },
  {
    id: 2,
    name: 'Legend',
    icon: <i className="esri-icon-legend" />,
    content: <LegendList />,
  },
  {
    id: 3,
    name: 'Layers',
    icon: <i className="esri-icon-layers" />,
    content: <Layers />,
  },
  {
    id: 4,
    name: 'Measurement Tool',
    icon: <i className="esri-icon-measure" />,
    content: <Measurement />,
  },
  // {
  //   id: 5,
  //   name: 'Draw Tool',
  //   icon: <i className="esri-icon-measure" />,
  //   content: <Draw />,
  // },
];

const ToolboxBottomLeft = () => {
  const [show, setshow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [id, setId] = useState(null);

  const handleClickToolbox = () => {
    setshow(!show);
    setShowContent(false);
  };

  const handleClickToolboxSection = (ii) => {
    setId(ii);
    setShowContent(true);
  };
  const renderContent = (ii) => {
    const element = listToolboxBottomLeft.find((items) => items.id === ii);
    return element.content;
  };
  const toolboxContent = () => (
    <motion.div
      className="toolbox-bottom-left-content"
      initial={{ y: -2, height: 0, opacity: 0 }}
      animate={{ height: 400, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {renderContent(id)}
    </motion.div>
  );
  return (
    <div className="toolbox-bottom-left">
      <Button className="button-toolbox-bottom-left-toggle" onClick={handleClickToolbox} icon={<AiOutlineTeam />} />
      {showContent ? toolboxContent() : null}
      {show ? (
        <motion.ul className="toolbox-bottom-left-ul" variants={container} initial="hidden" animate="visible">
          {listToolboxBottomLeft.map((e) => (
            <motion.li key={e.id} className="toolbox-bottom-left-item" variants={item}>
              <Button icon={e.icon} onClick={() => handleClickToolboxSection(e.id)} />
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
    </div>
  );
};

export default ToolboxBottomLeft;
