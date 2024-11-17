import "styled-components";
import { defaultTheme } from "../styles/theme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  // Use type assertion em vez de extender
  type DefaultTheme = ThemeType;
}
