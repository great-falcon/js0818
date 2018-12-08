class Cell {
  constructor(fieldElement, game) {
    this.game = game;
    this.element = createAndAppend({
      className: "cell",
      parrentElement: fieldElement
    });

    // if (Math.random() > 0.9) {
    //   this.spawn(); 
    // }

    // this.element.onclick = this.merge.bind(this);
  }

  get value() {
    return this._value || 0;
  }

  set value(value) {
    this._value = value;
    this.element.textContent = value == 0 ? '' : value;
    this.element.setAttribute('data-number', value);
  }

  clear() {
    this.element.addEventListener("transitionend", function _listener() {
      this.element.style.cssText = '';
      
      this.element.removeEventListener("transitionend", _listener);
    }.bind(this));
    
    this.value = "";
  }

  animateCell(cell){
    let coordsFrom = cell.element.getBoundingClientRect();
    let coordsTo = this.element.getBoundingClientRect();
    let x = coordsFrom.left != coordsTo.left ? coordsTo.left - coordsFrom.left : 0;
    let y = coordsFrom.top != coordsTo.top ? coordsTo.top - coordsFrom.top : 0;
    cell.element.style.cssText = 
      `transform: translateX(${x}px) translateY(${y}px); 
      opacity: 0;
      transition: all 0.3s ease-out;`;

  }

  merge(cell, isMerged=false) {
    this.animateCell(cell)
    this.value += cell.value;
    if(isMerged){
      this.game.onCellMerge(this);
    }

    cell.clear();
    }
    

  spawn(){
    this.value = Math.random() > 0.2 ? 2 : 4;
  }
}
