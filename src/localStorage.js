const getSurveys = () => {
    const getSurvey = localStorage.getItem("surveys")

    if (getSurvey !== null) {
        return JSON.parse(getSurvey)
    } else {
        console.log("sheet")
    }
}


const storeSurvey = (surveys) => localStorage.setItem("surveys", JSON.stringify(surveys))


export {
    getSurveys,
    storeSurvey
}