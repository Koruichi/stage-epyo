import React, { } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import campagnes from './img/campagnes.png';
import fullscreen from './img/fullscreen.png';
import time from './img/time.png';
import timelight from './img/timelight.png';
import cycle from './img/cycle.png';
import sendfile from './img/sendfile.png';
import selectmission from './img/selectmission.png';
import novisit from './img/novisit.png';
import errorrobot from './img/errorrobot.png';
import mistakes from './img/mistakes.png';
import { BsPencil } from "react-icons/bs";
import Data from './Data';
import './styles/Robot.scss'
import './styles/Print.scss'
import 'reactjs-popup/dist/index.css';
import { Popup } from 'semantic-ui-react'
import Calculs from './Calculs';
import DetailData from './DetailData';
import { NavLink } from 'react-router-dom'
import ContenuMission from './ContenuMission';
import Export from './Export';
import Template from './Template';

const Robot = ({ whichInventoryIsSelected, detailData, changeFullscreen, toggleTemplateOption, templateOption, toggleExportOption, exportOption }) => {
  
  return (
    <>
      <Header />
      <Navigation />
      <div className="splitZones">
        <div className="campaignZone">
          <div className="separateElements">
            <img src={campagnes} width="40" height="40" />
            <h1> Campagnes</h1>
          </div>
          <Data />
        </div>
        <div className="contentMission">
          <div className="separateElements">
            <img src={cycle} onClick={() => toggleTemplateOption(!templateOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}></img>

            <img src={sendfile} onClick={() => toggleExportOption(!exportOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}></img>
            <h1> Contenu de la mission </h1>
            <NavLink to="/HistoryInventory"><img src={time} className="iTime"/></NavLink>
            <NavLink to="/inventoryProgram"><img src={timelight} className="iTime"/></NavLink>
            <NavLink onClick={() => changeFullscreen()} to="/inventoryDetails"><img src={fullscreen} className="iFullscreen"/></NavLink>
          </div>
          <ContenuMission />
        </div>
      </div>
      {whichInventoryIsSelected !== "" ?
        <>
          <h2 className="titleEmplacements">Emplacements</h2>
          <ul className="emplacements">
            <Popup className='Popup' content='Emplacements cible' trigger={<li><img style={{ margin: '0' }} src={selectmission} width="100" height="100"></img> {detailData.length}</li>}> Emplacements cible  </Popup>
            <Popup className='Popup' content='Emplacements non visités' trigger={<li style={{ color: 'red' }}> <img style={{ margin: '0' }} src={novisit} width="100" height="100"></img> {detailData.filter((e) => e.diagnostique === "Non visité").length} </li>}>Emplacements non visités</Popup>
            <Popup className='Popup' content='Erreurs avérées par le robot' trigger={<li style={{ color: 'red' }}> <img style={{ margin: '0' }} src={errorrobot} width="100" height="100"></img> {detailData.filter((e) => e.diagnostique === "Mauvaise palette" || e.diagnostique === "Palette manquante").length} </li>}>Erreurs avérées par le robot</Popup>
            <Popup className='Popup' content='Emplacements non lus' trigger={<li style={{ color: 'red' }}> <img style={{ margin: '0' }} src={mistakes} width="100" height="100"></img> {detailData.filter((e) => e.diagnostique === "Problème lecture").length} </li>}>Emplacements non lus</Popup>
          </ul>
          <nav className="resume">
            <Calculs />
          </nav>
          <NavLink to="/detailData">
            <button className="editer" type="submit"> <BsPencil /> Editer</button>
          </NavLink>
        </>
        : ""}
        {exportOption ? <Export /> : ""}
        {templateOption ? <Template /> : ""}
    </>
  );
};


const mapStateToProps = (state) => ({
  whichInventoryIsSelected: state.whichInventoryIsSelected,
  exportOption: state.exportOption,
  templateOption: state.templateOption,
  detailData: state.detailData
});

const mapDispatchToProps = (dispatch) => ({
  changeFullscreen: () => {
    dispatch({ type: 'CHANGE_FULLSCREEN' })
  },
  toggleExportOption: (value) => {
    dispatch({ type: 'EXPORT', value: value })
  },
  toggleTemplateOption: (value) => {
    dispatch({ type: 'TEMPLATE', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Robot);
