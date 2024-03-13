type TButtonType = "button" | "submit" | "reset";
type TLibrary = {
  icon: "user" | "home";
  name: string;
  age: number;
};
type Icon = Pick<TLibrary, "icon">["icon"];
type GetEventHandlers<T extends keyof JSX.IntrinsicElements> = Extract<
  keyof JSX.IntrinsicElements[T],
  `on${string}`
>;
// T: input, span, button, a, etc.
// React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
// "onChange" | "onClick" etc.

/**
 * Provides the event type for a given element and handler.
 *
 * @example
 *
 * type MyEvent = EventFor<"input", "onChange">;
 */
export type EventFor<
  TElement extends keyof JSX.IntrinsicElements,
  THandler extends GetEventHandlers<TElement>
> = JSX.IntrinsicElements[TElement][THandler] extends
  | ((e: infer TEvent) => any)
  | undefined
  ? TEvent
  : never;
export { TButtonType, TLibrary };
