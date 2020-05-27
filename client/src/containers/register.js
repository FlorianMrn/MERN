// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
import Register from 'src/components/Register';


// Action Creators

const mapStateToProps = (state, ownProps) => ({
    user : state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

// Container
const RegisterContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register));

// == Export
export default RegisterContainer;