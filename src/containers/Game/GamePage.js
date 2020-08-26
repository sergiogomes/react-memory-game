import React from "react";
import { connect } from "react-redux";

import { Board, Card } from "../../components";

const GamePage = ({ isActive, onCardClick }) => (
  <Board>
    <Card name="Card one" isActive={isActive} onClick={onCardClick}></Card>
  </Board>
);

// class GamePage extends React.Component {
//   state = { isActive: false };

//   handleCardClick = () => {
//     this.setState((prevState) => ({
//       isActive: !prevState.isActive,
//     }));
//   };

//   render() {
//     return (
//       <Board>
//         <Card
//           name="Card One"
//           isActive={this.state.isActive}
//           onClick={this.handleCardClick}
//         />
//       </Board>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  isActive: state.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick: () => {
    dispatch({ type: "SELECT_CARD" });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
