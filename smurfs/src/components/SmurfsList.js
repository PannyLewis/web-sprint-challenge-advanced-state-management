import React, { useEffect } from "react";
import smurfsCard from "./smurfsCard";

import { connect } from "react-redux";
import { fetchsmurfs, postsmurfs } from "../actions;

const smurfsList = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.smurfs.map((player) => (
        <smurfsCard player={player} />
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

export default connect(mapStateToProps, mapStateToDispatch)(smurfsList);
