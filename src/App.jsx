import DogeFace from "./images/dogeFace.png";

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>zzeongho's Portfolio</div>
          {/* <div>
            <img className="w-12 left-0" src={DogeFace} alt="Doge"></img>
          </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-yellow-300 btn-style">Portfolio</li>
            <li className="bg-green-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* ovject-fit:cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl ">
              프로젝트 이미지
            </div>

            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
