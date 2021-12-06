import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/Calcul.scss'
import './styles/Print.scss'
import conformity from './img/conformity.png';
import { FaBarcode } from "react-icons/fa";
import robot from './img/robot.png';
import clock from './img/clock.png';
import chrono from './img/chrono.png';

const Calculs = ({ getInventory, detailData, data, whichInventoryIsSelected }) => {
  const date = data.find((e) => e.id_inventaire === whichInventoryIsSelected);
  const timestamp = new Date(date.date_debut).getTime()
  const timestamp2 = new Date(date.date_fin).getTime()
  const newtimestamp = timestamp2 - timestamp

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  }

  const nonVisite = detailData.filter((e) => e.diagnostique === "Non visité").length
  const erreurRobot = detailData.filter((e) => e.diagnostique === "Problème lecture").length
  const nonLus = detailData.filter((e) => e.diagnostique === "Mauvaise palette" || e.diagnostique === "Palette manquante").length
  const tauxLecture = (100 - ((nonLus / (detailData.length - nonVisite)) * 100))
  const conformite = (100 - ((erreurRobot / (detailData.length - nonLus)) * 100))
  const navigation = (100 - ((nonVisite / detailData.length) * 100))

  useEffect(() => {
    getInventory()
  }, [])
  return (
    <ul className="calcul">
      <li><h4>Taux de lecture</h4>  <FaBarcode size='70' style={{ marginBottom: '12px' }} /> <p className="pourcent"> {Math.round(tauxLecture)}%</p></li>
      <li><h4>Conformité</h4> <img src={conformity} width="75" height="75"></img> <p className="pourcent"> {Math.round(conformite)}%</p> </li>
      <li><h4>Navigation</h4> <img src={robot} width="50" height="70" style={{ marginBottom: '12px' }}></img> <p className="pourcent"> {Math.round(navigation)}%</p></li>
      <li> <h4>Chrono</h4> <p className="time">{msToTime(newtimestamp)}</p> <img src={clock} width="50" height="50"></img>   <img src={chrono} width="50" height="50"></img> <p className="timeby">{msToTime(newtimestamp / detailData.length).split(':')[1]}:{msToTime(newtimestamp / detailData.length).split(':')[2]}s</p><p className="emp">/emplacement</p> </li>
    </ul>
  )
}

const mapStateToProps = (state) => ({
  whichInventoryIsSelected: state.whichInventoryIsSelected,
  data: state.data,
  detailData: state.detailData
});

const mapDispatchToProps = (dispatch) => ({
  getInventory: () => {
    dispatch({ type: 'GET_INVENTORY' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculs);