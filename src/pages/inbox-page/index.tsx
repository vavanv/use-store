import { Switch, FormControlLabel, FormControl } from "@mui/material";
import { MainContainer } from "../../main-container";
import { uiStore } from "../../store/stores";

const InboxPageComponent = () => {
  return (
    <>
      <div>Index Page</div>
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
    </>
  );
};

export const InboxPage = () => {
  return (
    <MainContainer>
      <InboxPageComponent />
    </MainContainer>
  );
};
