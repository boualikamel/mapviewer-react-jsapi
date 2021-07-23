import React from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiFeather, FiHome, FiTarget, FiZap } from 'react-icons/fi';
import Affaire from '../components/widgets/Affaire/Affaire';
import Stats from '../components/widgets/Stats/Stats';
import { FiCommand } from 'react-icons/fi';
import Cotation from '../components/widgets/Cotation/Cotation';
import Subone from '../components/widgets/sub1/Subone';
import Subtwo from '../components/widgets/sub2/Subtwo';
import Subthree from '../components/widgets/sub3/Subthree';

/**
 * this file is used to generate the draggable widgets in the map 
 * there is two type normal || submenu 
 *  there is a title of the widget 
 *  title on the menu
 * the body of the widget and it must be in the components/ widgets folder 
 * the icons showing in the menu
 * the initial size 
 * the initial position
 * 
 * sublist wich contain the list of the sub widgets
 * **/ 

const widgetConfig = [
  {
    type: 'normal',
    title: 'Affaire',
    menuTitle: 'Affaire',
    body: <Affaire />,
    icon: <FiHome className="ant-menu-item-icon" />,
    initialSize: { height: '400px', width: '400px' },
    initalPosition: '',
  },
  {
    type: 'normal',
    title: 'Statistique',
    menuTitle: 'Statistique',
    body: <Stats />,
    icon: <FiTarget className="ant-menu-item-icon" />,
    initalPosition: '',
  },
  {
    type: 'submenu',
    title: 'Exploitation',
    icon: <FiZap className="ant-menu-item-icon" />,
    sublist: [
      {
        title: 'Cotation et',
        menuTitle: 'Cotation',
        body: <Cotation />,
        initalPosition: '',
      },
      {
        title: 'Chargement',
        menuTitle: 'Chargement',
        body: <Subone />,
        initalPosition: '',
      },
    ],
  },
  {
    type: 'submenu',
    title: 'Consultation',
    icon: <FiFeather className="ant-menu-item-icon" />,
    sublist: [
      {
        title: 'consugeo',
        menuTitle: 'consugeo',
        body: <Subtwo />,
        initalPosition: '',
      },
      {
        title: 'consuattr',
        menuTitle: 'consuattr',
        body: <Subthree />,
        initalPosition: '',
      },
    ],
  },
];

export default widgetConfig;
