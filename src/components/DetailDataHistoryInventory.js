import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/DetailData.scss';
import './styles/Print.scss'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const DetailDataHistoryInventory = ({ historyInventory, lookingForData, detailData, showThisProduct, currentProduct, isItFullscreen, sortOurData, whatFilteredis, exportOption }) => {
  useEffect(() => {
    lookingForData()
  }, [])
  return (
    <div className={exportOption ? 'exportOptionIsOn' : ''}>
      <ul className="navHeaderDD">
        <li className="eachList">
          
          <p onClick={() => sortOurData("date")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Date<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('date') ? whatFilteredis === 'date_debut' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
            
          <p onClick={() => sortOurData("nom_inventaire")} style={{ width: '120px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Nom Inventaire<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('zones') ? whatFilteredis === 'nom_inventaire' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("type")} style={{ width: '70px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Types<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('cellules') ? whatFilteredis === 'type' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("template")} style={{ width: '100px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Template<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('allees') ? whatFilteredis === 'template' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("details")} style={{ width: '70px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Détail<span style={{ marginLeft: '50px' }}> {whatFilteredis.includes('colonnes') ? whatFilteredis === 'details' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("recurrence")} style={{ width: '100px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Récurrence<span style={{ marginLeft: '10px' }}> {whatFilteredis.includes('niveaux') ? whatFilteredis === 'recurrence' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurData("statut")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Statut<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('statut') ? whatFilteredis === 'statut' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
       
        </li>
      </ul>
      <ul>

        {historyInventory.length > 0 ?
          historyInventory.map((e) => {
            return (
              <li className="eachList" >
                <p style={{ width: '50px' }}> {e.date.split('-')[2].slice(0, 2) + '/' + e.date.split('-')[1] + '/' + e.date.split('-')[0]}</p>
                <p style={{ width: '150px'}}> {e.nom_inventaire}</p>
                <p style={{ width: '20px' }}> {e.types}</p>
                <p style={{ width: '150px' }}> {e.template}</p>
                <p style={{ width: '65px' }}> {e.detail}</p>
                <p style={{ width: '100px'}}> {e.recurrence}</p>
                <p style={{ width: '50px'}}> {e.statut_ip}</p>
               
              </li>
            )
          })
          : "Merci de selectionner un inventaire" }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  currentProduct: state.currentProduct,
  isItFullscreen: state.isItFullscreen,
  whatFilteredis: state.whatFilteredis,
  exportOption: state.exportOption,
  historyInventory: state.historyInventory
});

const mapDispatchToProps = (dispatch) => ({
  lookingForData: () => {
    dispatch({ type: 'GET_HISTORY' })
  },
  
  sortOurData: (value) => {
    dispatch({ type: 'SORT_OUR_DATA', value: value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailDataHistoryInventory);
