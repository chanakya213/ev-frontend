import React, { useState } from "react";
import { connect } from "react-redux";
import { signOutUserSuccess } from "../../../redux/actions";
import Header from "./header";
import Sidebar from "./sidebar";
import {
  MainComponentBox,
  ContentBox,
  ContentChildrenBox,
} from "./main.styled";
import Footer from "./footer";

function SecondLayout(props) {
  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <MainComponentBox>
      {!toggleStatus && <Sidebar toggleStatus={toggleStatus} />}
      <ContentBox style={{ marginLeft: `${!toggleStatus ? "220px" : "0px"}` }}>
        <Header setToggleStatus={setToggleStatus} toggleStatus={toggleStatus} />
        <ContentChildrenBox>{props?.children}</ContentChildrenBox>
        <Footer />
      </ContentBox>
    </MainComponentBox>
  );
}

function mapStateToProps(state) {
  return {
    user: state?.user,
  };
}

export default connect(mapStateToProps, { signOutUserSuccess })(SecondLayout);
