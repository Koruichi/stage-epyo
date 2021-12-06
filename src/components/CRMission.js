import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import fullscreen from './img/fullscreen.png';
import errorrobot from './img/errorrobot.png';
import sendfile from './img/sendfile.png';
import stock from './img/stock.png';
import DetailData from './DetailData';
import './styles/CRMission.scss'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { NavLink } from 'react-router-dom'
import './styles/Print.scss'
import Export from './Export';
import WMSStock from './WMSStock';

const CRMission = ({ putStatutIntoState, getInventory, detailData, currentProduct, changeFullscreen, getEverythingFromWms, toggleExportOption, exportOption, wmsDetails, toggleWmsDetails }) => {
  useEffect(() => {
    getInventory()
  }, [])
  return (
    <>
      <Header />
      <Navigation />
      <div className={wmsDetails ? 'wmsDetailsIsOn' : ''}>
        <h1 className="CR"> <img src={errorrobot} width="50" height="50" color="black"></img> Compte-rendu de mission <div className="images">
          <img src={sendfile} onClick={() => toggleExportOption(!exportOption)} width="50" height="50" style={{ marginRight: "2em", cursor: 'pointer' }}></img>
          <NavLink onClick={() => changeFullscreen()} to="/inventoryDetails"> <img src={fullscreen} className="imgFullscreen" width="80" height="80" style={{ marginTop: "0.5em", cursor: 'pointer' }}></img></NavLink> </div></h1>
        <DetailData />
        <div className={exportOption ? 'exportOptionIsOn' : ''}>
          {currentProduct.id_produit ?
            <div className="details">
              <div className="partie">
                <h2>WMS</h2>
                <div className="detailWMS">
                  <img className="stock" src={stock} onClick={() => {
                    getEverythingFromWms(currentProduct.id_produit);
                    toggleWmsDetails(!wmsDetails);
                  }
                  } width="60" style={{ cursor: 'pointer' }}></img>
                  <p style={{ 'fontWeight': 'bold' }}>Article</p>
                  <p>Référence : <strong>{currentProduct.reference}</strong></p>
                  <p>Désignation : <strong>{currentProduct.designation}</strong></p>
                  <p>Code-barres (CAB) : <strong>{currentProduct.cab}</strong></p>
                  <p>PCB : <strong>{currentProduct.PCB}</strong></p>
                  <p>SPCB :  <strong>{currentProduct.SPCB}</strong></p>
                  <br></br>
                  <p style={{ 'fontWeight': 'bold' }}>Palette</p>
                  <p>Nombre de pièces :  </p>
                  <p>Nombre de colis :  </p>
                  <p>N° de lot :  </p>
                  <p>DLC ou DLUO :  </p>
                  <p>Réception : </p>
                  <p>Dépose : </p>
                </div>
              </div>
              <div style={{ position: 'relative' }} className='partie'>
                <h2 >Photo
                  <div style={{ position: 'absolute', top: '-13px', right: '-60px' }} className="images"><NavLink onClick={() => changeFullscreen()} to="/photo"> <img src={fullscreen} className="imgFullscreenphoto" width="80" height="80" style={{ cursor: 'pointer' }}></img></NavLink>
                  </div></h2>
                <div className='partiePhoto'>
                  <TransformWrapper> <TransformComponent>
                    < img className="photo" src={currentProduct.photo} />
                  </TransformComponent></TransformWrapper>
                </div>
              </div>
              <div className="partie">
                <div className="diagnostique">
                  <h2>Diagnostique</h2>
                  <div className="wms">
                    <p>Code-barres (CAB) lu : {currentProduct.cab_constate != "" ? <strong>{currentProduct.cab_constate}</strong> : <strong>Null</strong>}</p>
                    <p>Motif : <strong>{currentProduct.diagnostique}</strong></p>
                    <p>Statut : <strong>{currentProduct.statut}</strong></p>
                  </div>
                </div>
                <h2 >Action</h2>
                <div className="buttonAction">
                  <button onClick={() => putStatutIntoState(2, detailData[0].id_inventaire)} type="submit" className="submitBtnCariste" value="A vérifier par le cariste" type="submit">A vérifier par le cariste</button>
                  <button onClick={() => putStatutIntoState(3, detailData[0].id_inventaire)} type="submit" className="submitBtnWMS" value="A modifier dans le WMS" type="submit">A modifier dans le WMS</button>
                  <button onClick={() => putStatutIntoState(5, detailData[0].id_inventaire)} type="submit" className="submitBtnValider" value="Valider" type="submit">Validé</button>
                </div>
              </div>
            </div>
            : ""}
        </div>
      </div>
      {exportOption ? <Export /> : ""}
      {wmsDetails ? < WMSStock /> : ""}
    </>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  currentProduct: state.currentProduct,
  exportOption: state.exportOption,
  wmsDetails: state.wmsDetails,
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
  toggleExportOption: (value) => {
    dispatch({ type: 'EXPORT', value: value })
  },
  toggleWmsDetails: (value) => {
    dispatch({ type: 'WMS_DETAILS', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CRMission);