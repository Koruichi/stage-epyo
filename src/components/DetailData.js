import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './styles/DetailData.scss';
import './styles/Print.scss'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const DetailData = ({ detailData, showThisProduct, currentProduct, isItFullscreen, sortOurData, whatFilteredis, exportOption }) => {
  const itemEls = useRef({});
  return (
    <div className={exportOption ? 'exportOptionIsOn' : ''}>
      <ul className="navHeaderDD">
        <li className="eachList">

          <p onClick={() => sortOurData("date_debut")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Date<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('date_debut') ? whatFilteredis === 'date_debut' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("zones")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
           <div className="filter"> Zone<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('zones') ? whatFilteredis === 'zones' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
         
          <p onClick={() => sortOurData("cellules")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter"> Cellule<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('cellules') ? whatFilteredis === 'cellules' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("allees")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Allée<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('allees') ? whatFilteredis === 'allees' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("colonnes")} style={{ width: '65px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Colonne<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('colonnes') ? whatFilteredis === 'colonnes' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("niveaux")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Niveau<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('niveaux') ? whatFilteredis === 'niveaux' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
         
          <p onClick={() => sortOurData("emplacements")} style={{ width: '100px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Emplacement<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('emplacements') ? whatFilteredis === 'emplacements' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("cab")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">CAB théorique<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('cab') ? whatFilteredis === 'cab' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("cab_constate")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">CAB constaté<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('cab_constate') ? whatFilteredis === 'cab_constate' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("reference")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Référence<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('reference') ? whatFilteredis === 'reference' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("designation")} style={{ width: '200px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Désignation produit<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('designation') ? whatFilteredis === 'designation' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("statut")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Statut<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('statut') ? whatFilteredis === 'statut' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
          
          <p onClick={() => sortOurData("diagnostique")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Diagnostique<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('diagnostique') ? whatFilteredis === 'diagnostique' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
        
        </li>
      </ul>
      <ul className={isItFullscreen ? "listInventory fullscreen" : "listInventory"}>
        {detailData.length > 0 ?
          detailData.map((e, i) => {
            return (
              <li ref={(e) => itemEls.current[i] = e} style={{ cursor: 'pointer' }}  className={currentProduct.id_produit === e.id_produit ? 'eachList current' : 'eachList'} key={e.id}>
                <p style={{ width: '50px' }}> {e.date_debut.split('-')[2].slice(0, 2) + '/' + e.date_debut.split('-')[1] + '/' + e.date_debut.split('-')[0]}</p>
                <p style={{ width: '50px' }}> {e.zones}</p>
                <p style={{ width: '50px' }}> {e.cellules}</p>
                <p style={{ width: '50px' }}> {e.allees}</p>
                <p style={{ width: '65px' }}> {e.colonnes}</p>
                <p style={{ width: '50px' }}> {e.niveaux}</p>
                <p style={{ width: '100px' }}> {e.emplacements}</p>
                <p style={{ width: '150px' }}> {e.cab}</p>
                <p style={{ width: '150px' }}> {e.cab_constate}</p>
                <p style={{ width: '150px' }}> {e.reference}</p>
                <p style={{ width: '200px' }}> {e.designation}</p>
                <p style={{ width: '150px' }} className={e.statut}> {e.statut}</p>
                <p style={{ width: '150px' }}> {e.diagnostique}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailData);
