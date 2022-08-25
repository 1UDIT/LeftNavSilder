import React from "react";
import TableHeaderContent from "../../Json/TableHeaderContent";

const Table = () => {
    return (
        <>
            <div className="Right_side">
                <table>
                    <thead>
                        <tr >{
                            TableHeaderContent.map((value, index) => {
                                return (
                                    <th style={{ width: "190px", backgroundColor: "#fa3757" }} key={index}>{value.name}</th>
                                )
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;