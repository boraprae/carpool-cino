import Navbar from "./navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
