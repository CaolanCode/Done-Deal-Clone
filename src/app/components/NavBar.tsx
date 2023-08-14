import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-around items-center text-white">
      <div className="flex text-xl justify-between items-center gap-2">
        <h1>
          Done<span className="font-bold">Deal</span>
        </h1>
        {title.length > 0 ? (
          <div className="bg-white text-black font-bold p-1 rounded">
            {title}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div>
          <SearchIcon />
          Search
        </div>
        <div className="text-lg px-10 py-2 bg-green-500 rounded">Place Ad</div>
        <div>Log In</div>
        <div>Sign Up</div>
        <div>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};
