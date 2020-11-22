import React, { useState } from "react";
import PropTypes from "prop-types";
import { postNewShorty } from "../api/shorties";

const newShorty = {
  id: "",
  target: "",
};
const InsertShorty = ({ onSuccess }) => {
  const [shorty, setShorty] = useState(newShorty);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(null);
      setLoading(true);
      await postNewShorty(shorty);
      onSuccess();
      setShorty(newShorty);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key) => (event) => {
    setShorty({ ...shorty, [key]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input
          value={shorty.id}
          onChange={handleChange("id")}
          placeholder="Name of the short link"
        />
      </label>
      <label>
        Target
        <input
          value={shorty.target}
          onChange={handleChange("target")}
          placeholder="Paste your link here"
        />
      </label>
      <input
        type="submit"
        value={loading ? "Loading..." : "Insert"}
        disabled={loading}
      />
      {error && <div>💀 {error.message}</div>}
    </form>
  );
};

InsertShorty.propTypes = {
  onSuccess: PropTypes.func,
};

export default InsertShorty;
