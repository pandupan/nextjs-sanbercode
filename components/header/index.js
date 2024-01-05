import { withAuth } from "../with-auth";  
import ListMenu from "../menu";

function Header() {
  return (
  <div className="bg-sky-300 w-full text-xl">
    <ListMenu/>
  </div>
  );
}

export default withAuth(Header);