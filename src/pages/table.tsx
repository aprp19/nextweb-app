import DataTable from "@components/data-table";
import { useCommand, useStore } from "@models/store";
import { useEffect } from "react";
import { PageComponent } from "@nxweb/react";

const Table: PageComponent = () => {
  const [store, dispatch] = useStore((state) => state.user?.users);
  const command = useCommand(cmd => cmd);
  useEffect(() => {
    dispatch(command.user.getUsers());
  }, []);

  return <DataTable data={store || []}/>;
}

Table.displayName = 'Table';
export default Table;