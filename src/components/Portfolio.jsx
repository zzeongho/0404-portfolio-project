import PortfolioCard from "./PortfolioCard";
import portfoiloDator from "../PortfolioDate.json";
const Portfolio = () => {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {portfoiloDator.map((v, i) => {
        return (
          <PortfolioCard
            key={i}
            pimage={v.pimage}
            ptitle={v.ptitle}
            pConstructor={v.pConstructor}
          />
        );
      })}
    </ul>
  );
};

export default Portfolio;
