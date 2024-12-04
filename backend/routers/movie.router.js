import express from 'express'
import { getMovieByCategory, getMovieDetalis, getMovieTrailers, getSimilarMovie, getTrendingmovie, } from '../controller/movie.controller.js'

const router = express.Router()

router.get('/trending',getTrendingmovie)
router.get('/:id/trailers',getMovieTrailers)
router.get('/:id/detalis',getMovieDetalis)
router.get('/:id/similar',getSimilarMovie)
router.get('/:category',getMovieByCategory)

export default router