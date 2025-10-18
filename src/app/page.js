
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";
import Trending from "./components/trending";
import Chart from "./components/chart";
import News from "./components/news";

export default function Home() {
  return (
    <>
      <section className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Nav />
          <Trending />
          <div className=" flex flex-col md:flex-row p-5">
            <Chart />
            <News />
          </div>
        </div>
      </section>
    </>
  );
}
