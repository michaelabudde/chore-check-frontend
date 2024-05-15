import { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchResultList } from "./SearchResultList";
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 48px;
  border-radius: 30px;
  padding-left: 10px;
  transition: all 0.3s ease;
  margin-left: 20px;
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
  border-color: #000;
  border-radius: 30px;


  &:focus {
    border-color: #cbe1b7;    border-radius: 30px;
  }
`;

function SearchBar() {
  const [icons, setIcons] = useState([]);
  console.log(icons); // icons starts empty []
  const [input, setInput] = useState("");
  const [isResultListActive, setIsResultListActive] = useState(false);

  const fetchData = () => {
    fetch(`https://chorecheckapi.azurewebsites.net/api/iconfinder`)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((data) => {
        console.log(data);
        setIcons(data.preview_urls);
        console.log(data.preview_urls);
        setIsResultListActive(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest("#result-list")) {
      setIsResultListActive(false);
    }
  };
  return (
    <>
      <SearchContainer onClick={handleOutsideClick}>
        <SearchInput
          onChange={(e) => handleChange(e.target.value)}
          value={input}
          placeholder="type to search..."
        ></SearchInput>
      </SearchContainer>
      {isResultListActive && (
        <SearchResultList id="result-list" results={icons} />
      )}
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