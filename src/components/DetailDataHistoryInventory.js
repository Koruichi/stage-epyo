import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/HistoryInventory.scss';
import './styles/Print.scss'
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

// const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// console.log(new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'long' }).format(date))
const DetailDataHistoryInventory = ({ sortOurHistory, historyInventory, lookingForData, detailData, showThisProduct, currentProduct, isItFullscreen, sortOurData, whatFilteredis, exportOption }) => {
  useEffect(() => {
    lookingForData()
  }, [])
  return (
    <div className={exportOption ? 'exportOptionIsOn' : ''}>
      <ul className="navHeaderDD">
        <li className="eachList">
          
          <p onClick={() => sortOurHistory("date")} style={{ width: '50px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Date<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('date') ? whatFilteredis === 'date_debut' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
            
          <p onClick={() => sortOurHistory("nom_inventaire")} style={{ width: '120px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Nom Inventaire<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('nom_inventaire') ? whatFilteredis === 'nom_inventaire' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurHistory("types")} style={{ width: '70px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Types<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('types') ? whatFilteredis === 'types' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurHistory("template")} style={{ width: '100px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Template<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('template') ? whatFilteredis === 'template' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurHistory("detail")} style={{ width: '70px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Détail<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('detail') ? whatFilteredis === 'detail' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurHistory("recurrence")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Récurrence<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('recurrence') ? whatFilteredis === 'recurrence' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span> </div></p>
          
          <p onClick={() => sortOurHistory("statut_ip")} style={{ width: '150px', 'fontWeight': 'bold', cursor: 'pointer' }}>
            <div className="filter">Statut<span style={{ marginLeft: '5px' }}> {whatFilteredis.includes('statut_ip') ? whatFilteredis === 'statut_ip' ? <FaArrowUp /> : <FaArrowDown /> : ''} </span></div></p>
       
        </li>
      </ul>
      <ul>
        
        {historyInventory.length > 0 ?
          historyInventory.map((e) => {
            return (
              
              <li className="eachList" >
                <p style={{ width: '50px' }}> {e.date.split('-')[2].slice(0, 2) + '/' + e.date.split('-')[1] + '/' + e.date.split('-')[0]}</p>
                <p style={{ width: '120px'}}> {e.nom_inventaire}</p>
                <p style={{ width: '70px' }}> {e.types}</p>
                <p style={{ width: '100px' }}> {e.template}</p>
                <p style={{ width: '70px' }}> {e.detail}</p>
                <p style={{ width: '100px'}}> {e.recurrence}</p>
                <p style={{ width: '150px'}}> {e.statut_ip}</p>
               
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
  
  sortOurHistory: (value) => {
    dispatch({ type: 'SORT_OUR_HISTORY', value: value });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailDataHistoryInventory);
