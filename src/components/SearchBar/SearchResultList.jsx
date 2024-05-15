import React, { useState } from "react";
import styled from "styled-components";
const ResultsList = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid #cbe1b7;
  margin-top: 10px;
  overflow-y: scroll;
  max-height: 300px;
  padding: 10px;
`;
const ResultsItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
