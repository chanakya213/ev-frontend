class LStorage {
  static setUserData = (userData = {}) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
  };

  static removeUserData = () => {
    localStorage.removeItem("userData");
    return {};
  };

  static getUserData = () => {
    let userData = localStorage.getItem("userData") || null;
    if (userData) {
      userData = JSON.parse(userData);
      if (userData?.token) {
        const getTokenData = JSON.parse(
          window.atob(userData?.token.split(".")[1])
        );
        if (Date.now() >= getTokenData.exp * 1000) {
          this.removeUserData();
          userData = null;
        }
      } else {
        this.removeUserData();
        userData = null;
      }
    }
    return userData;
  };
}

export { LStorage };
