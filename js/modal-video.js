$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#video')[0].play();
    })
    $('#myModal').on('hide.bs.modal', function () {
        $('#video')[0].pause();
    })
});