import { CSSProperties } from '@mui/styles';

const drawerBackGround = '#19212b';
const dividerColor = '#404854';
const headerBackground = '#262f3d';

const defaultFontFamily: CSSProperties = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

const defaultLabelFont: CSSProperties = {
  ...defaultFontFamily,
  fontWeight: 400,
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.54)',
};

export { drawerBackGround, defaultLabelFont, dividerColor, headerBackground };
