$(document).ready(function () {

    $('.menuItem').removeClass('active')
    $('#schemaMenu').addClass('active')

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
                if (content.success) {
                    $.notify(content.message, { autoHide: false, className: "success" });
                } else {
                    var errorMessage = "";
                    if (content.message instanceof Array) {
                        content.message.forEach(function (element) {
                            errorMessage += element.message + "\n"
                        });
                    } else {
                        errorMessage = content.message
                    }

                    $.notify("ERRO:\n" + errorMessage, { autoHide: false, className: "error" });
                }
            }).fail(function (content, status, response) {
                $.notify("ERRO:\n" + content, { autoHide: false, className: "error" });
            })

        } else {
            $.notify("ERRO:\nNome e schema são obrigatórios", { autoHide: false, className: "error" });
        }

    })

    $('#importJson').click(function () {
        var data = {
            jsonExample: $('#jsonExample').val()
        }

        if (data.jsonExample) {
            $.ajax({
                url: '/schema/import',
                method: 'POST',
                data: data
            }).done(function (content, status, response) {
                aceEditor.setValue(content.schema, -1)
                $('#closeModalButton').click()
            }).fail(function (content, status, response) {
                alert('Error: ' + content)
            })

        } else {
            $.notify("ERRO:\nÉ necessário informar um Json de exemplo", { autoHide: false, className: "error" });
        }

    })
})