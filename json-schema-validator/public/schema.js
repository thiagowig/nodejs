$(document).ready(function() {
    $('#selectedSchema').change(function(varValue) {
        var fileName = $('#selectedSchema').find(":selected").val();

        $.ajax({
            url: '/schema/' + fileName
        }).done(function(content, status, response) {
            content = JSON.parse(content).replace('\n', '&#010;')
            $('#my-code-wrapper').html(content)
        }).fail(function(content, status, response) {
            alert('Error: ' + content)
        })
    })
})