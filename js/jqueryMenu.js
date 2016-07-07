
$(document).ready(function(){
   //manipulations with img
    var $side_menu = $('.side_menu');
    $side_menu.find('li:eq(0)').click(function() {
        $('img').fadeToggle(1000);
    });
    $side_menu.find('li:eq(1)').click(function() {
        $('img').slideToggle()(1000);
    });

});


