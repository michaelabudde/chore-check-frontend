import React, { useCallback, useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
// Utils
// import {
//   getItems,
//   addItem,
//   deleteItem,
//   likeCard,
//   fetchUserInfo,
//   updateProfile,
// } from "../../utils/api.js";
// From Modals
import LogChoreModal from "./FormModals/LogChoreModal";
import AddChoreModal from "./FormModals/AddChoreModal";
import AddMemberModal from "./FormModals/AddMemberModal";
import SigninModal from "./FormModals/SigninModal";
import SignupModal from "./FormModals/SignupModal";
// Preview Modals

import "./App.css";

function App() {
  // General functions
  const [errorResponse, setErrorResponse] = useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  // NavDropDown and Modal  functions
  const [isModalOpen, setModalOpen] = useState(false);
  const ref = useRef();
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const [activeModal, setActiveModal] = useState(null);
  const handleCloseModal = useCallback(() => {
    setModalOpen(null);
  }, []);
  // useEffect(() => {
  //   const listener = (event) => {
  //     if (!ref.current || ref.curent.contains(event.target)){
  //       return;
  //     }
  //   setModalOpen(false)}
  //   };
  // });
  const handleOpenModal = useCallback((modalName) => {
    setModalOpen(modalName);
  }, []);

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

  return (
    <div className="page">
      <div className="page_wrapper">
        <Header
          closeModal={handleCloseModal}
          isOpen={isModalOpen}
          openModal={handleOpenModal}
        />
        <Routes>
          <Route path="/" element={<Main openModal={handleOpenModal} />} />
          <Route
            path="/profile"
            element={<Profile openModal={handleOpenModal} />}
          />
        </Routes>
        {activeModal === "signup" && (
          <SignupModal
          // onClose={handleCloseModal}
          // openModal={handleOpenModal}
          // signupError={signupError}
          // isLoading={isLoading}
          // handleSignup={handleSignup}
          />
        )}
        {activeModal === "signin" && (
          <SigninModal
          // onClose={handleCloseModal}
          // openModal={handleOpenModal}
          // loginError={loginError}
          // isLoading={isLoading}
          // handleSignin={handleSignin}
          />
        )}
        {activeModal === "logChore" && (
          <LogChoreModal

          // errorResponse={errorResponse}
          // isLoading={isLoading}
          // onLogChore={handleAddItemSubmit}
          />
        )}
        {activeModal === "addChore" && (
          <AddChoreModal
          // errorResponse={errorResponse}
          // isLoading={isLoading}
          // onAddChore={handleAddItemSubmit}
          />
        )}
        {activeModal === "addMember" && (
          <AddMemberModal
          // isLoading={isLoading}
          // errorResponse={errorResponse}
          // onAddMember={handleAddItemSubmit}
          />
        )}
        {/* {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDeleteItem={handleCardDelete}
          />
        )}
        {activeModal === "confirm" && (
          <ConfirmDeleteModal
            onClose={handleCloseModal}
            handleDelete={handleDeleteConfirmed}
            selectedCard={selectedCard}
            isLoading={isLoading}
          />
        )}
        {activeModal === "edit profile" && (
          <EditProfileModal
            onClose={handleCloseModal}
            handleProfileUpdate={handleProfileUpdate}
            isLoading={isLoading}
          />
        )}
        {activeModal === "logout" && (
          <ConfirmLogoutModal
            onClose={handleCloseModal}
            handleLogout={handleLogout}
            isLoading={isLoading}
          />
        )} */}
        <Footer openModal={handleOpenModal} />
      </div>
    </div>
  );
}

export default App;
