class Project {
  #src = null;

  constructor(data) {
    if (!data || !data.character || !data.battler || !data.face || !data.palette) {
      throw new Error("Se necesita un objeto inicial de datos válido.");
    }

    this.character = signal(data.character);
    this.battler = signal(data.character);
    this.face = signal(data.face);
    this.palette = signal(data.palette);
  }

  #build() {}

  saveLayer() {}

  savePalette() {}

  save() {}

  export() {}
}
