import React from "react";
import GVG_workFlow from "../../Json/GVG";

const GVG = () => {
    return (
        <>
            <div className="Right_side">
                <table>
                    <thead>
                        <tr >{
                            GVG_workFlow.map((value, index) => {
                                return (
                                    <th style={{ width: "200px", backgroundColor: "#fa3757" }} key={index}> {value.name}</th>
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

export default GVG;