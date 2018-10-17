import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../site/auth/AuthContext";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    this.setState({
      sessionToken: ""
    });
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md">
          <NavbarBrand className="brand" href="/game">
            <span>MDB</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FaUserCircle fontSize="250%" className="icon" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/userpage">User Page</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a onClick={() => this.props.auth.clickLogout()}>Logout</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
    {auth => <NavigationBar {...props} auth={auth} />}
  </AuthContext.Consumer>
);
