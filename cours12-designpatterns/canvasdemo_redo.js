CanvasRenderingContext2D.prototype.clear = function () {
  var el = document.getElementById('c');
  this.clearRect(0, 0, el.width, el.height);
}

CanvasRenderingContext2D.prototype.drawHistory = function() {
  if (this.history) {
    for (var i=0; i<this.history.length; i++) {
      var hist = this.history[i];
      this[hist[0]].apply(this, hist[1]);
    }
  }
}

CanvasRenderingContext2D.prototype.undo = function() {
  if (this.history && this.history.length >= 1) {
    var item = this.history.pop();
    if (!this.redolist)
      this.redolist = []
    this.redolist.push(item);
    this.clear();
    this.drawHistory();
  }
}

CanvasRenderingContext2D.prototype.redo = function() {
  if (this.redolist && this.redolist.length >= 1) {
    this.history.push(this.redolist.pop());
    this.clear();
    this.drawHistory();
  }
}

CanvasRenderingContext2D.prototype.execute = function ( name ) {
  if (!this.history) {
      this.history = [];
  }
  this.redolist = [];

  var args = [].slice.call(arguments, 1);

  this.history.push([name, args]);

  return this[name] && this[name].apply( this, args );
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
      ctx.execute("fillRect", e.clientX-sz, e.clientY-sz, 2*sz, 2*sz);
    }
    else
      ctx.execute("strokeRect", e.clientX-sz, e.clientY-sz, 2*sz, 2*sz);
  };

  document.getElementById("undo").addEventListener("click", function() {
    ctx.undo();
  });

  document.getElementById("redo").addEventListener("click", function() {
    ctx.redo();
  });

}
