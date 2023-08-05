import {Router} from "express"
import * as dotenv from "dotenv"


// to make all env vars available for use in our code
dotenv.config()

const router = Router()


/**
 * Product
 */
router.get('/product', () => {})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/product/:id', () => {})



/**
 * Update
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})



/**
 * Update Point
 */
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})


export default router
