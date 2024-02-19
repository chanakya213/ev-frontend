import React from "react";
import { connect } from "react-redux";
import {
  HelpBox,
} from "./help.styled";

function Help(props) {
  return (
    <HelpBox>
      <h3 className="title">Help</h3>
    </HelpBox>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  // requestGetModulesList
})(Help);