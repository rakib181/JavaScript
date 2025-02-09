let elem = $(document).on('click', 'button', (event) => {
    $(".box").append('<h1>This is new heading</h1>').css('color', 'red');
});