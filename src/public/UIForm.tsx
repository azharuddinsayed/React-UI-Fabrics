import React from "react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";
import {
  Stack,
  IStackProps,
  DefaultButton,
  PrimaryButton,
  IStackTokens,
  Text,
  Link,
  FontWeights,
  DatePicker,
  mergeStyleSets,
  DayOfWeek,
  IDatePickerStrings,
  Fabric,
  IDropdownStyles,
  IDropdownOption,
  Dropdown,
  DropdownMenuItemType
} from "office-ui-fabric-react";
//import "../styles/UIFabrics.css";
import logo from "../fabric.png";
import "office-ui-fabric-core/dist/css/fabric.min.css";
const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
};
const DayPickerStrings: IDatePickerStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],

  shortDays: ["S", "M", "T", "W", "T", "F", "S"],

  goToToday: "Go to today",
  prevMonthAriaLabel: "Go to previous month",
  nextMonthAriaLabel: "Go to next month",
  prevYearAriaLabel: "Go to previous year",
  nextYearAriaLabel: "Go to next year",
  closeButtonAriaLabel: "Close date picker"
};
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
const stackTokens: IStackTokens = { childrenGap: 40 };
const controlClass = mergeStyleSets({
  control: {
    margin: "0 0 15px 0",
    maxWidth: "300px"
  }
});
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 }
};
export const UIFrom: React.FunctionComponent<IButtonExampleProps> = props => {
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };

  const { disabled, checked } = props;
  const options: IDropdownOption[] = [
    {
      key: "fruitsHeader",
      text: "Fruits",
      itemType: DropdownMenuItemType.Header
    },
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
    { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
    {
      key: "vegetablesHeader",
      text: "Vegetables",
      itemType: DropdownMenuItemType.Header
    },
    { key: "broccoli", text: "Broccoli" },
    { key: "carrot", text: "Carrot" },
    { key: "lettuce", text: "Lettuce" }
  ];
  return (
    // <Stack
    //   horizontalAlign="center"
    //   verticalAlign="center"
    //   verticalFill
    //   styles={{
    //     root: {
    //       width: "960px",
    //       margin: "0 auto",
    //       textAlign: "center",
    //       color: "#605e5c"
    //     }
    //   }}
    //   gap={15}
    // >

    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <TextField label="First Name" />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <TextField label="Last Name" />
        </div>
      </div>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <DatePicker
            placeholder="Select a date..."
            ariaLabel="Select a date"
            label="Date Of Birth"
          />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <Dropdown
            placeholder="Select an option"
            label="Department"
            options={options}
          />
        </div>
      </div>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <TextField label="Manager" multiline rows={2} />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <TextField label="Address" multiline rows={2} />
        </div>
      </div>
      <div className="ms-Grid-row" style={{ "margin-top": "20px" }}>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6">
          <label className="ms-Label root-87">Upload File</label>
          <input type="file"></input>
        </div>
      </div>
    </div>
  );
};
function _alertClicked(): void {
  alert("Clicked");
}
