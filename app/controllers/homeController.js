infoGies.controller('homeController', function(){
    if($('body').hasClass('moveMe')){
        $('.menu__handle').trigger('click');
    }
})