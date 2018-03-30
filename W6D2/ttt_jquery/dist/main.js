!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},n.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=6)}([function(r,t){r.exports=function(r){this.msg=r}},function(r,t){},function(r,t,n){const e=n(0);class o{constructor(){this.grid=o.makeGrid()}isEmptyPos(r){if(!o.isValidPos(r))throw new e("Is not valid position!");return null===this.grid[r[0]][r[1]]}isOver(){if(null!=this.winner())return!0;for(let r=0;r<3;r++)for(let t=0;t<3;t++)if(this.isEmptyPos([r,t]))return!1;return!0}placeMark(r,t){if(!this.isEmptyPos(r))throw new e("Is not an empty position!");this.grid[r[0]][r[1]]=t}print(){const r=[];for(let t=0;t<3;t++){const n=[];for(let r=0;r<3;r++)n.push(this.grid[t][r]?this.grid[t][r]:" ");r.push(`${n.join("|")}\n`)}console.log(r.join("-----\n"))}winner(){const r=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let t=0;t<r.length;t++){const n=this.winnerHelper(r[t]);if(null!=n)return n}return null}winnerHelper(r){for(let t=0;t<o.marks.length;t++){const n=o.marks[t];let e=!0;for(let t=0;t<3;t++){const o=r[t];this.grid[o[0]][o[1]]!=n&&(e=!1)}if(e)return n}return null}static isValidPos(r){return 0<=r[0]&&r[0]<3&&0<=r[1]&&r[1]<3}static makeGrid(){const r=[];for(let t=0;t<3;t++){r.push([]);for(let n=0;n<3;n++)r[t].push(null)}return r}}o.marks=["x","o"],r.exports=o},function(r,t,n){const e=n(2),o=n(0);r.exports=class{constructor(){this.board=new e,this.currentPlayer=e.marks[0]}isOver(){return this.board.isOver()}playMove(r){this.board.placeMark(r,this.currentPlayer),this.swapTurn()}promptMove(r,t){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),r.question("Enter rowIdx: ",n=>{const e=parseInt(n);r.question("Enter colIdx: ",r=>{const n=parseInt(r);t([e,n])})})}run(r,t){this.promptMove(r,n=>{try{this.playMove(n)}catch(r){if(!(r instanceof o))throw r;console.log(r.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),t()):this.run(r,t)})}swapTurn(){this.currentPlayer===e.marks[0]?this.currentPlayer=e.marks[1]:this.currentPlayer=e.marks[0]}winner(){return this.board.winner()}}},function(r,t){r.exports=class{constructor(r,t){}bindEvents(){}makeMove(r){}setupBoard(){}}},function(r,t,n){n(4),n(3);$(()=>{})},function(r,t,n){n(5),r.exports=n(1)}]);