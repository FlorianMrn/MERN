// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
import Login from 'src/components/Login';


// Action Creators

const mapStateToProps = (state, ownProps) => ({
    user : state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

// Container
const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));

// == Export
export default LoginContainer;