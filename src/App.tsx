import {useEffect, useState} from "react";
import PageHeader from "./components/PageHeader";
import Table from "./components/Table";
import {ExpenseItemType} from "./types";
import { fetchExpenseData } from "./api";

function App() {
    const [data, setData] = useState<ExpenseItemType[]>([]);

    const getData = async () => {
        try {
            const response = await fetchExpenseData();
            setData(await response.json());
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    },[])
    
    return (
        <div id="expenses">
            <PageHeader content="Expenses" />
            <Table data={data}/>
        </div>
    );
}

export default App;
