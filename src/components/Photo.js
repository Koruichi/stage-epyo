import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import './styles/CRMission.scss'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IoCloseSharp } from 'react-icons/io5';
import { useHistory } from "react-router-dom";
import './styles/Print.scss';

const CRMission = ({ remoteFullscreen, getInventory, currentProduct }) => {
  useEffect(() => {
    getInventory()
  }, [])
  const history = useHistory();
  return (
    <>
      <Header />
      <Navigation />
      <h2 >Photo <div style={{ position: 'absolute', top: '32px', right: '10px' }} onClick={() => history.goBack("/", { from: "/detailData" }, remoteFullscreen())} className="croix"><IoCloseSharp size='1.5em' margin-left="20em" /></div></h2>
      <div className='partiePhoto'>
        <TransformWrapper> <TransformComponent>
          < img className="photoFull" src={currentProduct.photo} width="50%" />
        </TransformComponent></TransformWrapper>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getInventory: () => {
    dispatch({ type: 'GET_INVENTORY' })
  },
  remoteFullscreen: () => {
    dispatch({ type: 'REMOTE_FULLSCREEN' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CRMission);