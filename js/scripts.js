//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

function drawTree(treeHeight) {
	var star;
    for ( var i = 1  ; i < 7 ; i++ ) {
    star = '';
   for ( var j = 1 ; j <= i ; j++ ) {
     star += '*';
   }
    console.log(star);
   }
}
  drawTree();
 