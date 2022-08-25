import React from "react";
import File_XML from '../../Json/File_XML'

const File_Xml = () => {
    return (
        <>
            <div className="Right_side">
                <table>
                    <thead>
                        <tr >{
                            File_XML.map((value, index) => {
                                return (
                                    <th style={{ width: "350px", backgroundColor: "#fa3757" }} key={index}> {value.name}</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default File_Xml;