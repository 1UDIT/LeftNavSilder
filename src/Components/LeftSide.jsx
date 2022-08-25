import React, { useState } from "react";
import { Link, NavLink as BaseNavLink } from 'react-router-dom';
import styled from "styled-components";
import "./Style.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const LeftSide = () => {
    const [isOpen, setIsopen] = useState(false);
    const [isActive, setActive] = useState(true);
    const [isNotActive, setNotActive] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        setActive(!isActive);
        setNotActive(!isNotActive);
    }
    return (
        <>
            {/* <div className="Left_side">
                <div className={`Slider ${isOpen === true ? 'activeSlider' : ''}`}>
                    <ul className="TextSlider" >
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/"  > Auto Placeholder Creation</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/GVG_Stratus" >GVG Stratus Rundown</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/GvgWorkflow" >Image GVG workflow</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/File_Xml" >Partial Restore Trigger to Mediator from an XML file</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/dem" >Analytics - Edius Project</NavLink>
                        </StyledLi>
                    </ul>
                </div>
            </div> */}
            {/* style={({ isActive }) =>
                                isActive ? { color: "#03fc6b" } : {}
                            } */}

            <div className="SliderBar" >
                <div className={`Slider ${isOpen === true ? 'activeSlider' : ''}`}>
                    <ul className="TextSlider" >
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/"  > Auto Placeholder Creation</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/GVG_Stratus" >GVG Stratus Rundown</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/GvgWorkflow" >Image GVG workflow</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/File_Xml" >Partial Restore Trigger to Mediator from an XML file</NavLink>
                        </StyledLi>
                        <StyledLi onClick={ToggleSidebar}>
                            <NavLink to="/dem" >Analytics - Edius Project</NavLink>
                        </StyledLi>

                    </ul>
                    <div className={isActive ? 'SliderArrowClose' : null} onClick={ToggleSidebar}>
                        <FiArrowLeft />
                    </div>
                </div>

                <div className={isNotActive ? 'SliderArrowOpen' : "SliderArrowstop"} onClick={ToggleSidebar}>
                    <FiArrowRight />
                </div>
            </div>
        </>
    )
}
const NavLink = styled(BaseNavLink)`
display: flex;
align-items: center;
font-size: 15px;
color: #888;
font-size:10px
font-weight: 700;
text-decoration: none;
padding: 8px 3px;
width: 100%;
border-bottom: 2px #fa3757 solid;  
&.active {
  color: white;
}
`;

const StyledLi = styled.li`
margin-left:10px;
list-style: none;
display: flex;
&:hover,
${NavLink}.active {
  background-color: #fa3757;
  border-radius: 10px 0px 0px 10px;
}
background-color: ${(props) =>
        props.path ? "rgba(84, 78, 114, 1)" : "white"};
border-radius: ${(props) => (props.path ? "0px 0px 0px 10px" : "0px")};
`;
export default LeftSide;