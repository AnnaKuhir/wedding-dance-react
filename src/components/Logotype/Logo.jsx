import React from 'react';
import './style.scss';
import { getHeaderData } from '../../api/HeaderAPI';
import PropTypes from "prop-types";

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: ''
    };
  }

  componentDidMount() {
    getHeaderData().then(data => {
      this.setState({ logo: data.meta.title })
    })
  }

  render() {
    return (
      <a href='/' className="header__logo">{this.state.logo}</a>
    )
  }
}

Logo.propTypes = {
  logo: PropTypes.string
}

export default Logo;
