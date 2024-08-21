import pool from "../database.js";

const noteController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await pool.query("select * from notes")
            res.json(rows)
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await pool.query("select * from notes where id = $1", [req.params.id])

            if (rows[0]) {
                return res.json(rows)
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    create: async(req, res) => {
        try {
            const { title, content } = req.body

            const sql = 'INSERT INTO notes(title, content) VALUES($1, $2) RETURNING *'

            const { rows } = await pool.query(sql, [title, content])

            res.json(rows[0])

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { title, content } = req.body

            const sql = 'UPDATE notes set title = $1, content = $2 where id = $3 RETURNING *'

            const { rows } = await pool.query(sql, [title, content, req.params.id])

            res.json( rows[0])

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM notes where id = $1 RETURNING *'

            const { rows } = await pool.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json(rows[0])
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    }
}

export default noteController;