
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";

export default function Home() {
  return (
    <>
      <section className="flex flex-row">
        <Sidebar />
        <Nav />

      </section>
    </>
  );
}
