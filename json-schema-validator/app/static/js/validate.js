$(document).ready(function () {

    $('.menuItem').removeClass('active')
    $('#validateMenu').addClass('active')

    $('#validateButton').click(function () {
        var data = {
            name: $('#selectedSchema').find(":selected").val(),
            json: $('#json').val()
        }

        if (data.name && data.json) {
            $.ajax({
                url: '/validate',
                method: 'POST',
                data: data
            }).done(function (content, status, response) {
                if (content.success) {
                    $.notify(content.message, { autoHide: false, className: "success" });
                } else {
                    var errorMessage = "";
                    if (content.message instanceof Array) {
                        content.message.forEach(function(element) {
                            errorMessage += element.stack + "\n"
                        });
                    } else {
                        errorMessage = content.message
                    }

                    $.notify("ERRO:\n" + errorMessage, { autoHide: false, className: "error" });
                }

            }).fail(function (content, status, response) {
                $.notify("ERRO:\n" + JSON.stringify(content), { autoHide: false, className: "error" });
            })

        } else {
            $.notify("ERRO:\nO schema e o Json são obrigatórios", { autoHide: false, className: "error" });
        }

    })
})