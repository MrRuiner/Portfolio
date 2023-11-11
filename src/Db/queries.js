export const addPersonDb = 'INSERT INTO person (id, personname, surname) VALUES ($1, $2, $3)';
export const getStudentsById = 'SELECT * FROM person WHERE id = $1'
export const getPersonDb = 'SELECT * FROM person';
export const deletePerson = 'DELETE FROM person WHERE id = $1';