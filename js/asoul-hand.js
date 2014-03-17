var mouseDownPosition = new Object();// store the relative mouse position

var targetAlphabet;// the target to move
var targetAlphabetIndex;

var alphabetPosition = new Array();


var MAX_ALPHABET_NUMBER = 26;
var DEFAULT_POSITION = {0 : {x : 172, y :330},
                        1 : {x : 530, y :512},
                        2 : {x : 448, y :496},
                        3 : {x : 429, y :313},
                        4 : {x : 339, y :223},
                        5 : {x : 490, y :313},
                        6 : {x : 544, y :310},
                        7 : {x : 589, y :310},
                        8 : {x : 624, y :192},
                        9 : {x : 635, y :310},
                        10 : {x : 681, y :306},
                        11 : {x : 742, y :301},
                        12 : {x : 613, y :531},
                        13 : {x : 571, y :521},
                        14 : {x : 672, y :185},
                        15 : {x : 719, y :180},
                        16 : {x : 178, y :201},
                        17 : {x : 417, y :230},
                        18 : {x : 304, y :319},
                        19 : {x : 476, y :219},
                        20 : {x : 578, y :199},
                        21 : {x : 490, y :503},
                        22 : {x : 260, y :217},
                        23 : {x : 365, y :476},
                        24 : {x : 526, y :210},
                        25 : {x : 162, y :447}};

var db;

$(document).ready(function() {
    initAlphabetPosition();
    $(".alphabet").mousedown( function(event) {
        targetAlphabet = $(this);
        targetAlphabet.addClass('alphabet-selected');
        targetAlphabetIndex = parseInt(this.id.substring(8));

        mouseDownPosition.x = event.clientX;
        mouseDownPosition.y = event.clientY;

    });
    $(".alphabet").mouseup( function(event) {
        targetAlphabet.removeClass('alphabet-selected');
        targetAlphabet = undefined;
        //saveAlphabetPosition();
        console.log("index = " + targetAlphabetIndex + "x = " + $(this).css("left") + ",y = " + $(this).css("top"));
    });
    $(".alphabet").mouseout( function(event) {// prevent some strange error
        //targetAlphabet = undefined;
    });
    $(window).mousemove( function(event) {
        if (targetAlphabet) {
            targetAlphabet.css({
                left: function(key, value) {
                    var tmp = mouseDownPosition.x;
                    mouseDownPosition.x = event.clientX;
                    return parseInt(value) + (event.clientX - tmp);
                },
                top: function(key, value) {
                    var tmp = mouseDownPosition.y;
                    mouseDownPosition.y = event.clientY;
                    return parseInt(value) + (event.clientY - tmp);
                }
            });
        }
    });
});

function isCollide() {
    // is collide to margin
    // is collide to other alphabet
}

function initAlphabetPosition() {
    for (var i = 0; i < MAX_ALPHABET_NUMBER; i++) {
        alphabetPosition[i] = new Object;
        alphabetPosition[i].x = DEFAULT_POSITION[i].x;
        alphabetPosition[i].y = DEFAULT_POSITION[i].y;
        $("#alphabet" + i).css({
            "left" : DEFAULT_POSITION[i].x,
            "top" : DEFAULT_POSITION[i].y
        });
    }
}

function saveAlphabetPosition(saveX, saveY) {
    alphabetPosition[targetAlphabetIndex].x = mouseDownPosition.x;
    alphabetPosition[targetAlphabetIndex].y = mouseDownPosition.y;
}