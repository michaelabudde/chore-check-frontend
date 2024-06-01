import React, { useCallback, useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
import SearchBar from "./SearchBar/SearchBar.jsx";

// From Modals
import LogChoreModal from "./FormModals/LogChoreModal";
import AddChoreModal from "./FormModals/AddChoreModal";
import AddMemberModal from "./FormModals/AddMemberModal";
import SigninModal from "./FormModals/SigninModal";
import SignupModal from "./FormModals/SignupModal";
import ConfirmSignout from "./ConfirmModals/ConfirmSignout.jsx";
import EditProfileModal from "./FormModals/EditProfileModal.jsx";
// Preview Modals

// Utils

import "./App.css";

function App() {
  // General functions
  const [errorResponse, setErrorResponse] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  // API
  // const [icons, setIcons] = useState([]);

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
  // const toggleSignIn = () => setIsSignedIn(!isSignedIn);
  const signIn = () => {
    // Simulate signing in by changing the state
    setIsSignedIn(true);
  };

  const signOut = () => {
    // Simulate signing out by changing the state
    setIsSignedIn(false);
    navigate("/");
  };
  // NavDropDown and Modal  functions
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setActiveModal(null);
  }, []);

  const handleOpenModal = useCallback((modalName) => {
    setModalOpen(true);
    setActiveModal(modalName);
  }, []);
  // const handleToggleDropdown = useCallback(() => {
  //   setDropdownOpen((prev) => !prev); // Toggle the dropdown state
  // }, []);
  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="page">
      <div className="page_wrapper">
        <Header
          openModal={handleOpenModal}
          isOpen={isDropdownOpen}
          toggleDropdown={handleToggleDropdown}
          onClose={handleCloseModal}
          isSignedIn={isSignedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                openModal={handleOpenModal}
                isSignedIn={isSignedIn}
                // signIn={signIn}
                // signOut={signOut}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile openModal={handleOpenModal} />}
          />
        </Routes>

        {activeModal === "logChore" && (
          <LogChoreModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            // errorResponse={errorResponse}
            // isLoading={isLoading}
            // onLogChore={handleAddItemSubmit}
          />
        )}
        {activeModal === "signup" && (
          <SignupModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            signIn={signIn}
            openModal={handleOpenModal}
            // signupError={signupError}
            // isLoading={isLoading}
            handleSignup={() => "say hi"}
            setIsSignedIn={setIsSignedIn}
          />
        )}
        {activeModal === "signin" && (
          <SigninModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            signIn={signIn}
            setIsSignedIn={setIsSignedIn}
            // openModal={handleOpenModal}
            // loginError={loginError}
            // isLoading={isLoading}
            // handleSignin={handleSignin}
          />
        )}
        {activeModal === "addChore" && (
          <AddChoreModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}

            // errorResponse={errorResponse}
            // isLoading={isLoading}
            // onAddChore={handleAddItemSubmit}
          />
        )}
        {activeModal === "addMember" && (
          <AddMemberModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}

            // isLoading={isLoading}
            // errorResponse={errorResponse}
            // onAddMember={handleAddItemSubmit}
          />
        )}

        {activeModal === "editProfile" && (
          <EditProfileModal
            onClose={handleCloseModal}
            // handleProfileUpdate={handleProfileUpdate}
            isLoading={isLoading}
          />
        )}
        {activeModal === "signout" && (
          <ConfirmSignout
            onClose={handleCloseModal}
            signOut={signOut}
            isLoading={isLoading}
          />
        )}
        <Footer openModal={handleOpenModal} />
      </div>
    </div>
  );
}

export default App;

// Utils
// import {
//   getItems,
//   addItem,
//   deleteItem,
//   likeCard,
//   fetchUserInfo,
//   updateProfile,
// } from "../../utils/api.js";

// useEsc(handleCloseModal);
// useClickOutside(ref, handleCloseModal);
// const toggleMenu = () => {
//   setIsMenuOpen(!isMenuOpen);
// };
// useEffect(() => {
//   const listener = (event) => {
//     if (!ref.current || ref.curent.contains(event.target)){
//       return;
//     }
//   setModalOpen(false)}
//   };
// });
// function handleSubmit(request) {
//   // start loading
//   setIsLoading(true);

//   // Return the promise chain
//   return (
//     request()
//       // we need to close only in `then`
//       .then(handleCloseModal)
//       // we need to catch possible errors
//       // console.error is used to handle errors if you don’t have any other ways for that
//       .catch((error) => {
//         console.error(error);
//       })
//       // and in finally we need to stop loading
//       .finally(() => setIsLoading(false))
//   );
// }

// async function handleAddItemSubmit(
//   token,
//   newItem,
//   addItem,
//   setArrayFunction
// ) {
//   try {
//     // Create a function that returns a promise
//     const makeRequest = async () => {
//       // Return the promise from addItem
//       try {
//         const res = await addItem(token, newItem);
//         // Add the new item to the array
//         setArrayFunction((prevArray) => [res.data, ...prevArray]);
//       } catch (error) {
//         // Handle errors
//         console.error("Error adding item:", error);
//         throw error; // Rethrow the error to be handled in the calling code
//       }
//     };

//     // Call handleSubmit passing the request function
//     handleSubmit(makeRequest);
//   } catch (error) {
//     // Handle other errors
//     console.error("Couldn't add the item:", error);
//     setErrorResponse(error.message || "Couldn't add the item");
//   }
// }
// for later:
// {activeModal === "confirm" && (
//   <ConfirmDeleteModal
//     onClose={handleCloseModal}
//     handleDelete={handleDeleteConfirmed}
//     selectedCard={selectedCard}
//     isLoading={isLoading}
//   />
// )}
// {activeModal === "preview" && (
//   <ItemModal
//     selectedCard={selectedCard}
//     onClose={handleCloseModal}
//     onDeleteItem={handleCardDelete}
//   />
// )}
