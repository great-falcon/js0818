class Game {
  constructor(parrentElement, size = 4) {
    let gameFieldElement = createAndAppend({
      className: "game",
      parrentElement
    });

    let headerElement = createAndAppend({
      className: "header",
      parrentElement: gameFieldElement
    });

    this.bestScore = createAndAppend({
      className: "bestScore",
      parrentElement: headerElement
    });

    this.score = createAndAppend({
      className: "score",
      parrentElement: headerElement
    });

    this.rating = 0;
    this.bestRating =
      storage.getItem(STORAGE_NAME) != null ? storage.getItem(STORAGE_NAME) : 0;

    let fieldElement = createAndAppend({
      className: "field",
      parrentElement: gameFieldElement
    });

    this.field = [];

    for (let i = 0; i < size; i++) {
      this.field[i] = [];
      for (let k = 0; k < size; k++) {
        this.field[i][k] = new Cell(fieldElement, this);
      }
    }

    this.spawnUnit();
    this.spawnUnit();

    document.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowUp":
          this.moveUp();
          break;

        case "ArrowRight":
          this.moveRight();
          break;

        case "ArrowDown":
          this.moveDown();
          break;

        case "ArrowLeft":
          this.moveLeft();
          break;
      }
    });
  }

  get rating() {
    return this._rating;
  }

  set rating(value) {
    this._rating = value;
    this.score.textContent = `Score: ${value}`;
    if (this.rating > this.bestRating) {
      this.bestRating = this.rating;
    }
  }

  get bestRating() {
    return this._bestRating;
  }

  set bestRating(value) {
    this._bestRating = value;
    this.bestScore.textContent = `Best score: ${value}`;
    storage.setItem(STORAGE_NAME, value);
  }

  checkEmptyCells() {
    let emptyCells = [];
    for (let i = 0; i < this.field.length; i++) {
      for (let k = 0; k < this.field[i].length; k++) {
        if (!this.field[i][k].value) {
          emptyCells.push(this.field[i][k]);
        }
      }
    }
    if (!emptyCells.length) {
      alert("Ты проиграл!");
    }
    return emptyCells;
  }

  spawnUnit() {
    let emptyCells = this.checkEmptyCells();
    if (emptyCells.length) {
      emptyCells[getRndInteger(0, emptyCells.length - 1)].spawn();
    }
  }

  onCellMerge(cell) {
    this.rating += cell.value;
  }

  moveRight() {
    let changed = false;
    for (let i = 0; i < this.field.length; i++) {
      let row = [];
      for (let k = this.field[i].length - 1; k >= 0; k--) {
        row.push(this.field[i][k]);
      }
      if (moveRow(row)) {
        changed = true;
      }
    }
    if (changed) {
      this.spawnUnit();
    } else {
      this.checkEmptyCells();
    }
  }

  moveLeft() {
    let changed = false;
    for (let i = 0; i < this.field.length; i++) {
      let row = [];
      for (let k = 0; k < this.field[i].length; k++) {
        row.push(this.field[i][k]);
      }
      if (moveRow(row)) {
        changed = true;
      }
    }
    if (changed) {
      this.spawnUnit();
    } else {
      this.checkEmptyCells();
    }
  }

  moveDown() {
    let changed = false;
    for (let i = 0; i < this.field.length; i++) {
      let row = [];
      for (let k = this.field[i].length - 1; k >= 0; k--) {
        row.push(this.field[k][i]);
      }
      if (moveRow(row)) {
        changed = true;
      }
    }
    if (changed) {
      this.spawnUnit();
    } else {
      this.checkEmptyCells();
    }
  }

  moveUp() {
    let changed = false;
    for (let i = 0; i < this.field.length; i++) {
      let row = [];
      for (let k = 0; k < this.field[i].length; k++) {
        row.push(this.field[k][i]);
      }
      if (moveRow(row)) {
        changed = true;
      }
    }
    if (changed) {
      this.spawnUnit();
    } else {
      this.checkEmptyCells();
    }
  }
}
