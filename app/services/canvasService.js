infoGies.service('commonCanvas', function(){
        var myCanvas1 = $('.commonCanvas');
        var myCanvas = myCanvas1[0].getContext('2d');
    this.myFunc = function(x){
        var grd = myCanvas.createLinearGradient(0,0,170,0);
        ww = $('.commonCanvas').width();
        wh = $('.commonCanvas').height();
        grd.addColorStop(0,'#C0B283');
        grd.addColorStop(1,'#373737');
        myCanvas.fillStyle = grd;
        myCanvas.fillRect(0,0,ww,wh)
    }
})