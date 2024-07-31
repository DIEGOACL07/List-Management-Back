import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    projectName: string
    clientName: string
    description: string
}

export const TaskSchema : Schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trimp: true,
        required: true
    },
})

const Task = mongoose.model<ITask>('Task', TaskSchema)
export default Task