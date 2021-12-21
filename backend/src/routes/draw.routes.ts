import { Router } from "express";
const drawRouter = Router();

drawRouter.post("/", (req, res) => {

    let namesList = req.body.names;
    namesList = namesList.sort(() => Math.random() - 0.5);

    return res.status(200).json({
        response: namesList,
    });
});


export { drawRouter };