const draw = (req, res) => {
    let namesList = req.body.names;
    namesList = namesList.sort(() => Math.random() - 0.5);
    return res.status(200).json({
        response: namesList,
    });
}

const drawTeam = (req, res) => {
    let namesList = req.body.names;
    namesList = namesList.sort(() => Math.random() - 0.5);
    const fisrtTeam = namesList.slice(0, (namesList.length / 2));
    const secondTeam = namesList.slice(5, namesList.length);

    return res.status(200).json({
        response: {
            "Time 1": fisrtTeam,
            "Time 2": secondTeam
        }
    });
}

module.exports = {
    draw, drawTeam
};