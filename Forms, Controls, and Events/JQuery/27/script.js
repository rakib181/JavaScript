function myClickHandler() {
    $('body').append('<p>wow</p>');
}

$("#myButton").on("click", myClickHandler);

$("#myButton").off("click", myClickHandler);
