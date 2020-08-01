import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, postSmurfs } from "../actions";

const SmurfsForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });
  const inputHandler = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurfs(smurf);
  };

  return (
    <div>
      <form id="smurfsform">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Enter name"
          value={props.name}
          onChange={inputHandler}
          className="input"
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          label="age"
          placeholder="Enter age"
          value={props.age}
          onChange={inputHandler}
          classage="input"
        />

        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          label="height"
          placeholder="Enter height"
          value={props.height}
          onChange={inputHandler}
          classheight="input"
        />

        <button onClick={submitHandler}> Add your favorite smurf ! </button>
      </form>
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

export default connect(mapStateToProps, mapStateToDispatch)(SmurfsForm);
