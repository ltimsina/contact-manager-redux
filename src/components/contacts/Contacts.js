import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux"; //to connect react to redux
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

//in order to use connect (map state, dispatch)
//same 'contact' from reducers/index.js
//contacts: ... same name as ... .contacts
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
