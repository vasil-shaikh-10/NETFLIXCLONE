import express from 'express'
import { getSearchHistory, removeItemFromSearchHistory, searchMovie, searchPerson, searchTv } from '../controller/search.controller.js'


const router = express.Router()

// router.post("/signup",signup)
// router.post("/login",login)
// router.post("/logout",logout)

router.get("/person/:query",searchPerson)
router.get("/movie/:query",searchMovie)
router.get("/tv/:query",searchTv)

router.get("/history",getSearchHistory)
router.get("/history/:id",removeItemFromSearchHistory)

export default router