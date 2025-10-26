
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
        <div className="flex flex-col">
          <Nav />
          <div className="relative w-full overflow-x-auto h-20">
          <Trending />
          </div>
          <div className=" flex lg:flex-row flex-col p-5">
            <Chart />
            <News />
          </div>
        </div>
      </section>
    </>
  );
}
