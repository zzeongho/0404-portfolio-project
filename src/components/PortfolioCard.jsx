function PortfolioCard(props) {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl">
      {/* ovject-fit:cover */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
        {props.pimage}
      </div>

      <div className="text-xl font-bold mt-2 mx-2">{props.ptitle}</div>
      <div className="mt-2 mx-2">{props.pConstructor}</div>
    </li>
  );
}

export default PortfolioCard;
