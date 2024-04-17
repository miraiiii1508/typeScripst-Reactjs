import { Equal, Expect } from "../../helpers/type-utils";

interface TableProps {
  renderRow: (index: number) => React.ReactNode;
}

const Table = (props: TableProps) => {
  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <>
      <Table
        renderRow={(index) => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        renderRow={(index) => {
          return null;
        }}
      />
      <Table renderRow={<div></div>} />
      <Table
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
