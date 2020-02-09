import React from "react";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  Calendar
} from "office-ui-fabric-react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { UIFrom } from "./public/UIForm";
import { UIDataList } from "./public/UIDataList";
import { Calender } from "./public/calender";
import { Customizer } from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";

import logo from "./fabric.png";
//import "./styles/UiFabrics.scss";
const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c"
        }
      }}
      gap={15}
    >
      <img src={logo} alt="logo" />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
      </Text>
      <Text variant="large">
        For a guide on how to customize this project, check out the UI Fabric
        documentation.
      </Text>
      <Pivot
        aria-label="Links of Tab Style Pivot Example"
        linkFormat={PivotLinkFormat.tabs}
      >
        <PivotItem headerText="UiForm">
          <UIFrom />
        </PivotItem>
        <PivotItem headerText="UiDataSet">
          <UIDataList />
        </PivotItem>
        <PivotItem headerText="calender">
          <Calender />
        </PivotItem>
      </Pivot>
      {/* <Customizer {...FluentCustomizations}>
        <Stack style={{ maxHeight: "500px", overflow: "scroll" }}>
          <UIFrom />
          <UIDataList />
        </Stack>
      </Customizer> */}
      {/* <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="/UiForm">UiForms</Link>
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
          Stack Overflow
        </Link>
        <Link href="https://github.com/officeDev/office-ui-fabric-react/">
          Github
        </Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
          Icons
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
          Typography
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
          Theme
        </Link>
      </Stack> */}
    </Stack>
  );
};
