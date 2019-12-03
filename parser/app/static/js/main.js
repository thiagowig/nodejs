$(document).ready(function () {

    $('#parseResult').click(function () {
        data = aceEditor['initialJson'].getValue()
        data = JSON.parse(data)

        if ($('#viewRadio')[0].checked) {
            $.ajax({
                url: '/parseAnswer',
                method: 'POST',
                data: data

            }).done(function (content, status, response) {
                aceEditor['resultJson'].setValue(content, -1)
                $('#modalResult').modal('show');

                defineAnswerInitialStructure(data, '#initialStructure')
                defineAnswerFinallStructure(JSON.parse(content), '#finalStructure')

            }).fail(function (content, status, response) {
                handleErrors(content, status, response)
            })

        } else if ($('#editRadio')[0].checked) {
            $.ajax({
                url: '/parseFormAnswer',
                method: 'POST',
                data: data

            }).done(function (content, status, response) {
                aceEditor['resultJson'].setValue(content, -1)
                $('#modalResult').modal('show');

                defineFormAnswerStructure(data, '#initialStructure')
                defineFormAnswerStructure(JSON.parse(content), '#finalStructure')

            }).fail(function (content, status, response) {
                handleErrors(content, status, response)
            })
        }
    })

    function defineAnswerInitialStructure(json, id) {
        var structure = ""
        var lineBreak = "<br>"
        structure += lineBreak
        structure += "<h4>" + id + "</h4>"

        json.answers.forEach(answer => {
            structure += lineBreak
            structure += 'Answer: ' + answer.question_name
        });

        $(id).html(structure)
    }

    function defineAnswerFinallStructure(json, id) {
        var structure = ""
        var lineBreak = "<br>"
        structure += lineBreak
        structure += "<h4>" + id + "</h4>"

        json.dynamic_questions.sections.forEach(section => {
            structure += lineBreak
            structure += "<b>Section: " + section.name + "</b>"

            section.answers.forEach(answer => {
                structure += lineBreak
                structure += 'Answer: ' + answer.question_name
            })
        });

        $(id).html(structure)
    }

    function defineFormAnswerStructure(json, id) {
        var structure = ""
        var lineBreak = "<br>"
        structure += lineBreak
        structure += "<h4>" + id + "</h4>"

        json.sections.forEach(section => {
            structure += lineBreak
            structure += "<b>Section: " + section.name + "</b>"

            section.questions.forEach(question => {
                structure += lineBreak
                structure += 'Question: ' + question.description
            })
        });

        $(id).html(structure)
    }

    function handleErrors(content, status, response) {
        alert('Error: ' + content + '\nStatus: ' + status+ '\nResponse: ' + response)
    }

})