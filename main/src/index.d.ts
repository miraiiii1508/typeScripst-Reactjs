type TButtonType = "button" | "submit" | "reset";
type TLibrary = {
  icon: "user" | "home";
  name: string;
  age: number;
};
type Icon = Pick<TLibrary, "icon">["icon"];

export { TButtonType, TLibrary };
