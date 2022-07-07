export interface HeaderProps {}

const Header = function (props: HeaderProps): JSX.Element {
  return (
    <nav className="navbar bg-gray-800">
      <div className="container d-flex">
        <h1>
          <a href="/">Post App</a>
        </h1>
        {/* TODO lang selector */}
        <div>menu</div>
      </div>
    </nav>
  );
};

export default Header;
