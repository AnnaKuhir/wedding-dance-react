import React from 'react';
import './style.scss';
import { getHeaderData } from '../../api/HeaderAPI';
import PropTypes from "prop-types";
import Logo from '../Logotype/Logo';
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import Button from '../Button/Button';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   buttonTitle: '',
    //   url: ''
    // };
    this.state = {
      content: {}
    }
  }

  // componentDidMount() {
  //   getHeaderData().then(data => {
  //     this.setState({ buttonTitle: data.action.title, url: data.action.url })
  //   })
  // }

  componentDidMount() {
    debugger
    this.getContent();
  }

  getContent = async () => {
    fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/navigation')
      .then((data) => data.json())
      .then((res) => {
        debugger
        this.setState({ content: res });
        console.log(this.state.content);
      })
  }

  onClick = () => {
    window.location.assign(this.state.url);
  }

  render() {
    debugger
    return (
      <header className="header">
        <div className="container">
          {/* <Logo>{this.state.content}</Logo> */}
          {/*<HeaderLinks />
          <Button className="btn btn-active header__btn" onClick={this.onClick()}>{this.state.buttonTitle}</Button> */}
        </div>
      </header>
    )
  }
}

export default Header;