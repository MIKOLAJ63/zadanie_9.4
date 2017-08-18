//scripts.js
var level = 7
function drawTree(treeHeight) {
    for ( var i = 1  ; i < level ; i++ ) {
    var star = '';
   for ( var j = 1 ; j <= i ; j++ ) {
     star += '*';
   }
    console.log(star);
   }
}
  drawTree();
 