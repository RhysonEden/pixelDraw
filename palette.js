function makePalette() {

    let PALETTE = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "peachpuff",
        "white",
        "black",
        "deeppink",
        "antiquewhite",
        "gray",
        "sienna",
        "lime",
        "orangered",
      ]
    
    for (let i = 0; i < PALETTE.length; i++) { 
        let button = $('<button>'+ PALETTE[i] + '</button>');
        button.css("background-color",PALETTE[i]);
        button.css("color", PALETTE[i]);
        button.appendTo('.palette'); 
    
    
    
    
    
    $(".btn_add_input_prod_grp").click(function(){
    
       let add_input_grp = $("input[name$='input_add_prod_grp']").val();
    
    
      PALETTE.push(add_input_grp);
    //     let add_input_grp = $("input[name$='input_add_prod_grp']").val("");
    
      console.log(PALETTE[i]);
      
    }); 
    }
    };
    
    makePalette();