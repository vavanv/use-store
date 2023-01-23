import {
  Switch,
  FormControlLabel,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";
import { MainContainer } from "../../main-container";
import { uiStore, userStore } from "../../store/stores";

const UserPageComponent = () => {
  const state = userStore.getState();

  const firstNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setState({ ...state, firstName: event.target.value });
  };

  const lastNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setState({ ...state, lastName: event.target.value });
  };

  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <div>User Page</div>
      <FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={uiStore.useStore((s) => s.isBusy)}
              name="status"
              size="small"
              disabled
            />
          }
          label="Status"
        />
      </FormControl>
      <div>
        <TextField
          required
          id="outlined-required"
          label="First name"
          onChange={firstNameOnChange}
          placeholder="Fist Name"
          value={userStore.useStore((s) => s.firstName)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Last name"
          onChange={lastNameOnChange}
          placeholder="Last Name"
          value={userStore.useStore((s) => s.lastName)}
        />
      </div>
    </Stack>
  );
};

export const UserPage = () => {
  return (
    <MainContainer>
      <UserPageComponent />
    </MainContainer>
  );
};
