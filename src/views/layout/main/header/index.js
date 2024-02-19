import React from "react";
import { connect } from "react-redux";
import { HeaderBox, LeftHeaderBox, RightHeaderBox } from "./header.styled";
import DesktopLogoImg from "../../../../assets/images/vaom.png";
import { signOutUserSuccess } from "../../../../redux/actions";
import toggler from "../../../../assets/icons/toggler.svg";
import {
  SidebarProfileContentBox,
  ProfileOptionCard,
  HoverProfileCard,
  UserDetailsBox,
} from "../sidebar/sidebar.styled";
import { ReactComponent as LogoutImage } from "../../../../assets/icons/logout.svg";
import { ReactComponent as UserImage } from "../../../../assets/icons/user.svg";
import ProfileImage from "../../../../assets/images/profile.jpg";
import { LStorage } from "../../../../helpers/localstorage.helper";

function Header({ toggleStatus, setToggleStatus, signOutUserSuccess, user }) {
  const { role, name } = LStorage.getUserData();
  return (
    <HeaderBox>
      <LeftHeaderBox>
        <img src={DesktopLogoImg} alt="logo" />
        <img
          src={toggler}
          className="toggler"
          alt="togglers"
          onClick={() => setToggleStatus(!toggleStatus)}
        />
      </LeftHeaderBox>
      <RightHeaderBox>
        <SidebarProfileContentBox>
          <div className="sidebarProfileImg">
            <img src={ProfileImage} alt="Profile" />
          </div>
          <HoverProfileCard className="hoverProfile">
            <UserDetailsBox >
              <div className="sidebarProfileImgDetails">
                <img src={ProfileImage} alt="Profile" />
              </div>
              <p className="userName">{name}</p>
              <p className="role">{role}</p>
            </UserDetailsBox>
            <ProfileOptionCard >
              <UserImage className="profileOptionIcon" />{" "}
              <span>View Profile</span>
            </ProfileOptionCard>
            <ProfileOptionCard onClick={signOutUserSuccess}>
              <LogoutImage className="profileOptionIcon" /> <span>Logout</span>
            </ProfileOptionCard>
          </HoverProfileCard>
        </SidebarProfileContentBox>
      </RightHeaderBox>
    </HeaderBox>
  );
}

function mapStateToProps(state) {
  return {
    theme: state?.theme,
    user: state?.user,
  };
}

export default connect(mapStateToProps, {
  signOutUserSuccess,
})(Header);
