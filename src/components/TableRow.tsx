import {ExpenseRowItemType} from "../types";
import TableData from "./TableData";

interface ITableRowProps {
    data: ExpenseRowItemType;
}

function TableRow({data}: ITableRowProps) {
    const {id, merchant, amount, description, date, category, status} = data;
    return (
        <tr key={id}>
            <TableData>{date}</TableData>
            <TableData>{merchant}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{category}</TableData>
            <TableData>{description}</TableData>
            <TableData>{status}</TableData>
        </tr>
    );
}

export default TableRow;
