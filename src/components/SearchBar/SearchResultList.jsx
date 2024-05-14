import React, { useState } from "react";
import styled from "styled-components";
const ResultsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  margin-top: 10px;
  overflow-y: scroll;
  max-height: 300px;
`;
// const [results, setResults] = useState([]);

export const SearchResultList = ({ results }) => {
  return (
    <ResultsList>
      {results.map((results, id) => {
        return <div key={id}>{results.preview_urls}</div>;
      })}
    </ResultsList>
  );
};
