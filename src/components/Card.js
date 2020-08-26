import React from "react";
import MUCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const width = "160px";
const height = "200px";

const styles = {
  root: {
    width,
    height,
    margin: "12px",
    cursor: "pointer",
  },
  flipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  flipperRotate: {
    transform: "rotateY(180deg)",
  },
  page: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
  },
  pageFront: {
    backgroundColor: "silver",
    transform: "rotateY(0deg)",
    zIndex: 2,
  },
  pageBack: {
    transform: "rotateY(180deg)",
  },
  indianred: { backgroundColor: "indianred" },
  lightcoral: { backgroundColor: "lightcoral" },
  salmon: { backgroundColor: "salmon" },
  darksalmon: { backgroundColor: "darksalmon" },
  crimson: { backgroundColor: "crimson" },
  red: { backgroundColor: "red" },
  firebrick: { backgroundColor: "firebrick" },
  darkred: { backgroundColor: "darkred" },
  pink: { backgroundColor: "pink" },
  lightpink: { backgroundColor: "lightpink" },
  hotpink: { backgroundColor: "hotpink" },
  deeppink: { backgroundColor: "deeppink" },
  mediumvioletred: { backgroundColor: "mediumvioletred" },
  palevioletred: { backgroundColor: "palevioletred" },
  lightsalmon: { backgroundColor: "lightsalmon" },
  coral: { backgroundColor: "coral" },
  tomato: { backgroundColor: "tomato" },
  orangered: { backgroundColor: "orangered" },
  darkorange: { backgroundColor: "darkorange" },
  orange: { backgroundColor: "orange" },
  gold: { backgroundColor: "gold" },
  yellow: { backgroundColor: "yellow" },
  lightyellow: { backgroundColor: "lightyellow" },
  lemonchiffon: { backgroundColor: "lemonchiffon" },
  lightgoldenrodyellow: { backgroundColor: "lightgoldenrodyellow" },
  papayawhip: { backgroundColor: "papayawhip" },
  moccasin: { backgroundColor: "moccasin" },
  peachpuff: { backgroundColor: "peachpuff" },
  palegoldenrod: { backgroundColor: "palegoldenrod" },
  khaki: { backgroundColor: "khaki" },
  darkkhaki: { backgroundColor: "darkkhaki" },
  lavender: { backgroundColor: "lavender" },
  thistle: { backgroundColor: "thistle" },
  plum: { backgroundColor: "plum" },
  violet: { backgroundColor: "violet" },
  orchid: { backgroundColor: "orchid" },
  fuchsia: { backgroundColor: "fuchsia" },
  magenta: { backgroundColor: "magenta" },
  mediumorchid: { backgroundColor: "mediumorchid" },
  mediumpurple: { backgroundColor: "mediumpurple" },
  rebeccapurple: { backgroundColor: "rebeccapurple" },
  blueviolet: { backgroundColor: "blueviolet" },
  darkviolet: { backgroundColor: "darkviolet" },
  darkorchid: { backgroundColor: "darkorchid" },
  darkmagenta: { backgroundColor: "darkmagenta" },
  purple: { backgroundColor: "purple" },
  indigo: { backgroundColor: "indigo" },
  slateblue: { backgroundColor: "slateblue" },
  darkslateblue: { backgroundColor: "darkslateblue" },
  greenyellow: { backgroundColor: "greenyellow" },
  chartreuse: { backgroundColor: "chartreuse" },
  lawngreen: { backgroundColor: "lawngreen" },
  lime: { backgroundColor: "lime" },
  limegreen: { backgroundColor: "limegreen" },
  palegreen: { backgroundColor: "palegreen" },
  lightgreen: { backgroundColor: "lightgreen" },
  mediumspringgreen: { backgroundColor: "mediumspringgreen" },
  springgreen: { backgroundColor: "springgreen" },
  mediumseagreen: { backgroundColor: "mediumseagreen" },
  seagreen: { backgroundColor: "seagreen" },
  forestgreen: { backgroundColor: "forestgreen" },
  green: { backgroundColor: "green" },
  darkgreen: { backgroundColor: "darkgreen" },
  yellowgreen: { backgroundColor: "yellowgreen" },
  olivedrab: { backgroundColor: "olivedrab" },
  olive: { backgroundColor: "olive" },
  darkolivegreen: { backgroundColor: "darkolivegreen" },
  mediumaquamarine: { backgroundColor: "mediumaquamarine" },
  darkseagreen: { backgroundColor: "darkseagreen" },
  lightseagreen: { backgroundColor: "lightseagreen" },
  darkcyan: { backgroundColor: "darkcyan" },
  teal: { backgroundColor: "teal" },
  aqua: { backgroundColor: "aqua" },
  cyan: { backgroundColor: "cyan" },
  lightcyan: { backgroundColor: "lightcyan" },
  paleturquoise: { backgroundColor: "paleturquoise" },
  aquamarine: { backgroundColor: "aquamarine" },
  turquoise: { backgroundColor: "turquoise" },
  mediumturquoise: { backgroundColor: "mediumturquoise" },
  darkturquoise: { backgroundColor: "darkturquoise" },
  cadetblue: { backgroundColor: "cadetblue" },
  steelblue: { backgroundColor: "steelblue" },
  lightsteelblue: { backgroundColor: "lightsteelblue" },
  powderblue: { backgroundColor: "powderblue" },
  lightblue: { backgroundColor: "lightblue" },
  skyblue: { backgroundColor: "skyblue" },
  lightskyblue: { backgroundColor: "lightskyblue" },
  deepskyblue: { backgroundColor: "deepskyblue" },
  dodgerblue: { backgroundColor: "dodgerblue" },
  cornflowerblue: { backgroundColor: "cornflowerblue" },
  mediumslateblue: { backgroundColor: "mediumslateblue" },
  royalblue: { backgroundColor: "royalblue" },
  blue: { backgroundColor: "blue" },
  mediumblue: { backgroundColor: "mediumblue" },
  darkblue: { backgroundColor: "darkblue" },
  navy: { backgroundColor: "navy" },
  midnightblue: { backgroundColor: "midnightblue" },
  cornsilk: { backgroundColor: "cornsilk" },
  blanchedalmond: { backgroundColor: "blanchedalmond" },
  bisque: { backgroundColor: "bisque" },
  navajowhite: { backgroundColor: "navajowhite" },
  wheat: { backgroundColor: "wheat" },
  burlywood: { backgroundColor: "burlywood" },
  tan: { backgroundColor: "tan" },
  rosybrown: { backgroundColor: "rosybrown" },
  sandybrown: { backgroundColor: "sandybrown" },
  goldenrod: { backgroundColor: "goldenrod" },
  darkgoldenrod: { backgroundColor: "darkgoldenrod" },
  peru: { backgroundColor: "peru" },
  chocolate: { backgroundColor: "chocolate" },
  saddlebrown: { backgroundColor: "saddlebrown" },
  sienna: { backgroundColor: "sienna" },
  brown: { backgroundColor: "brown" },
  maroon: { backgroundColor: "maroon" },
};

const Card = ({ name, color, classes, isActive, onClick }) => (
  <div role="presentation" className={classes.root} onClick={onClick}>
    <div
      className={classNames(classes.flipper, {
        [classes.flipperRotate]: isActive,
      })}
    >
      <MUCard className={classNames(classes.page, classes.pageFront)} />
      <MUCard
        className={classNames(classes.page, classes.pageBack, classes[color])}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </MUCard>
    </div>
  </div>
);

export default withStyles(styles)(Card);
