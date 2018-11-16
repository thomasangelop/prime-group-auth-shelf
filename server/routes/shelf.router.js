const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
	const sqlText = 'SELECT * FROM item ORDER BY id DESC;';
	pool.query(sqlText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		})
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('newItem', req.body.newItem);
    const newItem = req.body.newItem;
    const sqlText = `INSERT INTO item (description, image_url, person_id) VALUES 
  ($1, $2, $3)`;
    pool.query(sqlText, [newItem.description, newItem.image_url, newItem.person_id])
        .then((response) => {
            console.log(`Added this item to the database:`, newItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}:`, error);
            res.sendStatus(500); // Good server always responds
        })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM item WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', rejectUnauthenticated, (req, res) => {
    console.log('req.user:', req.user);
    pool.query(`SELECT person.username, count(item.*)
        FROM "person" FULL OUTER JOIN item
        ON person.id = item.person_id
        GROUP BY person.id, person.username
        ORDER BY count desc`)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for shelf:', error);
            res.sendStatus(500);
        });
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;