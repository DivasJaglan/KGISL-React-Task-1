import UserProfile from "./UserProfile";
function App() {
  return (
    <div className=" w-100 p-5 bg-body-secondary container">
      <UserProfile
        name="Divas"
        age={22}
        location="Madhu Vihar"
        isActive={true}
      />
    </div>
  );
}

export default App;
