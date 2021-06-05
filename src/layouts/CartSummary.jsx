import React from 'react'
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";

export default function CartSummary() {
    return (
        <div>
            <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
        </div>
    )
}
