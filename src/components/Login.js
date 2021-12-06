import React, {  } from 'react';
import { connect } from 'react-redux';
import './styles/Login.scss';
import './styles/Print.scss'
import { FaUser } from 'react-icons/fa';

const Login = ({ identifiant, password, error, verifyUserId, changeValue }) => {
  return (
    <div className="allLoginPart">
      <div className="circleAroundUser">   <span> <FaUser size='2.2em' color='#556fe4' /> </span>  </div>
      <div className="divToConnect">
        <form className="formToConnect" onSubmit={verifyUserId}>
          < div className="input-container" >
            <input className="inputArea" value={identifiant} onChange={(event) => changeValue(event.target.value, 'identifiant')} />
            < label > Identifiant ou Email </ label >
          </div>
          < div className="input-container" >
            <input className="inputArea" type={'password'} value={password} onChange={(event) => changeValue(event.target.value, 'password')} />
            < label > Mot de passe </ label >
          </div>
          <input className="submitBtn" value="Connexion" type="submit" />
        </form>
        {error.length !== '' ? <div style={{ color: 'red' }}> {error}  </div> : ''}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  identifiant: state.identifiant,
  password: state.password,
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  verifyUserId: (event) => {
    event.preventDefault()
    // on dispatch un event, par la propriété "type" qui passera dans les middleware associé, puis si le type a été nexter finira sa course dans le reducer => 
    dispatch({ type: 'CHECK_IF_USER_ID_IS_GOOD' });
  },
  changeValue: (value, whatToChange) => {
    dispatch({ type: "CHANGE_VALUE", value: value, whatToChange: whatToChange })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);