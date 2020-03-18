const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // the routes are defined here
  router.post('/addconsole', (req, res, next) => {
    console.log(req);
    db.query(
      'INSERT INTO console (console_nom, console_constructeur, console_developpeur, console_dureedevie, console_unitesvendues, console_bits, console_meilleurevente, console_image) VALUES (?,?,?,?,?,?,?,?)',
      [req.body.nom, req.body.constructeur, req.body.developpeur, req.body.dureeDeVie, req.body.nbVendues, req.body.bits, req.body.meilleureVente, req.body.image],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json({ status: 'ok' });
        }
      }
    );
  });

  router.get('/getconsole', (req, res, next) => {
    db.query(
      'select console_nom, console_constructeur, console_developpeur, console_dureedevie, console_unitesvendues, console_bits, console_meilleurevente, console_image from console',
      [req.body],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;