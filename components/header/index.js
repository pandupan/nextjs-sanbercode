import { withAuth } from "../with-auth";  
import Menu from "../menu";

function Header() {
  return (
  <div className="bg-sky-300 w-full text-xl">
    <Menu/>
  </div>
  );
}

export default withAuth(Header);