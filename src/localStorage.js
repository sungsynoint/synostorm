const storeSurvey = (surveys) => localStorage.setItem("surveys", JSON.stringify(surveys))

const getSurveys = () => {
    const getSurvey = localStorage.getItem("surveys")
    return getSurvey !== null ? JSON.parse(getSurvey) : [];
}

export {
    getSurveys,
    storeSurvey
}