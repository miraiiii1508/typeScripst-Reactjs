const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

// eslint-disable-next-line @typescript-eslint/ban-types
type LooseSize = Size | (string & {});

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[props.size as Size]
            : props.size,
      }}
    />
  );
};

<>
  <Icon size="sm"></Icon>
  <Icon size="xs"></Icon>
  <Icon size="10px"></Icon>
  <Icon size="xs" />
</>;
