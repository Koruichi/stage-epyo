import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === 'CHECK_IF_USER_ID_IS_GOOD') {
    var data = JSON.stringify({
      "Username": state.identifiant,
      "email": state.email,
      "Password": state.password,
      "Role": state.role
    });
    var config = {
      method: 'post',
      url: 'http://10.0.4.4:3333/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        if (response.data.length > 0) {
          if (response.data[0].statut === 'Inactif') store.dispatch({ type: 'FAIL_TO_CONNECT', errorValue: 'Votre compte est inactif' });
          else {
            localStorage.setItem('user', response.data[0].username)
            localStorage.setItem('role', response.data[0].role)
            localStorage.setItem('email', response.data[0].email)
            localStorage.setItem('isConnected', true)
            next(action)
          }
        }
        else {
          store.dispatch({ type: 'FAIL_TO_CONNECT', errorValue: 'Vos identifiants sont incorrects' });
        }
      })
      .catch(function (error) {
      });
  }

  else if (action.type === 'GET_LIST_USERS') {
    var data = JSON.stringify({
    });
    var config = {
      method: 'get',
      url: 'http://10.0.4.4:3333/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        store.dispatch({ type: 'PUT_USERS', value: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  else if (action.type === 'SORT_OUR_USERS') {
    let isItDescending = ''
    var mapped = state.listUsers.map(function (e) {
      return {
        ...e,
        [action.value.toLowerCase()]: e[action.value.toLowerCase()]
      };
    })
    if (state.whatFilteredis === action.value) {
      isItDescending = "d"
      mapped.sort(function (a, b) {
        if (a[action.value.toLowerCase()] < b[action.value.toLowerCase()]) {
          return 1;
        }
        if (a[action.value.toLowerCase()] > b[action.value.toLowerCase()]) {
          return -1;
        }
        return 0;
      });
    } else {
      // on trie l'objet temporaire avec les valeurs réduites
      mapped.sort(function (a, b) {
        if (a[action.value.toLowerCase()] > b[action.value.toLowerCase()]) {
          return 1;
        }
        if (a[action.value.toLowerCase()] < b[action.value.toLowerCase()]) {
          return -1;
        }
        return 0;
      });
    }
    store.dispatch({ type: 'PUT_USERS_FILTERED', value: mapped, whatfilteredis: action.value.toLowerCase() + isItDescending })
    // on utilise un objet final pour les résultats
  }

  else if (action.type === 'CHECK_IF_USER_ALREADY_EXISTS') {
    const state = store.getState();
    var data = JSON.stringify({
      "Username": state.identifiant,
      "Email": state.email,
      "Password": state.password,
      "Role": state.role
    });
    var config = {
      method: 'post',
      url: 'http://10.0.4.4:3333/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        if (response.data === 'Utilisateur déjà existant') {
          store.dispatch({ type: 'FAIL_TO_REGISTER' })
        }
        else if (response.status === 200) {
          next(action)
        }
        else {
        }
      })
      .catch(function (error) {
      });
  }

  else if (action.type === 'UPDATE_USER') {
    let data
    if (action.whatImChanging === "role") {
      data = JSON.stringify({
        "role": action.value,
        "statut": action.otherAction
      });
    } else {
      data = JSON.stringify({
        "role": action.otherAction,
        "statut": action.value
      });
    }
    var config = {
      method: 'post',
      url: `http://10.0.4.4:3333/user/${action.email}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        store.dispatch({ type: 'GET_LIST_USERS' })
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  else {
    next(action)
  }
};

export default userMiddleware;