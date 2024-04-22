var arr = [];
window.addEventListener('load', function () {
    document.getElementById('sParagraph').setAttribute('contenteditable', 'true');
    document.getElementById('dParagraph1').setAttribute('contenteditable', 'true');
    document.getElementById('dParagraph2').setAttribute('contenteditable', 'true');
    document.getElementById('pParagraph').setAttribute('contenteditable', 'true');
});

const sParagraph = document.querySelector('#sParagraph');
sParagraph.addEventListener('paste', (e) => {
    e.preventDefault();
    document.execCommand('inserttext', false, prompt('Paste something.'));
});
const dParagraph1 = document.querySelector('#dParagraph1');
dParagraph1.addEventListener('paste', (e) => {
    e.preventDefault();
    document.execCommand('inserttext', false, prompt('Paste something.'));
});
const dParagraph2 = document.querySelector('#dParagraph2');
dParagraph2.addEventListener('paste', (e) => {
    e.preventDefault();
    document.execCommand('inserttext', false, prompt('Paste something.'));
});
// const pParagraph = document.querySelector('#pParagraph');
// pParagraph.addEventListener('paste', (e) => {
//     e.preventDefault();
//     document.execCommand('inserttext', false, prompt('Paste something.'));
// });

function onPaste_(e) {
    var text = e.clipboardData.getData('text/plain');
    var res = document.execCommand('insertText', false, text);
    e.preventDefault();
}

document.addEventListener('paste', onPaste_);


function format(command, value) {
    document.execCommand(command, false, value);
}

function changeSizeSingle() {
    var mysize = document.getElementById("fontSizeSingle").value;
    document.execCommand('formatBlock', false, mysize);
}

function changeSizeDouble1() {
    var mysize = document.getElementById("fontSizeDouble1").value;
    document.execCommand('formatBlock', false, mysize);
}

function changeSizeDouble2() {
    var mysize = document.getElementById("fontSizeDouble2").value;
    document.execCommand('formatBlock', false, mysize);
}

function changeSizeParagraph() {
    var mysize = document.getElementById("fontSizeParagraph").value;
    document.execCommand('formatBlock', false, mysize);
}

//Single
function setUrlSingle() {
    var startOffset = arr[0]['startOffset']; // Start at third node: 101 E. Main St.
    var endOffset = arr[0]['endOffset']; // End at fifth node: Dodge City, KS
    var range = document.createRange();
    range.setStart(arr[0]['startNode'], startOffset);
    range.setEnd(arr[0]['endNode'], endOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    var url = document.getElementById('txtFormatUrlSingle').value;
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sel + '</a>');
    document.getElementById('txtFormatUrlSingle').value = '';
    arr.pop();
    this.hideUrlSingle();
}

function showUrlSingle() {
    var selection = window.getSelection();
    if (!selection.isCollapsed) {
        // we have a non-zero length selection
        var startNode = selection.anchorNode;
        var startOffset = selection.anchorOffset;
        if (startNode instanceof Element) {
            // if it is an element then the offset is the child node index
            startNode = startNode.childNodes[startOffset];
            startOffset = 0;
        }
        var endNode = selection.focusNode;
        var endOffset = selection.focusOffset;
        if (endNode instanceof Element) {
            // if it is an element then the offset is the child node index
            endNode = endNode.childNodes[endOffset];
            endOffset = 0;
        }
        let rInfo = {
            startNode: startNode,
            startOffset: startOffset,
            endNode: endNode,
            endOffset: endOffset,
        };
        arr.push(rInfo)
        document.getElementById("myLinkSingle").style.display = "flex";
        document.getElementById("sParagraph").style.pointerEvents = "none";
    }
}

function hideUrlSingle() {
    document.getElementById("myLinkSingle").style.display = "none";
    document.getElementById("sParagraph").style.pointerEvents = "auto";
}
//Double1
function setUrlDouble1() {
    var startOffset = arr[0]['startOffset']; // Start at third node: 101 E. Main St.
    var endOffset = arr[0]['endOffset']; // End at fifth node: Dodge City, KS
    var range = document.createRange();
    range.setStart(arr[0]['startNode'], startOffset);
    range.setEnd(arr[0]['endNode'], endOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    var url = document.getElementById('txtFormatUrlDouble1').value;
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sel + '</a>');
    document.getElementById('txtFormatUrlDouble1').value = '';
    arr.pop();
    this.hideUrlDouble1();
}

