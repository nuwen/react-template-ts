import {ReactNode} from "react";

interface IPropsTableData {
    children: ReactNode;
}
function TableData({children}: IPropsTableData) {
    return <td className="p-4">{children}</td>;
}

export default TableData;
