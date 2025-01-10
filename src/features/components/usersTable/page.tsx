import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import {useEffect, useState} from "react";

async function getData(): Promise<User[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "Andrei Spataru",
            email: "andrei@gmail.com",
            subscription: "16/10/2024",
        },
        // ...
    ]
}

const DemoPage: React.FC = () => {
    const [data, setData] = useState<User[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10 px-8">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default DemoPage;
