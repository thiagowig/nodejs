$(document).ready(function () {

    $('#saveButton').click(function () {
        var data = {
            name: $('#schemaName').val(),
            schema: aceEditor.getValue()
        }

        if (data.name && data.schema) {
            $.ajax({
                url: '/schema/save',
                method: 'POST',
                data: data
            }).done(function (content, status, response) {
                    content = JSON.parse(content).replace('\n', '')
                    //$('#editor').val(content)
                    aceEditor.setValue(content, -1)
                }).fail(function (content, status, response) {
                    alert('Error: ' + content)
                })

        } else {
            alert('Deu ruim')
        }

    })
})