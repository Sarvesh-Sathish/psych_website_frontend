import React, {Component} from "react";
import { Button, Box, Flex, HStack } from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {Home} from "../pages/Home";
import {Features} from "../pages/Features";
import {Connect} from "../pages/Connect";


export class TabCard extends Component {
    render() {
        return (
            <HStack
                justify="center"
                spacing={10}
            >

                <div
                    className={"nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/features" className="nav__link">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/connect" className="nav__link">
                                Connect
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </HStack>

        )
    }
}

/*
    <a href="https://www.google.com">Home</a>
    <a href="https://www.google.com">Features</a>
    <a href="https://www.google.com">Connect</a>
*/
