$(document).ready(function() {
    $('#filter a').click(function() {
        if($(this).attr('rel')) {
            var $SelectedFilterCategory = $(this).attr('rel');
            alert ($SelectedFilterCategory);
            $('.col-md-6').hide().filter($SelectedFilterCategory).show();
        } else {
            $('.col-md-6').show();
        }
        
        return false;
    });
});