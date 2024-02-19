import { ReactComponent as DashboardImg } from "../assets/icons/dashboard.svg";

class Constant {
  static sidebar = () => {
    const sidebarData = [
      {
        icon: DashboardImg,
        name: "Dashboard",
        route: "/dashboard",
        key: "dashboard",
      },
      {
        icon: DashboardImg,
        name: "Vehicles",
        route: "/vehicles",
        key: "vehicles",
      },
      {
        icon: DashboardImg,
        name: "Help",
        route: "/help",
        key: "help",
      },
    ];
    return sidebarData;
  };

  static modules = () => {
    const MODULE_NAMES = {
      DASHBOARD: "DASHBOARD",
    };
    return MODULE_NAMES;
  };

  static urls = () => {
    return {
      image: "https://qwikappstorage.blob.core.windows.net/uploads",
    };
  };

}

export { Constant };
