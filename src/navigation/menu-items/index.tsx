import * as React from "react";
import { ListItem, ListItemIcon, ListItemText, List } from "@mui/material";
import { WithStyles, withStyles } from "@mui/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";

import { MAIN_PAGE, INBOX_PAGE, DRAFT_PAGE } from "../../app/constants";

import { styles } from "./styles";

export interface SubItem {
  id: string;
  icon: any;
  route: string;
  visible: boolean;
}

export interface Item {
  id: string;
  visible: boolean;
  subitems: SubItem[];
}

interface Props extends WithStyles<typeof styles> {
  handleToggle: () => void;
}

function NavBarMainMenuItemsComponent(props: Props) {
  const { classes, handleToggle } = props;

  const items: Item[] = [
    {
      id: "Main Items",
      visible: true,
      subitems: [
        {
          id: "Home",
          icon: <HomeIcon />,
          route: MAIN_PAGE,
          visible: true,
        },
        {
          id: "Inbox",
          icon: <InboxIcon />,
          route: INBOX_PAGE,
          visible: true,
        },
        {
          id: "Draft",
          icon: <MailIcon />,
          route: DRAFT_PAGE,
          visible: true,
        },
      ],
    },
  ];

  return (
    <div className={classes.rootDiv}>
      <List className={classes.list}>
        {items.map(({ id, subitems, visible }) => {
          return visible ? (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader} key={id}>
                <ListItemText classes={{ primary: classes.categoryHeaderText }}>
                  {id}
                </ListItemText>
              </ListItem>
              {subitems.map(({ id: subitemId, icon, route, visible }) => {
                return visible ? (
                  <Link to={route} key={subitemId}>
                    <ListItem
                      onClick={handleToggle}
                      className={classes.item}
                      key={subitemId}
                    >
                      <ListItemIcon className={classes.itemIcon}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={subitemId} />
                    </ListItem>
                  </Link>
                ) : null;
              })}
            </React.Fragment>
          ) : null;
        })}
      </List>
    </div>
  );
}

export const NavBarMainMenuItems = React.memo(
  withStyles(styles)(NavBarMainMenuItemsComponent)
);
