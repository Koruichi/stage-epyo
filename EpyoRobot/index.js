'use strict';

const express = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "epyoepyo666",
  database: "epyo-robot"
});

// Constants
const PORT = 3333;
const HOST = '0.0.0.0';
var crypto = require('crypto');
const { Console } = require('console');
const { types } = require('util');
// App
const app = express();
app.use(express.json())
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
  // setter
  localStorage.setItem('myData', data);

  // getter
  localStorage.getItem('myData');

  // removelocalStorage.removeItem('myData');

  // remove all
  localStorage.clear();
});

app.get('/inventories', (req, res) => {
  con.query('SELECT * FROM `inventaire`  JOIN stock on inventaire.id_inventaire = stock.inventaire_id ORDER BY date_debut DESC ', function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.post('/login', (req, res) => {
  let code = crypto.createHash('sha256').update(req.body.Password).digest('hex');
  console.log
  con.query(`SELECT * FROM user WHERE (username = ?  AND password = ?) OR (email = ? AND password  = ?);`, [req.body.Username, code, req.body.Username, code], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.post('/register', (req, res) => {
  console.log(req.body)
  let code = crypto.createHash('sha256').update(req.body.Password).digest('hex');
  con.query('SELECT * FROM `user` WHERE `username` = ? OR `email` = ?;', [req.body.Username, req.body.Email], function (err, result, fields) {
    if (err) throw err;
    if (result.length === 0) {
      con.query('INSERT INTO `user` (username, password, email,role) VALUES (?, ?, ?, ?);', [req.body.Username, code, req.body.Email, req.body.Role], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      })
    } else {
      res.send('Utilisateur déjà existant')
    }
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.get('/users', (req, res) => {
  con.query('SELECT email, username, role, statut FROM `user`', function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

// Creation du get afin de faire tomber les infos de la BDD sur un tableau
// en l'occurence la sur le tableau "Historique des inventaires"
//fait par david ( aide de maxime)


app.get('/history', (req, res) => {
  con.query('SELECT `date`, `nom_inventaire`, `types`, `template`, `detail`, `recurrence`, `statut_ip` FROM `historique_inventaire`', function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.get('/inventories/:id', (req, res) => {
  con.query('SELECT * FROM inventaire JOIN stock ON inventaire.id_inventaire = stock.inventaire_id JOIN produit ON produit.id_produit = stock.produit_id JOIN localisation on localisation.id_localisation = stock.localisation_id JOIN diagnostique on diagnostique.id_diag = stock.diag_id JOIN statut on statut.id_statut = stock.statut_id WHERE id_inventaire = ?;', [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.get('/export/:id', (req, res) => {
  let detailExport;
  con.query('SELECT * FROM inventaire JOIN stock ON inventaire.id_inventaire = stock.inventaire_id JOIN produit ON produit.id_produit = stock.produit_id JOIN localisation on localisation.id_localisation = stock.localisation_id JOIN diagnostique on diagnostique.id_diag = stock.diag_id JOIN statut on statut.id_statut = stock.statut_id JOIN wms_stock ON wms_stock.cab_wms = produit.id_produit JOIN wms_type ON wms_type.id_wms_type = wms_stock.type_wms JOIN wms_localisation on wms_localisation.wms_id_localisation = wms_stock.emplacement_id WHERE id_inventaire = ?;', [req.params.id], function (err, result, fields) {
    if (err) throw err;
    detailExport = result.map((e) => {
      return {
        Date_Debut: e.date_debut,
        Date_Fin: e.date_fin,
        Quantité: e.quantite,
        Cab_Constaté: e.cab_constate,
        Référence: e.reference,
        Désignation: e.designation,
        Cab: e.cab,
        PCB: e.PCB,
        SPCB: e.SPCB,
        Zones: e.zones,
        Cellules: e.cellules,
        Allées: e.allees,
        Colonnes: e.colonnes,
        Niveaux: e.niveaux,
        Emplacements: e.emplacements,
        Diagnostique: e.diagnostique,
        Statut: e.statut,
        Date_WMS_Stock: e.date_wms_stock,
        Quantité_Stock_WMS: e.stock_wms,
        WMS_Type: e.wms_type,
        WMS_Zones: e.wms_zones,
        WMS_Cellules: e.wms_cellules,
        WMS_Allées: e.wms_allees,
        WMS_Colonnes: e.wms_colonnes,
        WMS_Niveaux: e.wms_niveaux,
        WMS_Emplacements: e.wms_emplacements       
      }
    }),
      res.send(detailExport);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.get('/wmsstock/:id', (req, res) => {
  con.query('SELECT * FROM `wms_stock` JOIN produit ON wms_stock.cab_wms = produit.id_produit JOIN wms_type ON wms_type.id_wms_type = wms_stock.type_wms JOIN wms_localisation on wms_localisation.wms_id_localisation = wms_stock.emplacement_id WHERE id_produit = ? ORDER BY date_wms_stock;', [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.post('/statut/:id', (req, res) => {
  const id = req.params.id
  const value = req.body.data
  con.query('UPDATE stock SET statut_id = ? WHERE produit_id = ? AND inventaire_id = ?;', [value, id, req.body.idInventaire], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.post('/user/:email', (req, res) => {
  const email = req.params.email
  const value = req.body
  con.query('UPDATE user SET role = ?, statut = ?  WHERE email = ?;', [value.role, value.statut, email], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);