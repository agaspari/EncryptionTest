const svgns = "http://www.w3.org/2000/svg";
const BOX_SIZE = 50;
const ROW_LENGTH = 10;
const dictionary = {
    'A': [1, 0, 0],
    'B': [2, 0, 0],
    'C': [3, 0, 0],
    'D': [0, 1, 0],
    'E': [1, 1, 0],
    'F': [2, 1, 0],
    'G': [3, 1, 0],
    'H': [0, 2, 0],
    'I': [1, 2, 0],
    'J': [2, 2, 0],
    'K': [3, 2, 0],
    'L': [0, 3, 0],
    'M': [1, 3, 0],
    'N': [2, 3, 0],
    'O': [3, 3, 0],
    'P': [0, 0, 1],
    'Q': [1, 0, 1],
    'R': [2, 0, 1],
    'S': [3, 0, 1],
    'T': [0, 1, 1],
    'U': [1, 1, 1],
    'V': [2, 1, 1],
    'W': [3, 1, 1],
    'X': [0, 2, 1],
    'Y': [1, 2, 1],
    'Z': [2, 2, 1],    
    'a': [3, 2, 1],
    'b': [0, 3, 1],
    'c': [1, 3, 1],
    'd': [2, 3, 1],
    'e': [3, 3, 1],
    'f': [0, 0, 2],
    'g': [1, 0, 2],
    'h': [2, 0, 2],
    'i': [3, 0, 2],
    'j': [0, 1, 2],
    'k': [1, 1, 2],
    'l': [2, 1, 2],
    'm': [3, 1, 2],
    'n': [0, 2, 2],
    'o': [1, 2, 2],
    'p': [2, 2, 2],
    'q': [3, 2, 2],
    'r': [0, 3, 2],
    's': [1, 3, 2],
    't': [2, 3, 2],
    'u': [3, 3, 2],
    'v': [0, 0, 3],
    'w': [1, 0, 3],
    'x': [2, 0, 3],
    'y': [3, 0, 3],
    'z': [0, 1, 3],
    '-': [3, 3, 3],
};

function drawWord() {
    document.getElementById('main').innerHTML = "";
    let word = document.getElementById("word").value;
    word = word.replaceAll(" ", "-");
    for (let i = 0; i < word.length; i++) {
        drawLetter(i%ROW_LENGTH, Math.floor(i/ROW_LENGTH), word.charAt(i));
    }
}

function drawLetter(x, y, letter) {
    const arr = dictionary[letter];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) continue;

        if (arr[i] == 1) {
            append(drawLine(x, y*3, i, "right"));
        } else if (arr[i] == 2) {
            append(drawLine(x, y*3, i, "left"));
        } else {
            append(drawLine(x, y*3, i, "right"));
            append(drawLine(x, y*3, i, "left"));
        }
    }
}

function append(item) {
    document.getElementById('main').appendChild(item);
}

function drawLine(x, y, z, direction) {
    const line = document.createElementNS(svgns, 'line');
    if (direction == "right") {
        line.setAttributeNS(null, 'x1', (x*BOX_SIZE));
        line.setAttributeNS(null, 'y1', (y*BOX_SIZE) + (BOX_SIZE*z));
        line.setAttributeNS(null, 'x2', (x*BOX_SIZE) + BOX_SIZE);
        line.setAttributeNS(null, 'y2', (y*BOX_SIZE) + BOX_SIZE + (BOX_SIZE*z));
    } else if (direction == "left") {
        line.setAttributeNS(null, 'x1', (x*BOX_SIZE) + BOX_SIZE);
        line.setAttributeNS(null, 'y1', (y*BOX_SIZE) + (BOX_SIZE*z));
        line.setAttributeNS(null, 'x2', (x*BOX_SIZE));
        line.setAttributeNS(null, 'y2', (y*BOX_SIZE) + BOX_SIZE + (BOX_SIZE*z));
    }

    line.setAttributeNS(null, 'stroke', 'black');
    line.setAttributeNS(null, 'stroke-opacity', '.8');
    line.setAttributeNS(null, 'stroke-width', 2);
    return line;
}

function createRectangle(x, y) {
    const rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', x*BOX_SIZE);
    rect.setAttributeNS(null, 'y', y*BOX_SIZE);
    rect.setAttributeNS(null, 'height', BOX_SIZE);
    rect.setAttributeNS(null, 'width', BOX_SIZE);
    rect.setAttributeNS(null, 'stroke', 'black');
    rect.setAttributeNS(null, 'fill', 'white');
    rect.setAttributeNS(null, 'stroke-opacity', '.2');
    return rect;
}