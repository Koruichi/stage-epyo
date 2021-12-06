import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './styles/DetailData.scss';
import './styles/Print.scss'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const ContenuMission = ({ detailData, showThisProduct, currentProduct, isItFullscreen, sortOurData, whatFilteredis, exportOption }) => {
  const itemEls = useRef({});
  return (
    <div className={exportOption ? 'exportOptionIsOn' : ''}>
      <ul className="navHeaderDD">
        <li className="eachList">
          <p onClick={() => sortOurData("zones")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter"> Zones<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('zones') ? whatFilteredis === 'zones' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          <p onClick={() => sortOurData("cellules")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter"> Cellules<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('cellules') ? whatFilteredis === 'cellules' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          <p onClick={() => sortOurData("allees")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Allées<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('allees') ? whatFilteredis === 'allees' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          <p onClick={() => sortOurData("colonnes")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter"> Colonnes<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('colonnes') ? whatFilteredis === 'colonnes' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          <p onClick={() => sortOurData("niveaux")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Niveaux<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('niveaux') ? whatFilteredis === 'niveaux' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          <p onClick={() => sortOurData("emplacements")} style={{ width: '250px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Emplacements<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('emplacements') ? whatFilteredis === 'emplacements' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
        </li>
        <p>TEST MAX</p>
      </ul>
      <ul className={isItFullscreen ? "listInventory fullscreen" : "listInventory"}>
        {detailData.length > 0 ?
          detailData.map((e, i) => {
           return (
              <li ref={(e) => itemEls.current[i] = e} style={{ cursor: 'pointer' }} onClick={() => showThisProduct(e)} className={currentProduct.id_produit === e.id_produit ? 'eachList current' : 'eachList'} key={e.id}>
                <p style={{ width: '250px' }}> {e.zones}</p>
                <p style={{ width: '250px' }}> {e.allees}</p>
                <p style={{ width: '250px' }}> {e.cellules}</p>
                <p style={{ width: '250px' }}> {e.colonnes}</p>
                <p style={{ width: '250px' }}> {e.niveaux}</p>
                <p style={{ width: '250px' }}> {e.emplacements}</p>
              </li>
           )
          })
          : "Merci de selectionner un inventaire"}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  currentProduct: state.currentProduct,
  isItFullscreen: state.isItFullscreen,
  whatFilteredis: state.whatFilteredis,
  exportOption: state.exportOption
});

const mapDispatchToProps = (dispatch) => ({
  showThisProduct: (value) => {
    dispatch({ type: 'SHOW_THIS_PRODUCT', value: value });
  },
  sortOurData: (value) => {
    dispatch({ type: 'SORT_OUR_DATA', value: value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContenuMission);
