$(function () {

    $("#newText").keyup(function () {
        let empty = false;

        if ($('#newText').val() == '') {
            empty = true;
        }


        if (empty) {
            $('#submitButton').attr('disabled', 'disabled');
        } else {
            $('#submitButton').removeAttr('disabled');
        }
    });
})
