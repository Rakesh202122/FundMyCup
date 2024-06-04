import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 md:gap-20 md:text-5xl text-3xl justify-center items-center">
          Buy Me a Chai{" "}
          <span>
            {/* <img src="/tea.png" alt="" width={80} /> */}
            <img src="/coffee.gif" alt="" width={100} />
          </span>
        </div>
        <p className="text-center text-sm md:text-xl md:text-left">
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div>
          <Link href={"/login"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          </Link>

          <Link href={"/about"} >
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
          </Link>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coins.gif"
              alt=""
            />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coins.gif"
              alt=""
            />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              src="/coins.gif"
              alt=""
            />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h1>

       <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
       <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QtaorVNAwbI?si=5DRgrSOrbTxFQTa-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
       </div>

      </div> */}

    </>
  );
}
