import React from 'react';
import './style.scss';
import { getHeaderData } from '../../api/HeaderAPI';
import PropTypes from "prop-types";

class Links extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    }
  }

  componentDidMount() {
    getHeaderData().then(data => {
      this.setState({ content: data.content })
    })
  }

  listItems = () =>
    this.state.content.map(contentItem => (
      <li key={contentItem._id}> <a href={contentItem.url} className="header__link">{contentItem.title}</a></li>
    ));


  render() {

    return (
      <ul className="header__list">
        {
          this.listItems()
        }
      </ul>
    )
  }
}

Links.propTypes = {
  content: PropTypes.array
}

export default Links;
