$(document).ready(function () {
    var aceEditor = window.ace.edit("editor");

    aceEditor.setOptions({
        showPrintMargin: false, // hides the vertical limiting strip
        maxLines: 20,
        minLines: 20,
        fontSize: "100%" // ensures that the editor fits in the environment
    });
    // defines the style of the editor
    aceEditor.setTheme("ace/theme/twilight");
    // hides line numbers (widens the area occupied by error and warning messages)
    aceEditor.renderer.setOption("showLineNumbers", true);
    // ensures proper autocomplete, validation and highlighting of JavaScript code
    aceEditor.getSession().setMode("ace/mode/json");


    $('#selectedSchema').change(function (varValue) {
        var fileName = $('#selectedSchema').find(":selected").val();

        if (fileName) {
            $.ajax({
                url: '/schema/' + fileName
            }).done(function (content, status, response) {
                content = JSON.parse(content).replace('\n', '')
                //$('#editor').val(content)
                aceEditor.setValue(content, -1)
            }).fail(function (content, status, response) {
                alert('Error: ' + content)
            })

        } else {
            aceEditor.setValue('', -1)
        }

    })
})