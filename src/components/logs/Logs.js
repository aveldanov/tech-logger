import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {

  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, [])


  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/logs');
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);

  // }

  if (loading || logs === null) {
    return <Preloader />
  }


  return (

    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">
          System Logs
  </h4>
      </li>

      {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>
      ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}

    </ul>

  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = dispatch => ({
  getLogs: () => dispatch(getLogs())
});


export default connect(mapStateToProps, mapDispatchToProps)(Logs);
