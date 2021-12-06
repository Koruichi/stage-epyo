import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/ListUsers.scss';
// Todo filtrer les utilisateurs
const ListUsers = ({ listUsers, changeValue, lookingForData }) => {
  useEffect(() => {
    lookingForData()
  }, [])

  return (
    <div className="listUsers">
      <h2>Liste utilisateurs</h2>
      <li className="eachUser">
        <p style={{ width: '75px' }} className="headerUser">Utilisateur</p>
        <p style={{ width: '125px' }} className="headerUser"> Email </p>
        <p style={{ width: '200px' }} className="headerUser"> Role </p>
        <p style={{ width: '225px' }} className="headerUser">Statut </p>
      </li>
      <ul style={{ paddingLeft: '0px' }}>
        {listUsers.map((e) => {
          return (
            <li className="eachUser">
              <p style={{ width: '75px' }}> {e.username}</p>
              <p style={{ width: '125px' }}> {e.email}</p>
              <p style={{ width: '200px' }}> <select id="select" value={e.role} onChange={(event) => changeValue(e.email, event.target.value, e.statut, 'role')}>
                <option value="User">Utilisateur</option>
                <option value="Admin">Admin</option>
              </select></p>
              <p style={{ width: '200px' }}> <select id="select" value={e.statut} onChange={(event) => changeValue(e.email, event.target.value, e.role, 'statut')}>
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select></p>
            </li>
          )
        })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listUsers: state.listUsers,
});

const mapDispatchToProps = (dispatch) => ({
  lookingForData: () => {
    dispatch({ type: 'GET_LIST_USERS' })
  },
  changeValue: (email, value, otherAction, whatImChanging) => {
    dispatch({ type: 'UPDATE_USER', value: value, email: email, otherAction: otherAction, whatImChanging: whatImChanging })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
