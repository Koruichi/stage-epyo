const initialState = {
  identifiant: '',
  email: '',
  password: '',
  role: 'User',
  isUserConnected: false,
  isUserActif: false,
  error: '',
  whichInventoryIsSelected: '',
  isUserRegisteredWell: false,
  data: [],
  detailData: [],
  currentProduct: {},
  dataStatus: '',
  detailWMS: [],
  isItFullscreen: false,
  whatFilteredis: '',
  detailExport: [],
  dataFilteredForExcel: [],
  tableaudeFiltre: [],
  exportOption: false,
  wmsDetails: false,
  listUsers: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      // on modifie la valeur du "whatToChange, qui peut être identifiant ou password en fonction de l'input sélectionnée actuellement par l'user" et on lui applique la valeur stockée dans "action.value"
      return {
        ...oldState,
        [[action.whatToChange]]: action.value,
      };

    case 'CHECK_IF_USER_ID_IS_GOOD':
      return {
        ...oldState,
        isUserConnected: true,
      };

    case 'FAIL_TO_CONNECT':
      return {
        ...oldState,
        error: action.errorValue
      }

    case 'SHOW_THIS_INVENTORY':
      return {
        ...oldState,
        whichInventoryIsSelected: action.value
      }

    case 'CHECK_IF_USER_ALREADY_EXISTS':
      return {
        ...oldState,
        error: '',
        isUserRegisteredWell: true
      }

    case 'FAIL_TO_REGISTER': {
      return {
        ...oldState,
        isUserRegisteredWell: false,
        error: 'Ce compte existe déjà'
      }
    }

    case 'PUT_DATA_FILTERED': {
      return {
        ...oldState,
        detailData: action.value,
        whatFilteredis: action.whatfilteredis
      }
    }

    case 'PUT_INVENTORIES_INTO_STATE': {
      return {
        ...oldState,
        data: action.data,
        dataStatus: action.dataStatus
      }
    }

    case 'PUT_DETAIL': {
      return {
        ...oldState,
        detailData: action.value
      }
    }

    case 'SHOW_THIS_PRODUCT': {
      return {
        ...oldState,
        currentProduct: action.value
      }
    }

    case 'PUT_DETAIL_WMS': {
      return {
        ...oldState,
        detailWMS: action.value
      }
    }

    case 'CHANGE_FULLSCREEN': {
      return {
        ...oldState,
        isItFullscreen: true
      }
    }

    case 'REMOTE_FULLSCREEN': {
      return {
        ...oldState,
        isItFullscreen: false
      }
    }

    case 'FILTERED_FOR_EXCEL': {
      return {
        ...oldState,
        dataFilteredForExcel: action.value
      }
    }

    case 'PUT_EXPORT': {
      return {
        ...oldState,
        detailExport: action.value
      }
    }

    case 'EXPORT': {
      return {
        ...oldState,
        exportOption: action.value
      }
    }

    case 'PUT_USERS': {
      return {
        ...oldState,
        listUsers: action.value
      }
    }

    case 'PUT_USERS_FILTERED': {
      return {
        ...oldState,
        listUsers: action.value,
        whatFilteredis: action.whatfilteredis
      }
    }

    case 'WMS_DETAILS': {
      return {
        ...oldState,
        wmsDetails: action.value
      }
    }

    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;