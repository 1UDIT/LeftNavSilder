import React from "react";
import GVG_Stratus_Rundown from '../../Json/Stratus'

const Stratus = () => {
    return (
        <>
            <div className="Right_side">
                <table>
                    <thead>
                        <tr >{
                            GVG_Stratus_Rundown.map((value, index) => {
                                return (
                                    <th style={{ width: "250px", backgroundColor: "#fa3757" }} key={index}> {value.name}</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Stratus;