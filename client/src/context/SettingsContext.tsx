import useLocalStorage from "../hooks/useLocalStorage";
import React, { FC, createContext } from "react";
import { THEMES } from "../constants";

const initialSettings = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg: any) => {},
});

const SettingsProvider: FC<{ children: any }> = ({ children }) => {
  const { data: settings, storeData: setStoreSettings } = useLocalStorage(
    "settings",
    initialSettings
  );
  const saveSettings = (updateSettings: any) => {
    setStoreSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
