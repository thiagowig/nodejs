
_ = require('lodash')

module.exports.parse = function (initialJson) {
    newSections = []

    initialJson.answers.forEach(answer => {

        if (newSections.length === 0) {
            newSections.push(createNewSection(answer))

        } else {
            lastSection = _.last(newSections)

            if (isConditionalAnswer(answer) || lastSection.id === answer.section_id) {
                lastSection.answers = lastSection.answers.concat(parseAnswer(answer))

            } else {
                newSections.push(createNewSection(answer))
            }
        }
    });

    return {
        "dynamic_questions": {
            "sections": newSections
        }
    }
}

function createNewSection(answer) {
    return {
        "id": answer.section_id,
        "name": answer.section_name,
        "answers": [parseAnswer(answer)]
    }
}

function parseAnswer(answer) {
    return {
        "question_name": answer.question_name,
        "question_type": answer.question_type,
        "value": getValue(answer)
    }
}

function getValue(answer) {
    if (answer.option) {
        return answer.option.name

    } else {
        return answer.value
    }
}

function isConditionalAnswer(answer) {
    splitChar = '/'
    conditionalAnswerLength = 2
    pathSplitted = answer.path.split(splitChar)

    return pathSplitted.length > conditionalAnswerLength
}
