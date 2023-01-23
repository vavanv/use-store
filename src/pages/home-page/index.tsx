import { Switch, FormControlLabel, FormControl } from "@mui/material";

import { MainContainer } from "../../main-container";
import { uiStore } from "../../store/stores";

const HomePageComponent = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    uiStore.setState({ isBusy: event.target.checked });
  };

  return (
    <>
      <div>Home Page</div>
      <FormControl>
        <FormControlLabel
          control={
            <Switch
              checked={uiStore.useStore((s) => s.isBusy)}
              name="status"
              onChange={onChange}
              size="small"
            />
          }
          label="Status"
        />
      </FormControl>
    </>
  );
};

export const HomePage = () => {
  return (
    <MainContainer>
      <HomePageComponent />
    </MainContainer>
  );
};
