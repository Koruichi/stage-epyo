import React, { } from 'react';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
import sendfile from './img/sendfile.png';

import './styles/Template.scss'
import { IoCloseSharp } from 'react-icons/io5';
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';
//import './treeView/Data.js'

const Template = ({ templateOption, toggleTemplateOption, detailExport, filterStatut, dataFilteredForExcel, toggleExportOption, exportOption }) => {

  return (
    <>

      <div className="popUpTemplate">
        <h1 className="titreTemplate"> Template <div onClick={() => toggleTemplateOption(!templateOption)}><div className="croix" style={{ cursor: 'pointer' }}><IoCloseSharp size='1.5em' /></div></div></h1>
        <div style={{ display: 'flex', border: '1px solid #dae3f3', width: '900px', height: '900px', margin: 'auto', backgroundColor: 'white' }}>
        <ul>
        
          <div onClick={() => console.log("coucou")} className="containerA"></div>
          <div className="containerB"></div>
          <div className="containerC"></div>
          <div className="containerD"></div>
          <div className="containerE"></div>
         
          <button className="annuler" type="submit">Annuler</button>
          <button className="selectionner" type="submit">Selectionner</button>
          

          </ul>

        </div>
      </div>
  
            
    </>
  );
};




const mapStateToProps = (state) => ({
  templateOption: state.templateOption
});

const mapDispatchToProps = (dispatch) => ({

  toggleTemplateOption: (value) => {
    dispatch({ type: 'TEMPLATE', value: value })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
