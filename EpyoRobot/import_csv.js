// importer des données avec un csv
const fs = require("fs");
const fastcsv = require("fast-csv");
const mysql = require('mysql');

// connexion à la base de données
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "epyoepyo666",
  database: "epyo-robot"
});

// lien vers le csv
let stream = fs.createReadStream("data/csv_stock.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // supprimer la première ligne du csv (nom des colonnes)
    csvData.shift();

    // ouvrir la connexion
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        // requete SQL
        let query =
          "INSERT INTO stock (quantite, cab_constate, produit_id, inventaire_id, localisation_id, diag_id, statut_id, photo) VALUES ?";
          connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

stream.pipe(csvStream);