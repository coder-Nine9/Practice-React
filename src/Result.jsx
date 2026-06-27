export default function Result({ age, phoneNumber }) {
  let text = "The Form Has Been Submitted Successfully";
  let isSuccessfull = true;
  if (age < 18 || age > 100) {
    text = "age not allowed";
    isSuccessfull = false;
  } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
    text = "Phone Number Format is Incorrect";
    isSuccessfull = false;
  }
  const stl = {
    color: isSuccessfull ? "green" : "red",
    background: "white",
    fontSize: "32px",
    fontWeight: "bold",
    padding: "15px",
    width: "500px",
    boxShadow: "0 20px 30px rgba(0,0,0,0.25)",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
  };
  return <div style={stl}>{text}</div>;
}
