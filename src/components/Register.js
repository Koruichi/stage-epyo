import React, { } from 'react';
import { connect } from 'react-redux';
import './styles/Register.scss';
import './styles/Print.scss'
import { FaUser } from 'react-icons/fa';
import Header from './Header';
import Navigation from './Navigation';
import ListUsers from './ListUsers';

const Register = ({ identifiant, email, password, role, error, changeValue, createNewUser, isUserRegisteredWell }) => {
  const rememberMe = localStorage.getItem('role') === 'Admin';
  return (
    <>
      < Header />
      < Navigation />
      <div className="userPart">
        {rememberMe ?
          <>
            <div className="registerPart">
              <h2>Nouvel utilisateur</h2>
              <div className="registerUser">   <span> <FaUser size='3.5em' color='#556fe4' /> </span>  </div>
              <div className="divToConnect">
                <form className="formToConnect" onSubmit={(event) => createNewUser(event)}>
                  <div className="inputbox">
                  </div>
                  < div className="input-container" >
                    <input className="inputArea" value={identifiant} onChange={(event) => changeValue(event.target.value, 'identifiant')} />
                    < label > Identifiant </ label >
                  </ div >
                  < div className="input-container" >
                    <input className="inputArea" type='email' value={email} onChange={(event) => changeValue(event.target.value, 'email')} />
                    < label > Email </ label >
                  </ div >
                  < div className="input-container" >
                    <input className="inputArea" type='password' value={password} onChange={(event) => changeValue(event.target.value, 'password')} />
                    < label > Mot de passe </ label >
                  </ div >
                  <select id="role-select" value={role} onChange={(event) => changeValue(event.target.value, 'role')}>
                    <option value="User">Utilisateur</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <input className="submitBtn" value="Créer" type="submit" />
                </form>
                {error !== '' ? <div className="textLogin" style={{ color: 'red' }}> {error}  </div> : ''}
                <div className="textLogin"> {isUserRegisteredWell ? 'Compte bien créé' : ''}
                </div>
              </div>
            </div>
          </>
          : 'Merci de vous connecter'
        }
        <ListUsers />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  identifiant: state.identifiant,
  email: state.email,
  password: state.password,
  error: state.error,
  isUserRegisteredWell: state.isUserRegisteredWell
});

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (event) => {
    event.preventDefault()
    dispatch({ type: "CHECK_IF_USER_ALREADY_EXISTS" })
  },
  changeValue: (value, whatToChange) => {
    dispatch({ type: "CHANGE_VALUE", value: value, whatToChange: whatToChange })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);