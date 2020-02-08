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
  FontWeights
} from "office-ui-fabric-react";
import "../styles/UIFabrics.css";
import logo from "../fabric.png";

const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
};

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
const stackTokens: IStackTokens = { childrenGap: 40 };
export const UIFrom: React.FunctionComponent<IButtonExampleProps> = props => {
  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };

  const { disabled, checked } = props;
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
      <Stack
        horizontal
        tokens={{ childrenGap: 50 }}
        styles={{ root: { width: 900 } }}
      >
        <Stack {...columnProps}>
          <TextField label="Standard" />
          <TextField label="Disabled" disabled defaultValue="I am disabled" />
          <TextField label="Read-only" readOnly defaultValue="I am read-only" />
          <TextField label="Required " required />
          <TextField ariaLabel="Required without visible label" required />
          <TextField label="With error message" errorMessage="Error message" />
        </Stack>

        <Stack {...columnProps}>
          <MaskedTextField
            label="With input mask"
            mask="m\ask: (999) 999 - 9999"
          />

          <TextField
            label="With an icon"
            iconProps={{ iconName: "Calendar" }}
          />

          <TextField
            label="With placeholder"
            placeholder="Please enter text here"
          />
          <TextField
            label="Disabled with placeholder"
            disabled
            placeholder="I am disabled"
          />
        </Stack>
        <Stack horizontal tokens={stackTokens}>
          <DefaultButton
            text="Standard"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={disabled}
            checked={checked}
          />
          <PrimaryButton
            text="Primary"
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={disabled}
            checked={checked}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
function _alertClicked(): void {
  alert("Clicked");
}
