import { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchResultList } from "./SearchResultList";
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 48px;
  border-radius: 30px;
  padding-left: 5px;
  transition: all 0.3s ease;
`;
const SearchInput = styled.input`
  padding-left: 10px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:focus {
    border-color: #000;
    border-radius: 30px;
  }
`;

function SearchBar() {
  const [icons, setIcons] = useState([]);
  console.log(icons); // icons starts empty []
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`https://chorecheckapi.azurewebsites.net/api/iconfinder`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIcons(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <SearchContainer>
        <SearchInput
          onChange={(e) => handleChange(e.target.value)}
          value={input}
          placeholder="type to search..."
        ></SearchInput>
      </SearchContainer>
      <SearchResultList results={icons} />
    </>
  );
}
export default SearchBar;

// useEffect(() => {
//   fetch(`https://chorecheckapi.azurewebsites.net/api/iconfinder`)
//     .then((result) => {
//       return result.json();
//     })
//     .then((data) => {
//       console.log(data);
//       setIcons(data);
//     });
// }, []);
