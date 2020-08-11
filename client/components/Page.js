import Header from "./Header";
import Meta from "./Meta";

const Page = ({ children }) => {
  return (
    <div className="page">
      <Meta />
      <Header />
      {children}
    </div>
  );
};

export default Page;
