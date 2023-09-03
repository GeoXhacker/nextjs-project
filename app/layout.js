import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  desicription: "Discover & Share",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <Nav />
        <main className="app">{children}</main>

        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
