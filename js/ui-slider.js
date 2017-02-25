$( function() {
    $( "#slider-range" ).slider({
      range: true,
      step: 1,
      min: 0,
      max: 35000,
      values: [ 0, 15000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ]);
        $( "#amount-1" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-1" ).val($( "#slider-range" ).slider( "values", 1 ));
    
    $( "input#amount" ).change(function(){
        var value1=$("input#amount").val();
        var value2=$("input#amount-1").val();
        
            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amount").val(value1);
            }
            $("#slider-range").slider("values", 0, value1);
    });
    
     $( "input#amount-1" ).change(function(){
        var value1=$("input#amount").val();
        var value2=$("input#amount-1").val();
         
            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amount").val(value2);
            }
            $("#slider-range").slider("values", 1, value2);
    });
    
    jQuery("#amount, #amount-1").keypress(function(event) {
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
        
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
    });
    
});