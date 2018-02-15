var gnu = " .= .-_-. =.\n((_/)o o(\\_)) \n `-'(. .)`-' \n  /| \\_/ |\\ \n ( | GNU | ) \n /'\\_____/'\\ \n \\__)   (__/";
var input = process.argv[2];
var text = "    ";
for(var i = 0; i<input.length; i++){
    text += '_';
}
text += ' \n   <' + input + '>\n    ';
for(var j = 0; j<input.length; j++){
    text += '-';
}
text += " \n   \\  / \n";
text += "    \\ / \n";
console.log(text+gnu);