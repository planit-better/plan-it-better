/*jshint esversion: 6 */

const express = require('express');
const contractors = express.Router();
const { Contractors } = require('../../models');

contractors.get('/', ( req, res) => {
  Contractors.all({
    inculde: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
  .catch(err => {
    res.send(err);
  });
});

// contractors.post('/', ( req, res ) => {
//   Contractors.create( req.body )
//     .then( contractors => {
//       res.json( topics );
//     })
//     .catch( err => {
//       res.json( err );
//     });
// });

// contractors.put('/:id', ( req, res ) => {

// })