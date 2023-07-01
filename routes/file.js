import express from 'express'
import multer from 'multer'

import { uploadFile, handleDownload } from '../controllers/file.js'

const router = express.Router()
const upload = multer({ dest: "uploads" })


router.post('/upload', upload.single("file"), uploadFile)

router.route('/:id').get(handleDownload).post(handleDownload)

export default router
