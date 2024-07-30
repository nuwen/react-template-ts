import {useMemo} from "react";
import {ExpenseItemType} from "../types";
import {capitalizeWord} from "../utils/capitalizeWord";
import {convertToCurrency} from "../utils/convertToCurrency";
import TableRow from "./TableRow";
import { formatDate } from "../utils/formatDate";

interface ITableProps {
    data: ExpenseItemType[];
}

function Table({data}: ITableProps) {
    const headers = [
        "Date",
        "Merchant",
        "Amount",
        "Category",
        "Description",
        "Status",
    ];

    const mappedData = useMemo(() => {
        return data.map((expense) => ({
            ...expense,
            date: formatDate(expense.date),
            category: capitalizeWord(expense.category),
            status: capitalizeWord(expense.status),
            amount: convertToCurrency(expense.amount),
        }));
    }, [data]);

    return (
        <table className="table-auto border-t-4 border-black">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {mappedData.map((item) => (
                    <TableRow key={item.id} data={item} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
