infoGies.controller('contactController', function(){
    if($('body').hasClass('moveMe')){
        $('.menu__handle').trigger('click');
    }
        var callResizer = function callResizer(){
                if($(window).width() < 992){
                    $('.contactContainer').addClass('mobile');
                } else {
                     $('.contactContainer').removeClass('mobile');
                }
            return callResizer;
        }();
    $(window).on('resize', function(){
        callResizer();
    })
})