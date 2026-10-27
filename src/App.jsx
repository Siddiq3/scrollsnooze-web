import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import DeleteAccount from "./pages/DeleteAccount";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
const pages = {
  "/legal/privacy-policy": Privacy,
  "/legal/terms-of-use": Terms,
  "/account-deletion": DeleteAccount,
  "/": Home,
  "/privacy": Privacy,
  "/delete-account": DeleteAccount,
  "/support": Support,
  "/terms": Terms,
};
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = pages[path] ?? NotFound;
  return (
    <>
      <Navigation />
      <Page />
      <Footer />
    </>
  );
}
