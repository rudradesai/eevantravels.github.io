/*.col-twelve resume-header:hover{
#flow{
  position: relative;
 	animation-name: flow;
   	animation-duration: 4s;
    animation-delay: -2s;
}

@-webkit-keyframes flow {
  0%   { left:0px; top:0px;}
  25%  { left:200px; top:0px;}
  50%  { left:200px; top:00px;}
  75%  { left:200px; top:0px;}
  100% { left:0px; top:0px;}
}

/* Standard syntax */
/*@keyframes flow {
  0%   { left:0px; top:0px;}
  25%  { left:200px; top:0px;}
  50%  { left:200px; top:0px;}
  75%  { left:200px; top:0px;}
  100% { left:0px; top:0px;}
}
}
*/

document.getElementByClass(col-twelve resume-header).addEventListener("mouseover", flow);
function flow(){
  #flow{
  position: relative;
  animation-name: flow;
    animation-duration: 4s;
    animation-delay: -2s;
}

@-webkit-keyframes flow {
  0%   { left:0px; top:0px;}
  25%  { left:200px; top:0px;}
  50%  { left:200px; top:00px;}
  75%  { left:200px; top:0px;}
  100% { left:0px; top:0px;}
}

/* Standard syntax */
@keyframes flow {
  0%   { left:0px; top:0px;}
  25%  { left:200px; top:0px;}
  50%  { left:200px; top:0px;}
  75%  { left:200px; top:0px;}
  100% { left:0px; top:0px;}
}
}
