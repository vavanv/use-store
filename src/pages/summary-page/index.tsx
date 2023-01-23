import { Switch, FormControlLabel, Stack, TextField } from "@mui/material";
import { MainContainer } from "../../main-container";
import { uiStore, userStore } from "../../store/stores";
const SummaryPageComponent = () => {
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
      <TextField
        required
        id="outlined-required"
        label="First name"
        placeholder="Fist Name"
        value={userStore.useStore((s) => s.firstName)}
      />

      <TextField
        required
        id="outlined-required"
        label="Last name"
        value={userStore.useStore((s) => s.lastName)}
      />
    </Stack>
  );
};

export const SummaryPage = () => {
  return (
    <MainContainer>
      <SummaryPageComponent />
    </MainContainer>
  );
};
