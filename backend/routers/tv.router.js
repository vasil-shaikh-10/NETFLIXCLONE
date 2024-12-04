import express from 'express'
import { getSimilarTv, getTrendingTv, gettvByCategory, getTvDetalis, getTvTrailers } from '../controller/tv.controller.js'

const router = express.Router()

router.get('/trending',getTrendingTv)
router.get('/:id/trailers',getTvTrailers)
router.get('/:id/detalis',getTvDetalis)
router.get('/:id/similar',getSimilarTv)
router.get('/:category',gettvByCategory)

export default router