import React, { } from 'react';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
import sendfile from './img/sendfile.png';
import './styles/Export.scss'
import './styles/Print.scss'
import { IoCloseSharp } from 'react-icons/io5';
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';

const DetailExport = ({ detailExport, filterStatut, dataFilteredForExcel, toggleExportOption, exportOption }) => {
    const onCheckboxChange = () => {
    }
    return (
        <>
            <div className="centerPerfectly">
                <h1 className="CR"><img src={sendfile} width="50" height="50" /> Rapport d'erreurs - Export 
                <div onClick={() => toggleExportOption(!exportOption)}><div className="croix" style={{ cursor: 'pointer' }}><IoCloseSharp size='1.5em' /></div></div> </h1>
                <div style={{ display: 'flex', border: '1px solid #dae3f3', width: '700px', margin: 'auto', backgroundColor: 'white' }}>
                    <div className="checkboxStatut">
                        <CheckboxGroup onChange={onCheckboxChange}>
                            <label className="aValider">A valider
                                <Checkbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('A valider')}
                                /></label>
                            <label className="verifCariste">A vérifier par le cariste
                                <Checkbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('A vérifier par le cariste')}
                                /></label>
                            <label className="modifWMS">A modifier dans le WMS
                                <Checkbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('A modifier dans le WMS')}
                                /></label>
                            <label className="nonVisite">Non Visité
                                <Checkbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('Non visité')}
                                /> </label>
                            <label className="valide">Validé
                                <Checkbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('Validé')}
                                /></label>
                            <label className="tous">Tous
                                <AllCheckerCheckbox
                                    style={{ float: "right" }}
                                    onChange={() => filterStatut('Tous')}
                                /> </label>
                        </CheckboxGroup>
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <CSVLink
                            style={{ textDecoration: 'none' }}
                            data={dataFilteredForExcel}
                            filename={`inventaire_du_${detailExport[0].Date_Debut.split('T')[0]}.csv`}
                            target="_blank">
                            <button className="buttonExport">
                                <img src={sendfile} width="50" height="50" style={{ cursor: 'pointer' }}></img>
                                Exporter
                            </button>
                        </CSVLink>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    detailExport: state.detailExport,
    dataFilteredForExcel: state.dataFilteredForExcel,
    exportOption: state.exportOption
});

const mapDispatchToProps = (dispatch) => ({
    filterStatut: (value) => {
        dispatch({ type: 'FILTER_STATUT', value: value })
    },
    toggleExportOption: (value) => {
        dispatch({ type: 'EXPORT', value: value })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailExport);
