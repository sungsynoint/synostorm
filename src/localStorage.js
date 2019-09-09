const storeSurvey = (surveys) => localStorage.setItem("surveys", JSON.stringify(surveys))

const getSurveys = () => {
    const getSurvey = localStorage.getItem("surveys")
    return getSurvey !== null ? JSON.parse(getSurvey) : [];
}

const storeQuestion = (question) => localStorage.setItem("questions", JSON.stringify(question))

const getQuestions = () => {
    const getQuestion = JSON.parse(localStorage.getItem("questions"))
    return getQuestion !== null ? getQuestion : []
}


export {
    getSurveys,
    storeSurvey,
    storeQuestion,
    getQuestions
}