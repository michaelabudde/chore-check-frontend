import PreviewModal from "./PreviewModal";

const MemberPreview = ({ onCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(AuthContext);

  return <PreviewModal></PreviewModal>;
};
export default MemberPreview;
