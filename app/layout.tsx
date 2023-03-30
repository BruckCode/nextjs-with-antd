import "../public/antd.min.css";
import "../styles/globals.css";
import Provider from "./provider";

export const metadata = {
  title: "EJ Manager",
  description: "Eine App für alles runde um die EJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
