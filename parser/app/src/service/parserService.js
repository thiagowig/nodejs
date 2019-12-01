
_ = require('lodash')

function isConditionalAnswer(question) {
    splitChar = '/'
    conditionalAnswerLength = 2
    pathSplitted = question.path.split(splitChar)

    return pathSplitted.length > conditionalAnswerLength
}

module.exports.parse = function (initialJson) {
    newSections = []

    initialJson.sections.forEach(section => {

        if (newSections.length === 0) {
            newSections.push(section)

        } else {
            newQuestions = section.questions
            newFirstQuestion = _.first(newQuestions)

            lastSection = _.last(newSections)

            if (isConditionalAnswer(newFirstQuestion) || lastSection.id === section.id) {
                lastSection.questions = lastSection.questions.concat(newQuestions)

            } else {
                newSections.push(section)
            }
        }
    });

    initialJson.sections = newSections

    return initialJson
}