function showUrlDouble1() {
    var selection = window.getSelection();
    if (!selection.isCollapsed) {
        // we have a non-zero length selection
        var startNode = selection.anchorNode;
        var startOffset = selection.anchorOffset;
        if (startNode instanceof Element) {
            // if it is an element then the offset is the child node index
            startNode = startNode.childNodes[startOffset];
            startOffset = 0;
        }
        var endNode = selection.focusNode;
        var endOffset = selection.focusOffset;
        if (endNode instanceof Element) {
            // if it is an element then the offset is the child node index
            endNode = endNode.childNodes[endOffset];
            endOffset = 0;
        }
        let rInfo = {
            startNode: startNode,
            startOffset: startOffset,
            endNode: endNode,
            endOffset: endOffset,
        };
        arr.push(rInfo)
        document.getElementById("myLinkDouble1").style.display = "flex";
        document.getElementById("dParagraph1").style.pointerEvents = "none";
    }
}

function hideUrlDouble1() {
    document.getElementById("myLinkDouble1").style.display = "none";
    document.getElementById("dParagraph1").style.pointerEvents = "auto";
}
//Double2
function setUrlDouble2() {
    var startOffset = arr[0]['startOffset']; // Start at third node: 101 E. Main St.
    var endOffset = arr[0]['endOffset']; // End at fifth node: Dodge City, KS
    var range = document.createRange();
    range.setStart(arr[0]['startNode'], startOffset);
    range.setEnd(arr[0]['endNode'], endOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    var url = document.getElementById('txtFormatUrlDouble2').value;
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sel + '</a>');
    document.getElementById('txtFormatUrlDouble2').value = '';
    arr.pop();
    this.hideUrlDouble2();
}

function showUrlDouble2() {
    var selection = window.getSelection();
    if (!selection.isCollapsed) {
        // we have a non-zero length selection
        var startNode = selection.anchorNode;
        var startOffset = selection.anchorOffset;
        if (startNode instanceof Element) {
            // if it is an element then the offset is the child node index
            startNode = startNode.childNodes[startOffset];
            startOffset = 0;
        }
        var endNode = selection.focusNode;
        var endOffset = selection.focusOffset;
        if (endNode instanceof Element) {
            // if it is an element then the offset is the child node index
            endNode = endNode.childNodes[endOffset];
            endOffset = 0;
        }
        let rInfo = {
            startNode: startNode,
            startOffset: startOffset,
            endNode: endNode,
            endOffset: endOffset,
        };
        arr.push(rInfo)
        document.getElementById("myLinkDouble2").style.display = "flex";
        document.getElementById("dParagraph2").style.pointerEvents = "none";
    }
}

function hideUrlDouble2() {
    document.getElementById("myLinkDouble2").style.display = "none";
    document.getElementById("dParagraph2").style.pointerEvents = "auto";
}
// Paragraph
function setUrl() {
    var startOffset = arr[0]['startOffset']; // Start at third node: 101 E. Main St.
    var endOffset = arr[0]['endOffset']; // End at fifth node: Dodge City, KS
    var range = document.createRange();
    range.setStart(arr[0]['startNode'], startOffset);
    range.setEnd(arr[0]['endNode'], endOffset);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    var url = document.getElementById('txtFormatUrl').value;
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sel + '</a>');
    document.getElementById('txtFormatUrl').value = '';
    arr.pop();
    this.hideUrl();
}

function showUrl() {
    var selection = window.getSelection();
    if (!selection.isCollapsed) {
        // we have a non-zero length selection
        var startNode = selection.anchorNode;
        var startOffset = selection.anchorOffset;
        if (startNode instanceof Element) {
            // if it is an element then the offset is the child node index
            startNode = startNode.childNodes[startOffset];
            startOffset = 0;
        }
        var endNode = selection.focusNode;
        var endOffset = selection.focusOffset;
        if (endNode instanceof Element) {
            // if it is an element then the offset is the child node index
            endNode = endNode.childNodes[endOffset];
            endOffset = 0;
        }
        let rInfo = {
            startNode: startNode,
            startOffset: startOffset,
            endNode: endNode,
            endOffset: endOffset,
        };
        arr.push(rInfo)
        document.getElementById("myLink").style.display = "flex";
        document.getElementById("pParagraph").style.pointerEvents = "none";
    }
}

function hideUrl() {
    document.getElementById("myLink").style.display = "none";
    document.getElementById("pParagraph").style.pointerEvents = "auto";
}
