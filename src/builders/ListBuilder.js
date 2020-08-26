class ListBuilder {
  constructor(list) {
    this.list = list || [];
  }

  shuffleColors() {
    const colorArray = [
      "indianred",
      "lightcoral",
      "salmon",
      "darksalmon",
      "lightsalmon",
      "crimson",
      "red",
      "firebrick",
      "darkred",
      "pink",
      "lightpink",
      "hotpink",
      "deeppink",
      "mediumvioletred",
      "palevioletred",
      "coral",
      "tomato",
      "orangered",
      "darkorange",
      "orange",
      "gold",
      "yellow",
      "lightyellow",
      "lemonchiffon",
      "lightgoldenrodyellow",
      "papayawhip",
      "moccasin",
      "peachpuff",
      "palegoldenrod",
      "khaki",
      "darkkhaki",
      "lavender",
      "thistle",
      "plum",
      "violet",
      "orchid",
      "fuchsia",
      "magenta",
      "mediumorchid",
      "mediumpurple",
      "rebeccapurple",
      "blueviolet",
      "darkviolet",
      "darkorchid",
      "darkmagenta",
      "purple",
      "indigo",
      "slateblue",
      "darkslateblue",
      "greenyellow",
      "chartreuse",
      "lawngreen",
      "lime",
      "limegreen",
      "palegreen",
      "lightgreen",
      "mediumspringgreen",
      "springgreen",
      "mediumseagreen",
      "seagreen",
      "forestgreen",
      "green",
      "darkgreen",
      "yellowgreen",
      "olivedrab",
      "olive",
      "darkolivegreen",
      "mediumaquamarine",
      "darkseagreen",
      "lightseagreen",
      "darkcyan",
      "teal",
      "aqua",
      "cyan",
      "lightcyan",
      "paleturquoise",
      "aquamarine",
      "turquoise",
      "mediumturquoise",
      "darkturquoise",
      "cadetblue",
      "steelblue",
      "lightsteelblue",
      "powderblue",
      "lightblue",
      "skyblue",
      "lightskyblue",
      "deepskyblue",
      "dodgerblue",
      "cornflowerblue",
      "mediumslateblue",
      "royalblue",
      "blue",
      "mediumblue",
      "darkblue",
      "navy",
      "midnightblue",
      "cornsilk",
      "blanchedalmond",
      "bisque",
      "navajowhite",
      "wheat",
      "burlywood",
      "tan",
      "rosybrown",
      "sandybrown",
      "goldenrod",
      "darkgoldenrod",
      "peru",
      "chocolate",
      "saddlebrown",
      "sienna",
      "brown",
      "maroon",
    ];
    const newList = colorArray.slice();

    for (let i = newList.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }

    return newList;
  }

  createList(total) {
    const colors = this.shuffleColors();

    for (let i = 1; i <= total; i++) {
      this.list.push({
        id: i,
        key: `1-${i}`,
        name: `Card ${i}`,
        isActive: false,
        hasMatch: false,
        color: colors[i],
      });
      this.list.push({
        id: i,
        key: `2-${i}`,
        name: `Card ${i}`,
        isActive: false,
        hasMatch: false,
        color: colors[i],
      });
    }

    return this;
  }

  shuffle() {
    const newList = this.list.slice();

    for (let i = newList.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }

    this.list = newList;

    return this;
  }

  build() {
    return this.list;
  }
}

export default ListBuilder;
