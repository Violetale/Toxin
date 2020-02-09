export function dropdown(){
        if($('.dropdown').hasClass('dropdown_opened')){
        $('.dropdown .materials-icons').html('expand_less');
        $('.dropdown').removeClass('dropdown_opened');
        } else{
        $('.dropdown .materials-icons').html('expand_more');
}
}
