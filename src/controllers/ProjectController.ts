import type { Request, Response } from "express";
import Project from "../models/Project";

export class ProjectController {

    static createProjects = async (req: Request, res: Response) => {
        const project = new Project(req.body);
        try {
            await project.save();
            res.send("Creado");
        } catch (error) {
            console.log(error);
        }
    }

    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find({});
            res.json(projects);
        } catch (error) {
            console.log(error);
        }
        res.send("Todos");
    }

    static getProjectsById = async (req: Request, res: Response) => {
        const id = req.params;
        try {
            const projects = await Project.findById(id)
            if (!projects) {
                const error = new Error("Proyecto no encontrado")
                return res.status(404).json({error: error.message})
            }
            res.json(projects);
        } catch (error) {
            console.log(error);
        }
        res.send("Todos");
    }
    
    static updateProject = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            const project = await Project.findByIdAndUpdate(id, req.body)
            
            if (!project) {
                const error = new Error("Proyecto no encontrado")
                return res.status(404).json({error: error.message})
            }
            
            await project?.save()
            res.send("Proyecto Actualizado")
        } catch (error) {
            console.log(error);
        }
    }

    static deleteProject = async (req: Request, res: Response) => {
        const {id} = req.params;
        try {
            const project = await Project.findByIdAndDelete(id)
            res.send("Proyecto Eliminado")
        } catch (error) {
            console.log(error);
        }
    }
    
}