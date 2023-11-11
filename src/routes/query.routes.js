import { Router } from 'express'

import { addPerson, deletePersonDb, getPerson } from '../controllers/query.controller.js'

const router = Router()

router.delete('/:id', deletePersonDb)
router.get('/person', getPerson)
router.post('/', addPerson)

export default router