//Making the Grid

function createGrid() {
    for(i=0; i<256; i++) {
        $('<div class="cell"></div>').appendTo('.grid');
    }

}

createGrid();

//Making the Palette


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
    "navy",
  ]

for (let i = 0; i < PALETTE.length; i++) { 
    let button = $('<button>'+ PALETTE[i] + '</button>');
    button.css("background-color",PALETTE[i]);
    button.css("color", PALETTE[i]);
    button.css("font-size", "1px")
    button.appendTo('.palette'); 
}
};

makePalette();



function onPaletteClick() {
    {   $("button").removeClass("active");
        $(this).addClass("active");
    }
};

$('.palette button').first().addClass('active');


$('.palette button').click(onPaletteClick);

//Clear Button

  function onClearClick(){
    {
      $('.cell').css('background-color', '');
      $('.palette button').first().addClass('active');
    }
  };

$('.clear').click(onClearClick)


//Fill Button

  function onFillAllClick(){
    let color = $('.palette button.active').css('background-color');
    $('.cell').css('background-color', color);
    
  };

  $('.fill').click(onFillAllClick)
 

  //Empty button

  function onFillEmptyClick (){
    let elements = $('.cell')

  for (let i = 0; i < elements.length; i++) {
   let nextElement = $( elements[i] );

   if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
    let color = $('.palette button.active').css('background-color');
    $(nextElement).css('background-color', color);
    
    
  } 
  }
 };

  $('.fill-empty').click(onFillEmptyClick)
 
  //mousedown attempt

 let isMouseDown = false;

 $(".grid > .cell").mousedown(onMouseDown);


 $(".grid > .cell").mouseenter(function() {
    let color = $('.palette button.active').css('background-color');
      if (isMouseDown)
      $(this).css('background-color', color );
      
    });
    
    $(".grid > .cell").mouseup(function() {
    isMouseDown = false;
   });
  
function onMouseDown() {
	
	isMouseDown = true;
	let color = $(".palette button.active").css("background-color");
	let thisSquare = $(this).css("background-color");
	if (color === thisSquare) {
		$(this).css("background-color", "");
	} else {
		$(this).css("background-color", color);
	}
}