import { Router } from "express";
const drawRouter = Router();

const drawController = require('../controllers/draw.controller'); 

drawRouter.post("/", drawController.draw); 
drawRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "Parfan gay"
    });
})
drawRouter.post("/team", drawController.drawTeam); 

export { drawRouter  };