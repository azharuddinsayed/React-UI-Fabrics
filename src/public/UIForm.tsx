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
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                <TextField label="First Name" />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                <TextField label="Manager" />
              </div>
            </div>
          </div>
        </Stack>
        <Stack {...columnProps}>
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                <TextField label="Last Name" />
              </div>
            </div>
          </div>
        </Stack>
        {/* <Stack {...columnProps}>
          <TextField label="Disabled" disabled defaultValue="I am disabled" />
          <TextField label="Read-only" readOnly defaultValue="I am read-only" />
          <TextField label="Required " required />
          <TextField ariaLabel="Required without visible label" required />
          <TextField label="With error message" errorMessage="Error message" />
        </Stack> */}
      </Stack>
    </Stack>
  );
};
function _alertClicked(): void {
  alert("Clicked");
}
