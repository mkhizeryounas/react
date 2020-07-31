import { connect } from 'react-redux';
import actions from './actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProprs = actions;

export default connect(mapStateToProps, mapDispatchToProprs);
