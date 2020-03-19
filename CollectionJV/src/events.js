const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // the routes are defined here
  router.put('/updateconsole/:id', (req, res, next) => {
    console.log(req);
    db.query(
      'UPDATE console set console_nom=?, console_constructeur=?, console_developpeur=?, console_dureedevie=?, console_unitesvendues=?, console_bits=?, console_meilleurevente=?, console_image=? where console_id=?',
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

    router.post('/addjeu', (req, res, next) => {
      console.log(req);
      db.query(
        'INSERT INTO jeux (jeu_nom, jeu_presencejaquette, jeu_fonctionnel, jeu_note, jeu_valeurestimee, jeu_developpeur, jeu_editeur, jeu_estmultijoueur, jeu_image, jeu_plateformes, jeu_genre) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [req.body.nom, req.body.jaquette, req.body.fonctionnel, req.body.note, req.body.valeur, req.body.developpeur, req.body.editeur, req.body.multijoueur, req.body.image, req.body.plateformes, req.body.genre],
        (error) => {
          if (error) {
            console.error(error);
            res.status(500).json({status: 'error'});
          } else {
            res.status(200).json({status: 'ok'});
          }
        }
      );
    });


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

  router.delete('/deleteconsole/:id', function (req, res, next) {
    db.query(
      'DELETE FROM console WHERE console_id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({ status: 'error' });
        } else {
          res.status(200).json({ status: 'ok' });
        }
      }
    );
  });

  router.get('/getconsole', (req, res, next) => {
    db.query(
      'select console_id, console_nom, console_constructeur, console_developpeur, console_dureedevie, console_unitesvendues, console_bits, console_meilleurevente, console_image from console',
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