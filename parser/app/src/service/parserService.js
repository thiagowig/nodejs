
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
            lastSection = _.last(newSections)
            firstQuestion = _.first(section.questions)

            if (isConditionalAnswer(firstQuestion) || lastSection.id === section.id) {
                lastSection.questions = lastSection.questions.concat(section.questions)

            } else {
                newSections.push(section)
            }
        }
    });

    initialJson.sections = newSections

    return initialJson
}
