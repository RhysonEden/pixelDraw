function onGridClick() {
    let color = $('.palette button.active').css('background-color');
    let thisSquare = $(this).css('background-color')

    if (color === thisSquare) {
        $(this).css('background-color', ''); }
        else {
            $(this).css('background-color', color);
        }
    };

$(".grid > .cell").click(onGridClick);


function onGridClick() {
    let color = $('.palette button.active').css('background-color');
    $(this).css('background-color', color);
    
};