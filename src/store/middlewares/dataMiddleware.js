import axios from 'axios';

const dataMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === 'GET_INVENTORY') {
    var config = {
      method: 'get',
      url: 'http://10.0.4.4:3333/inventories',
      headers: {}
    };
    axios(config)
      .then(function (response) {
        let tableau = {
          infobasique: [],
          allproductstatut: [],
        };
        for (const elem of response.data) {
          const invent = tableau.infobasique.find((e) => e.id_inventaire === elem.id_inventaire)
          if (invent === undefined) {
            tableau.infobasique.push(elem);
          }
          tableau.allproductstatut.push({ 'statut_id': elem.statut_id, 'inventaire_id': elem.id_inventaire })
        }
        store.dispatch({ type: 'PUT_INVENTORIES_INTO_STATE', data: tableau.infobasique, dataStatus: tableau.allproductstatut })
      })
      .catch(function (error) {
      });
  }

  else if (action.type === 'SORT_OUR_DATA') {
    let isItDescending = ''
    var mapped = state.detailData.map(function (e) {
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
    store.dispatch({ type: 'PUT_DATA_FILTERED', value: mapped, whatfilteredis: action.value.toLowerCase() + isItDescending })
    // on utilise un objet final pour les résultats
  }

  else if (action.type === 'GET_DETAILS_INVENTORY') {
    if (state.whichInventoryIsSelected !== '') {
      var config = {
        method: 'get',
        url: `http://10.0.4.4:3333/inventories/${state.whichInventoryIsSelected}`,
        headers: {}
      };
      axios(config)
        .then(function (response) {
          store.dispatch({ type: 'PUT_DETAIL', value: response.data })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  else if (action.type === 'GET_EXPORT') {
    if (state.whichInventoryIsSelected !== '') {
      var config = {
        method: 'get',
        url: `http://10.0.4.4:3333/export/${state.whichInventoryIsSelected}`,
        headers: {}
      };
      axios(config)
        .then(function (response) {
          store.dispatch({ type: 'PUT_EXPORT', value: response.data })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  else if (action.type === 'GET_PRODUCT') {
    if (state.whichProductIsSelected !== '') {
      var config = {
        method: 'get',
        url: `http://10.0.4.4:3333/inventories/${state.whichProductIsSelected}`,
        headers: {}
      };
      axios(config)
        .then(function (response) {
          store.dispatch({ type: 'PUT_DETAIL_PRODUCT', value: response.data })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  else if (action.type === 'GET_EVERYTHING_FROM_WMS') {
    var config = {
      method: 'get',
      url: `http://10.0.4.4:3333/wmsstock/${action.value}`,
      headers: {}
    };
    axios(config)
      .then(function (response) {
        store.dispatch({ type: 'PUT_DETAIL_WMS', value: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  else if (action.type === 'MODIFY_STATUT') {
    const state = store.getState();
    var data = JSON.stringify({
      "data": action.value,
      "idInventaire": action.idInventaire
    });
    var config = {
      method: 'post',
      url: `http://10.0.4.4:3333/statut/${state.currentProduct.id_produit}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        store.dispatch({ type: 'GET_DETAILS_INVENTORY' })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  else if (action.type === 'FILTER_STATUT') {
    const state = store.getState();
    if (action.value === "Tous" && state.detailExport.length === state.dataFilteredForExcel.length) {
      store.dispatch({ type: 'FILTERED_FOR_EXCEL', value: [] })
      return
    }
    if (action.value === "Tous") {
      store.dispatch({ type: 'FILTERED_FOR_EXCEL', value: state.detailExport })
      return
    }
    if (state.dataFilteredForExcel.length > 0 && state.dataFilteredForExcel.filter(e => e.Statut === action.value).length > 0) {
      const filteredTable = state.dataFilteredForExcel.filter(e => e.Statut !== action.value)
      store.dispatch({ type: 'FILTERED_FOR_EXCEL', value: filteredTable })
    } else {
      const filteredTable = state.detailExport.filter(e => e.Statut === action.value)
      let table = []
      for (const elem of state.dataFilteredForExcel) {
        table.push(elem)
      }
      for (const elem of filteredTable) {
        table.push(elem)
      }
      store.dispatch({ type: 'FILTERED_FOR_EXCEL', value: table })
    }
  }

  else if (action.type === 'GET_HISTORY') {
    var data = JSON.stringify({
    });
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:3333/history',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        store.dispatch({ type: 'PUT_HISTORY', value: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  else {
    next(action)
  }
};

export default dataMiddleware;