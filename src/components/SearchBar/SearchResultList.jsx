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
export const SearchResultList = ({ results }) => {
  return (
    <ResultsList>
      {results.map((icon, id) => (
        <div key={id}>
          <img src={icon.preview_urls} alt={`Icon ${id}`} />
        </div>
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
