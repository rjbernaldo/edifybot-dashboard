import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapStateToProps = state => state;

const CurrentSummary = connect(mapStateToProps)(Summary);

export default CurrentSummary;
