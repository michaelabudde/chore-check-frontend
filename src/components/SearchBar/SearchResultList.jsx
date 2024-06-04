import React, { useState } from "react";
import styled from "styled-components";
const ResultsList = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  border: 2px solid #cbe1b7;
  margin: 10px;
  overflow-y: scroll;
  max-height: 100px;
  padding: 10px;
`;
const ResultsItem = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 1px;
`;
export const SearchResultList = ({ results }) => {
  console.log(results);

  return (
    <ResultsList>
      {results.map((icon, id) => (
        <ResultsItem key={id}>
          <img src={icon} alt={`Icon ${id}`} />
        </ResultsItem>
      ))}
    </ResultsList>
  );
};
// export const SearchResultList = ({ results }) => {
//   return (
//     <ResultsList>
//       {results.map(icon, id) => {
//         return <div key={id}>{icon.preview_urls}</div>;
//       })}
//     </ResultsList>
//   );
// };

// {
//   results.map((url, index) => (
//     <div key={index}>{url}</div> // Use index as key for lack of a better unique identifier
//   ));
// }
