var s,
i,
j,
size = 10,
board = '',
out = '';

for (s = 0; s< (size/2)-1; s++){
    out += ' ';
}
for(i = 0; i< size/2; i++){
    board += '* ';
      console.log(out, board);
    out = out.substring(0, out.length - 1);
}

for(j = size/2; j > 0; j--){
     out += ' ';
    board = board.substring(0, board.length - 2);
     console.log(out, board);
}