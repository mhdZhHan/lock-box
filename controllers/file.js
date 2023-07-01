import bcrypt from 'bcrypt'
import FileModel from '../models/File.js'

async function uploadFile(req, res) {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname,
    }

    if(req.body.password) {
        fileData.password = await bcrypt.hash(req.body.password, 10)
    }

    const file = await FileModel.create(fileData)

    res.render('index', { fileLink: `${req.headers.origin}/file/${file.id}` })
}

async function handleDownload(req, res) {
    const file = await FileModel.findById(req.params.id)

    if(file.password) {
        if(!req.body.password) {
            res.render('password')
            return
        }

        if(!(await bcrypt.compare(req.body.password, file.password))) {
            res.render('password', { error: true })
            return
        }
    }

    file.downloadCount++
    await file.save()

    res.download(file.path, file.originalName)
}

export { uploadFile, handleDownload }