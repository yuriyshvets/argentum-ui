import { ThemeProvider } from "theme-ui";

const theme = {
  colors: {
    white: "white",
    primary: "#663399",
    text: "grey",
    secondary: "tomato",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    secondary: {
      color: "white",
      bg: "secondary",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
