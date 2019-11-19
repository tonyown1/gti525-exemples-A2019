CanvasRenderingContext2D.prototype.clear = function () {
  // Helper function to clear the canvas

  var el = document.getElementById('c');
  this.clearRect(0, 0, el.width, el.height);
}

CanvasRenderingContext2D.prototype.drawHistory = function() {
  // TODO: draw the sequence of all operations from the history
}

CanvasRenderingContext2D.prototype.undo = function() {
  // TODO: undo the last operation by clearing and redrawing the history...

  
}

CanvasRenderingContext2D.prototype.execute = function ( name ) {

  var args = [].slice.call(arguments, 1);

  // TODO: Execute requested operation on the current object (the context) -- name and arguments

};

window.onload = function()  {
  var sz = 10;
  var el = document.getElementById('c');
  var ctx = el.getContext('2d');
  ctx.strokeStyle = "red";

  el.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  el.onmouseup = function(e) {
    if (e.button == 2) {
      ctx.fillRect(e.clientX-sz, e.clientY-sz, 2*sz, 2*sz);
    }
    else
      ctx.strokeRect(e.clientX-sz, e.clientY-sz, 2*sz, 2*sz);
  };

  document.getElementById("undo").addEventListener("click", function() {
    // TODO: ...
  });

}
