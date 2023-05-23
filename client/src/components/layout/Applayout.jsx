import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
export default function Applayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
