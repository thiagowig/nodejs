$(document).ready(function () {

    $('#validateButton').click(function () {
        var data = {
            name: $('#selectedSchema').find(":selected").val(),
            json: $('#json').val()
        }

        if (data.name && data.json) {
            $.ajax({
                url: '/schema/validate',
                method: 'POST',
                data: data
            }).done(function (content, status, response) {
                if (content.success) {
                    $(".alert").removeClass('fade')
                    $(".alert").addClass('show')
                    $("#alertText").html(content.result)
                } else {
                    alert('Error: ' + content.message)
                }

            }).fail(function (content, status, response) {                                           
                alert('Error: ' + JSON.stringify(content))
            })

        } else {
            alert('Deu ruim')
        }

    })
})