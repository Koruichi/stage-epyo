import React, {} from 'react';
import { connect } from 'react-redux';
import Robot from './Robot'
import Login from './Login'

const Home = ({ isUserConnected }) => {
  return (
    <>
      {isUserConnected ? <Robot /> : < Login />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isUserConnected: state.isUserConnected
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);