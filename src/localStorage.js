const getSurveys = () => {
    const getSurvey = localStorage.getItem("surveys")
    return getSurvey !== null ? JSON.parse(getSurvey) : [];
}
const storeSurvey = (surveys) => localStorage.setItem("surveys", JSON.stringify(surveys))

export {
    getSurveys,
    storeSurvey
}