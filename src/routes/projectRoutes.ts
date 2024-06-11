import { Router } from "express";
import { body } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "./middleware/validation";

const router = Router();

router.post('/',
    body("projectName")
        .notEmpty().withMessage("El nombre es obligatorio"),
    body("clientName")
        .notEmpty().withMessage("El cliente es obligatorio"),
    body("description")
        .notEmpty().withMessage("La descripccion es obligatoria"),
        handleInputErrors,
        ProjectController.createProjects
    );
    router.get('/', ProjectController.getAllProjects);

export default router;