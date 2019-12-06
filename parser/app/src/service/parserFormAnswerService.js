
_ = require('lodash')

module.exports.parse = function (initialJson) {
    newSections = []

    initialJson.sections.forEach(section => {

        if (newSections.length === 0) {
            newSections.push(createSection(section))

        } else {
            lastSection = _.last(newSections)
            firstQuestion = _.first(section.questions)

            if (isConditionalAnswer(firstQuestion) || lastSection.id === section.id) {
                newQuestions = createQuestions(section.questions)
                lastSection.questions = lastSection.questions.concat(newQuestions)

            } else {
                newSections.push(createSection(section))
            }
        }
    });

    return createForm(initialJson, newSections)
}

function createSection(section) {
    return{
        id: section.id,
        description: section.description ? section.description : null,
        name: section.name,
        questions: createQuestions(section.questions)
    }
}

function createQuestions(questions) {
    newQuestions = []

    questions.forEach(question => {
        newQuestions.push(createQuestion(question))
    })

    return newQuestions
}

function createQuestion(question) {
    return {
        id: question.id,
        conditional: question.conditional,
        description: question.description,
        order: question.order,
        question_type_id: question.question_type_id,
        question_validation: question.question_validation,
        required: question.required,
        path: question.path,
        options: question.options,
        answer: createAnswer(question.answer)
    }
}

function createAnswer(answer) {
    return {
        value: answer.value,
        option: answer.option
    }
}

function createForm(initialJson, sections) {
    return {
        id: initialJson.id,
        name: initialJson.name,
        description: initialJson.description,
        valid: true,
        sections: sections,
        general_questions: []
    }
}

function isConditionalAnswer(question) {
    splitChar = '/'
    conditionalAnswerLength = 2
    pathSplitted = question.path.split(splitChar)

    return pathSplitted.length > conditionalAnswerLength
}