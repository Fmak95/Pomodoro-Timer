import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class BreakButton extends Component{
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  setBreak = (e) => {
    const num = parseInt(e.target.value,10);
    this.props.setBreak(num);
  }

  render(){
    const {minutes} = this.props;
    return(
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret color="primary">
        Button Dropdown
      </DropdownToggle>
      <DropdownMenu>
        {minutes.map(minute => (
          <DropdownItem key={minute} value={minute} onClick={this.setBreak}>{`${minute} Minutes`}</DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
    );
  }
}

export default BreakButton;