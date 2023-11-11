import { client } from "../Db/database.js";
import { addPersonDb, getPersonDb, deletePerson, getStudentsById } from "../Db/queries.js";

export const mainPage = (req, res) => {
    res.render('index')
}

export const getPerson = (req, res) => {
    client.query(getPersonDb, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

export const deletePersonDb = (req, res) => {
    const id = parseInt(req.params.id);

    client.query(getStudentsById, [id], (error, results) => {
        const noPersonFound = !results.rows.length;
        if (noPersonFound) {
            res.send('Person is not exists.')
        }

        client.query(deletePerson, [id], (error, results) => {
            if (error) throw error
            res.status(200).send('Person was successfully deleted.')
        })
    })
}

export const addPerson = (req, res) => {

    const { id, personname, surname } = req.body;

    client.query(
        addPersonDb, [id, personname, surname],
        (error, results) => {
            if (error) throw error;
            res.status(201).send('Person successfully added!')
        }
    )
}

