import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
    projectName: string
    clientName: string
    description: string
}

const ProjectSchema: Schema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    descriptionName: {
        type: String,
        required: true,
        trim: true
    },
})

const Project = mongoose.model<IProject>('Project', ProjectSchema)
export default Project
