import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/Data.scss'
import './styles/Print.scss'
import ok from './img/ok.png';
import no from './img/no.png';

const RobotData = ({ showThisInventory, whichInventoryIsSelected, getInventory, data, dataStatus, }) => {
  useEffect(() => {
    getInventory()
  }, [])
  return (
    <ul className="eachInventory">
      {
        data.map((t) => {
          return (
            <li key={t.id_inventaire} className={whichInventoryIsSelected === t.id_inventaire ? 'lookingFor is-active' : 'lookingFor'} onClick={() => showThisInventory(t.id_inventaire)}> Inventaire du {t.date_debut.split('-')[2].slice(0, 2) + '/' + t.date_debut.split('-')[1] + '/' + t.date_debut.split('-')[0]}
              {/* On se base sur notre dataStatus, qui nous ressort tous les status liés aux inventaires, puis on compare s'ils sont tous validé par rapport à l'inventaire, si c'est le cas, on met l'icone validé*/}
              {dataStatus.filter(e => e.inventaire_id === t.id_inventaire && e.statut_id === 5).length === dataStatus.filter(e => e.inventaire_id === t.id_inventaire).length ? <img className="imgInv" src={ok} width="15px" /> : <img className="imgInv" src={no} width="15px" />}</li>
          )
        })}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  whichInventoryIsSelected: state.whichInventoryIsSelected,
  data: state.data,
  dataStatus: state.dataStatus
});

const mapDispatchToProps = (dispatch) => ({
  showThisInventory: (value) => {
    dispatch({ type: 'SHOW_THIS_INVENTORY', value: value });
    dispatch({ type: 'GET_DETAILS_INVENTORY', value: value });
    dispatch({ type: 'GET_EXPORT' })
  },
  getInventory: () => {
    dispatch({ type: 'GET_INVENTORY' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RobotData);