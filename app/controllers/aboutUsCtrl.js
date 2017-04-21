infoGies.controller('aboutUsCtrl', function($scope,commonCanvas){
    if($('body').hasClass('moveMe')){
        $('.menu__handle').trigger('click');
    } else{
        $scope.canv = commonCanvas.myFunc();
    }
    
})