import PreviewModal from "./PreviewModal";

const ChorePreview = ({ onCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(AuthContext);

  return <PreviewModal></PreviewModal>;
};
export default ChorePreview;
