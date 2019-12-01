$(document).ready(function () {

    function defineStructure(json, id) {
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

    $('#parseResult').click(function () {
        data = aceEditor['initialJson'].getValue()
        data = JSON.parse(data)

        $.ajax({
            url: '/parse',
            method: 'POST',
            data: data

        }).done(function (content, status, response) {
            aceEditor['resultJson'].setValue(content, -1)
            $('#modalResult').modal('show');

            defineStructure(data, '#initialStructure')
            defineStructure(JSON.parse(content), '#finalStructure')

        }).fail(function (content, status, response) {
            console.log('Error: ' + content)
            console.log('Status: ' + status)
            alert('Response: ' + response)
        })

        
    })

})