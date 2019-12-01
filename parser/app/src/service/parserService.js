
_ = require('lodash')

function isConditionalAnswer(question) {
    splitChar = '/'
    conditionalAnswerLength = 2
    pathSplitted = question.path.split(splitChar)

    return pathSplitted.length > conditionalAnswerLength
}

module.exports.parse = function (initialJson) {
    new_sections = []

    initialJson.sections.forEach(section => {
        newQuestions = section.questions
        newFirstQuestion = _.first(newQuestions)

        saved_section = new_sections.filter(element => {
            return element.id === section.id
        })

        if (!saved_section[0] && !isConditionalAnswer(newFirstQuestion)) {
            new_sections.push(section)

        } else if (isConditionalAnswer(newFirstQuestion)) {
            lastSection = _.last(new_sections)
            lastSection.questions = new_sections[0].questions.concat(newQuestions)

        } else if (saved_section[0]) {
            saved_section[0].questions = saved_section[0].questions.concat(newQuestions)

        } else {
            throw new Error('Unexpected flow')
        }
    });

    initialJson.sections = new_sections

    new_sections.forEach(section => {
        console.log('\nSECTION: ' + section.name)

        section.questions.forEach(question => {
            console.log('QUESTION: ' + question.description)
        })
    })

    return initialJson
}
