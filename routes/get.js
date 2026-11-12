import express from 'express'
import db from '../db.js'

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM notes WHERE is_archived = FALSE ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

route.get('/:note_id', async (req, res) => {
    try {
        const row = await db.query('SELECT * FROM notes WHERE id = ?', [req.params.note_id])
        if (row[0].length == 0) {
            return res.status(404).json({ error: "Note not found" })
        } 
        res.json(row[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

export default route;