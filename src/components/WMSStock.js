import React, { } from 'react';
import { connect } from 'react-redux';
import './styles/WMSStock.scss';
import './styles/Print.scss';
import stock from './img/stock.png';
import { IoCloseSharp } from 'react-icons/io5';

const DetailWMS = ({ detailWMS, toggleWmsDetails, wmsDetails }) => {
  return (
    <>
      <div className="centerPerfectly">
        <h1 className="CR"><img className="stock" src={stock} width="50" /> Stock - Mouvements <div onClick={() => toggleWmsDetails(!wmsDetails)}><div className="croix" style={{ cursor: 'pointer' }}><IoCloseSharp size='1.5em' /></div></div> </h1>
        <ul className="navHeader">
          <li className="eachProduct">
            <p style={{ width: '140px', 'fontWeight': 'bold' }}>CAB</p>
            <p style={{ width: '150px', 'fontWeight': 'bold' }}>Emplacement</p>
            <p style={{ width: '200px', 'fontWeight': 'bold' }}>Date</p>
            <p style={{ width: '150px', 'fontWeight': 'bold' }}>Type</p>
            <p style={{ width: '50px', 'fontWeight': 'bold' }}>Stock</p>
          </li>
        </ul>
        <ul className="listWMS">
          {detailWMS.map((e) => {
            return (
              <li className='eachProduct ' >
                <p style={{ width: '140px' }}> {e.cab}</p>
                <p style={{ width: '150px' }}> {e.wms_zones}-{e.wms_cellules}-{e.wms_allees}-{e.wms_colonnes}-{e.wms_niveaux}-{e.wms_emplacements}</p>
                <p style={{ width: '200px' }}> {e.date_wms_stock}</p>
                <p style={{ width: '150px' }}> {e.wms_type}</p>
                <p style={{ width: '50px' }}> {e.stock_wms}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  detailWMS: state.detailWMS,
  wmsDetails: state.wmsDetails
});

const mapDispatchToProps = (dispatch) => ({
  toggleWmsDetails: (value) => {
    dispatch({ type: 'WMS_DETAILS', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailWMS);
