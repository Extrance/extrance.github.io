import log from "loglevel";

const LOCAL_STORAGE_AUTH_DATA = "datahub-auth-data";

export const LOCAL_STORAGE_EVENT = "local-storage-event";

export const setAuthData = (authData) => {
  try {
    sessionStorage.setItem(LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData));
    document.dispatchEvent(new Event(LOCAL_STORAGE_EVENT));
  } catch (error) {
    log.error("Error setting Auth Data in local storage...", authData, error);
  }
};

export const getAuthData = () => {
  try {
    const authDataString = sessionStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
    const authData = authDataString ? JSON.parse(authDataString) : null;

    return authData;
  } catch (error) {
    log.error("Error getting Auth Data from local storage...", error);
  }
};

export const deleteAuthData = () => {
  try {
    sessionStorage.removeItem(LOCAL_STORAGE_AUTH_DATA);
  } catch (error) {
    log.error("Error deleting Auth Data from local storage...", error);
  }
};

export const isAdmin = () => {
  try {
    const authDataString = sessionStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
    const authData = authDataString ? JSON.parse(authDataString) : null;

    return authData?.userType?.admin;
  } catch (error) {
    log.error("Error getting Auth Data isAdmin from local storage...", error);
  }
};

export const getUsername = () => {
  try {
    const authDataString = sessionStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
    const authData = authDataString ? JSON.parse(authDataString) : null;

    return authData?.username;
  } catch (error) {
    log.error("Error getting Auth Data username from local storage...", error);
  }
};

export const getUsernameInitials = () => {
  try {
    const authDataString = sessionStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
    const authData = authDataString ? JSON.parse(authDataString) : null;

    if(authData !== null) {
      return (authData?.username[0]+""+authData?.username[3]).toUpperCase();
    }

    return "";
  } catch (error) {
    log.error("Error getting Auth Data username from local storage...", error);
  }
};