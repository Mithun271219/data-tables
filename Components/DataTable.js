import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt'
import 'datatables.net-dt/css/jquery.dataTables.css';

function Table({ products }) {

    const tableRef = useRef();

    useEffect(() => {
        const table = $(tableRef.current).DataTable();
        return () => {
            table.destroy()
        }

    }, [])

    return (
        <>
            <h2>this is data table</h2>
            <section className='container'>
                <table ref={tableRef} id='myTable' className='table table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Sl.no</th>
                            <th>title</th>
                            <th>price</th>
                            <th>discount</th>
                            <th>brand</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((prodduct) => {
                                return (
                                    <tr key={prodduct.id}>
                                        <td>{prodduct.id}</td>
                                        <td>{prodduct.title}</td>
                                        <td>{prodduct.price}</td>
                                        <td>{prodduct.discountPercentage}</td>
                                        <td>{prodduct.brand}</td>
                                        <td>{prodduct.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Table