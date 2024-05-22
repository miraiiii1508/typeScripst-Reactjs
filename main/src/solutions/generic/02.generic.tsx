import { ReactNode } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface TableProps<TData> {
  rows: TData[];
  renderRow: (row: TData) => ReactNode;
}

export const Table = <TData,>(props: TableProps<TData>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

const data = [
  {
    id: 1,
    name: "John",
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={(row) => <td>{row.name}</td>} />
      <Table
        rows={data}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, { id: number; name: string }>>;
          return <td>{row.doesNotExist}</td>;
        }}
      ></Table>
    </div>
  );
};
