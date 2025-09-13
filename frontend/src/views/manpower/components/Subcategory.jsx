import { Col, Container, Row } from 'react-bootstrap';
import ComponentCard from '@/components/ComponentCard';
import PageTitle from "@/components/PageTitle";
import { LuColumns3 } from "react-icons/lu";
import DT from 'datatables.net-bs5';
import DataTable from 'datatables.net-react';
import 'datatables.net-responsive';
import ReactDOMServer from 'react-dom/server';
import { TbChevronLeft, TbChevronRight, TbChevronsLeft, TbChevronsRight } from 'react-icons/tb';
import { columns, tableData } from '@/views/tables/data-tables/data';
// import useModal from '@/hooks/useModal';
// const { openModalWithSize, } = useModal();
const BasicTable = () => {
    DataTable.use(DT);
    return <>
        <div>
            <DataTable data={tableData.body} columns={columns} options={{
                responsive: true,
                language: {
                    paginate: {
                        first: ReactDOMServer.renderToStaticMarkup(<TbChevronsLeft className="fs-lg" />),
                        previous: ReactDOMServer.renderToStaticMarkup(<TbChevronLeft className="fs-lg" />),
                        next: ReactDOMServer.renderToStaticMarkup(<TbChevronRight className="fs-lg" />),
                        last: ReactDOMServer.renderToStaticMarkup(<TbChevronsRight className="fs-lg" />)
                    }
                }
            }} className="table table-striped dt-responsive align-middle mb-0">
               

                <thead className="thead-sm text-uppercase fs-xxs ">
                    <tr>
                        {tableData.header.map((label, idx) => <th key={idx}>{label}</th>)}
                    </tr>
                </thead>

            </DataTable>
             {/* <Button variant="primary" onClick={() => openModalWithSize('lg')}></Button> */}
        </div>
    </>
};

export default BasicTable;