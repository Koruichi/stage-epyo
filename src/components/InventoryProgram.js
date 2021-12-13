import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import duplicate from './img/duplicate.png';
import errorrobot from './img/errorrobot.png';
import cycle  from './img/cycle.png';
import sendfile from './img/sendfile.png';
import stock from './img/stock.png';
import DetailData from './DetailData';
import './styles/CRMission.scss'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { NavLink } from 'react-router-dom'
import './styles/Print.scss'
import Export from './Export';
import WMSStock from './WMSStock';
import DetailDataHistoryInventory from './DetailDataHistoryInventory';
import Template from './Template';

const InventoryProgram = ({ putStatutIntoState, getInventory, detailData, currentProduct, changeFullscreen, getEverythingFromWms, toggleExportOption, exportOption, wmsDetails, toggleWmsDetails,templateOption,toggleTemplateOption }) => {
  useEffect(() => {
    getInventory()
  }, [])
  return (
    <>
      <Header />
      <Navigation />
      <div className={wmsDetails ? 'wmsDetailsIsOn' : ''}>
        <h1 className="CR"> 
        <img src={errorrobot} width="50" height="50" color="black">
        </img> Inventaires Programmés 
                <div className="images">
                <img src={duplicate} className="imgFullscreen" width="50" height="50" style={{ marginTop: "0.8em", cursor: 'pointer' }}></img>
              <img src={cycle} onClick={() => toggleTemplateOption(!templateOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}></img>

                  <NavLink onClick={() => changeFullscreen()} to="/inventoryDetails"> 
                  <img src={sendfile} onClick={() => toggleExportOption(!exportOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}>
                </img>
                  </NavLink> 
  
                  </div>
        </h1>
        <DetailDataHistoryInventory />
        {templateOption ? <Template /> : ""}
   
      </div>

    </>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  currentProduct: state.currentProduct,
  templateOption: state.templateOption,
  wmsDetails: state.wmsDetails
});

const mapDispatchToProps = (dispatch) => ({
  getInventory: () => {
    dispatch({ type: 'GET_INVENTORY' })
  },
  putStatutIntoState: (value, idInventaire) => {
    dispatch({ type: 'MODIFY_STATUT', value, idInventaire })
  },
  getEverythingFromWms: (value) => {
    dispatch({ type: 'GET_EVERYTHING_FROM_WMS', value })
  },
  changeFullscreen: () => {
    dispatch({ type: 'CHANGE_FULLSCREEN' })
  },
  toggleTemplateOption: (value) => {
    dispatch({ type: 'TEMPLATE', value: value })
  },
  toggleWmsDetails: (value) => {
    dispatch({ type: 'WMS_DETAILS', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryProgram);