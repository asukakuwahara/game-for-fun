import React from "react";
import walkingImg from "./player_walk.png";
import { connect } from "react-redux";
import handleMovement from "./movement";
import { relative } from "path";

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkingImg}')`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px"
      }}
    >
      <div style={{ width: "1px", height: "1px" }}>
        <div
          style={{
            position: "relative",
            boxShadow:
              "80px 10px 0 0 #000000, 90px 10px 0 0 #000000, 100px 10px 0 0 #000000, 70px 20px 0 0 #000000, 80px 20px 0 0 #000000, 90px 20px 0 0 #000000, 100px 20px 0 0 #000000, 110px 20px 0 0 #000000, 60px 30px 0 0 #000000, 70px 30px 0 0 #000000, 80px 30px 0 0 #000000, 90px 30px 0 0 #000000, 100px 30px 0 0 #000000, 110px 30px 0 0 #000000, 120px 30px 0 0 #000000, 50px 40px 0 0 #000000, 60px 40px 0 0 #000000, 70px 40px 0 0 #000000, 80px 40px 0 0 #000000, 90px 40px 0 0 #000000, 100px 40px 0 0 #000000, 110px 40px 0 0 #000000, 120px 40px 0 0 #000000, 130px 40px 0 0 #000000, 40px 50px 0 0 #000000, 50px 50px 0 0 #000000, 60px 50px 0 0 #000000, 70px 50px 0 0 #000000, 80px 50px 0 0 #000000, 90px 50px 0 0 #000000, 100px 50px 0 0 #000000, 110px 50px 0 0 #000000, 120px 50px 0 0 #000000, 130px 50px 0 0 #000000, 140px 50px 0 0 #000000, 50px 60px 0 0 #dcae71, 60px 60px 0 0 #dcae71, 70px 60px 0 0 #dcae71, 80px 60px 0 0 #dcae71, 90px 60px 0 0 #dcae71, 100px 60px 0 0 #dcae71, 110px 60px 0 0 #dcae71, 120px 60px 0 0 #dcae71, 130px 60px 0 0 #dcae71, 60px 70px 0 0 #dcae71, 70px 70px 0 0 #000000, 80px 70px 0 0 #dcae71, 90px 70px 0 0 #dcae71, 100px 70px 0 0 #dcae71, 110px 70px 0 0 #000000, 120px 70px 0 0 #dcae71, 60px 80px 0 0 #dcae71, 70px 80px 0 0 #dcae71, 80px 80px 0 0 #dcae71, 90px 80px 0 0 #dcae71, 100px 80px 0 0 #dcae71, 110px 80px 0 0 #dcae71, 120px 80px 0 0 #dcae71, 60px 90px 0 0 #dcae71, 70px 90px 0 0 #dcae71, 80px 90px 0 0 #000000, 90px 90px 0 0 #000000, 100px 90px 0 0 #000000, 110px 90px 0 0 #dcae71, 70px 100px 0 0 #dcae71, 80px 100px 0 0 #dcae71, 90px 100px 0 0 #dcae71, 100px 100px 0 0 #dcae71, 110px 100px 0 0 #dcae71, 90px 110px 0 0 #dcae71, 30px 120px 0 0 #dcae71, 40px 120px 0 0 #ff0000, 50px 120px 0 0 #ff0000, 60px 120px 0 0 #ff0000, 70px 120px 0 0 #ff0000, 80px 120px 0 0 #ff0000, 90px 120px 0 0 #ff0000, 100px 120px 0 0 #ff0000, 110px 120px 0 0 #ff0000, 120px 120px 0 0 #ff0000, 130px 120px 0 0 #ff0000, 140px 120px 0 0 #ff0000, 150px 120px 0 0 #dcae71, 40px 130px 0 0 #ff0000, 50px 130px 0 0 #ff0000, 60px 130px 0 0 #ff0000, 70px 130px 0 0 #ff0000, 80px 130px 0 0 #ff0000, 90px 130px 0 0 #ff0000, 100px 130px 0 0 #ff0000, 110px 130px 0 0 #ff0000, 120px 130px 0 0 #ff0000, 130px 130px 0 0 #ff0000, 140px 130px 0 0 #ff0000, 70px 140px 0 0 #ff0000, 80px 140px 0 0 #ff0000, 90px 140px 0 0 #ff0000, 100px 140px 0 0 #ff0000, 110px 140px 0 0 #ff0000, 70px 150px 0 0 #ff0000, 80px 150px 0 0 #ff0000, 90px 150px 0 0 #ff0000, 100px 150px 0 0 #ff0000, 110px 150px 0 0 #ff0000, 70px 160px 0 0 #3f51b5, 80px 160px 0 0 #3f51b5, 90px 160px 0 0 #3f51b5, 100px 160px 0 0 #3f51b5, 110px 160px 0 0 #3f51b5, 70px 170px 0 0 #3f51b5, 80px 170px 0 0 #3f51b5, 90px 170px 0 0 #3f51b5, 100px 170px 0 0 #3f51b5, 110px 170px 0 0 #3f51b5, 70px 180px 0 0 #3f51b5, 80px 180px 0 0 #3f51b5, 100px 180px 0 0 #3f51b5, 110px 180px 0 0 #3f51b5, 80px 190px 0 0 #dcae71, 100px 190px 0 0 #dcae71, 70px 200px 0 0 #03a9f4, 80px 200px 0 0 #03a9f4, 100px 200px 0 0 #03a9f4, 110px 200px 0 0 #03a9f4",
            height: "10px",
            width: "10px"
          }}
        ></div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
