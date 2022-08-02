/* eslint-disable */

/*
Context api : cleand and easy way to share state between components
Also, share state within a component tree
Hooks: Tap into the inner workings of React in functional components
*/
import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component() {
  state = {
    isLightTheme: true,
    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee",
    },
    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555",
    },
  };

  render() {
    //spread state ... this three dot get all state values
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
