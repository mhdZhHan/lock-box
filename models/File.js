import mongoose from "mongoose"

const File = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    originalName: {
        type: String,
        required: true,
    },
    password: String,
    downloadCount: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: { type: Date, expires: '2d', default: Date.now },
})

const FileModel = mongoose.model("File", File)

export default FileModel
