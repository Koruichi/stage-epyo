import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import sendfile from './img/sendfile.png';
import DetailDataHistoryInventory from './DetailDataHistoryInventory';
import './styles/CRMission.scss'
import './styles/Print.scss'
import listlight from './img/listlight.png';
import { IoCloseSharp } from 'react-icons/io5';
import { useHistory } from "react-router-dom";
import Export from './Export'
import DetailDataHistoryInventory from './DetailDataHistoryInventory';

const InventoryDetails = ({ getInventory, remoteFullscreen, toggleExportOption, exportOption }) => {
  useEffect(() => {
    getInventory()
  }, [])

  const history = useHistory();
  return (
    <>
      <Header />
      <Navigation />
      <h1 className="CR"> <img src={listlight} width="50" height="50" /> Rapport d'inventaire
        <div className="imagesID" style={{ cursor: 'pointer' }}>
          <img src={sendfile} onClick={() => toggleExportOption(!exportOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}></img>
          <div onClick={() => history.goBack("/", { from: "/" }, remoteFullscreen())} className="croix"><IoCloseSharp size='1.5em' margin-left="20em" />
          </div>
        </div> </h1>
      <DetailDataHistoryInventory />
      {exportOption ? < Export /> : ''}
    </>
  );
};

const mapStateToProps = (state) => ({
  exportOption: state.exportOption
});

const mapDispatchToProps = (dispatch) => ({
  getInventory: () => {
    dispatch({ type: 'GET_INVENTORY' })
  },
  remoteFullscreen: () => {
    dispatch({ type: 'REMOTE_FULLSCREEN' })
  },
  toggleExportOption: (value) => {
    dispatch({ type: 'EXPORT', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryDetails);