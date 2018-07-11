$(document).ready(function () {
    $('#gallery__filter a').click(function () {
        if ($(this).attr('rel')) {

            $('.thumbnail').show();

            var SelectedFilterCategory = $(this).attr('rel');
            $('.thumbnail[data-category!=' + SelectedFilterCategory + ']').hide();
        }
        else {
            $('.thumbnail').show(); 
        }
        return false;
    });
});