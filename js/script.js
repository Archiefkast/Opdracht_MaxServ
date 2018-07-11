$(document).ready(function () {

    var duration = 800;

    $('#gallery__filter a').click(function () {

        $('#gallery__filter a').removeClass('selected');
        $(this).addClass('selected');

        if ($(this).attr('rel')) {

            $('.thumbnail').hide();

            var SelectedFilterCategory = $(this).attr('rel');
            $('.thumbnail[data-category=' + SelectedFilterCategory + ']').fadeIn(duration);
        }
        else {
            $('.thumbnail').fadeIn(duration);
        }
        return false;
    });
});