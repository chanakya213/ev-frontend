import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import {
  SidebarComponentBox,
  ListBox,
  SidebarHeader,
  SidebarContentBox,
  SidebarContentUpper,
  ListDataBox,
} from "./sidebar.styled";
import { Constant } from "../../../../helpers";
import DownArrowImg from "../../../../assets/icons/arrow-down.svg";

function Sidebar() {
  const location = useLocation();
  let defaultOpenChildListIndex = "";
  Constant.sidebar().some((data, index) => {
    if (data?.childrens) {
      return data?.childrens.some((childData) => {
        const isChildRouteFounded =
          childData?.route && location.pathname.startsWith(childData?.route);
        if (isChildRouteFounded) defaultOpenChildListIndex = index;
        return isChildRouteFounded;
      });
    }
    return false;
  });

  const [openChildListIndex, setOpenChildListIndex] = useState(defaultOpenChildListIndex);

  const ListData = (props) => {
    const { data, isActiveRoute, onClick, isChildOpen } = props;

    return (
      <div>
        {data?.route ? (
          <div
            className={cx({
              sideBaractive: isActiveRoute,
            })}
          >
            <Link to={data?.route}>
              <ListDataBox>
                <div className="listDataLeftSide">
                  {data.icon && <data.icon className="sidebarListIcon" />}
                  {data?.name}
                </div>
              </ListDataBox>
            </Link>
          </div>
        ) : (
          <div
            className={cx({
              sideBaractive: isActiveRoute,
            })}
          >
            <ListDataBox onClick={onClick}>
              <div className="listDataLeftSide">
                <data.icon className="sidebarListIcon" />
                {data?.name}
              </div>
              <img
                src={DownArrowImg}
                alt="down-icon"
                className={cx({ listDataLeftSideUpdownArrow: isChildOpen })}
              />
            </ListDataBox>
          </div>
        )}
      </div>
    );
  };

  return (
    <SidebarComponentBox>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContentBox>
        <SidebarContentUpper>
          {Constant.sidebar().map((data, index) => {
            let isActiveRoute =
              data?.route && location.pathname.startsWith(data?.route);
            if (location.pathname === "/" && data?.route === "/dashboard") {
              isActiveRoute = true;
            }
            return (
              <ListBox key={data?.key}>
                <ListData
                  data={data}
                  isActiveRoute={isActiveRoute}
                  isChildOpen={openChildListIndex === index}
                  openChildListIndex={openChildListIndex}
                  onClick={() =>
                    setOpenChildListIndex(
                      openChildListIndex === index ? "" : index
                    )
                  }
                />
                {data?.childrens &&
                  data?.childrens.length > 0 &&
                  openChildListIndex === index &&
                  data?.childrens.map((childData) => {
                    const isActiveChildRoute =
                      childData?.route &&
                      location.pathname.startsWith(childData?.route);
                    return (
                      <ListBox key={childData?.key} isChildren={true}>
                        <ListData
                          data={childData}
                          isActiveRoute={isActiveChildRoute}
                        />
                      </ListBox>
                    );
                  })}
              </ListBox>
            );
          })}
        </SidebarContentUpper>
      </SidebarContentBox>
    </SidebarComponentBox>
  );
}

export default Sidebar;
