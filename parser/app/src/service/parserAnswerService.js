
_ = require('lodash')

module.exports.parse = function (initialJson) {
    newSections = []

    initialJson.answers.forEach(answer => {

        if (newSections.length === 0) {
            newSections.push(createNewSection(answer))

        } else {
            lastSection = _.last(newSections)

            if (isConditionalAnswer(answer) || lastSection.id === answer.section_id) {
                lastSection.answers = lastSection.answers.concat(answer)

            } else {
                newSections.push(createNewSection(answer))
            }
        }
    });

    return {
        "sections": newSections
    }
}

function createNewSection(answer) {
    return {
        "id": answer.section_id,
        "name": answer.section_name,
        "answers": [answer]
    }
}

function isConditionalAnswer(answer) {
    splitChar = '/'
    conditionalAnswerLength = 2
    pathSplitted = answer.path.split(splitChar)

    return pathSplitted.length > conditionalAnswerLength
}
