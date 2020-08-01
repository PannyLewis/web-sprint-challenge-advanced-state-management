import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";

import { connect } from "react-redux";
import { fetchSmurfs, postSmurfs } from "../actions";

const SmurfsList = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.smurfs.map((smurf) => (
        <SmurfsCard smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapStateToDispatch = {
  fetchSmurfs,
  postSmurfs,
};

export default connect(mapStateToProps, mapStateToDispatch)(SmurfsList);
