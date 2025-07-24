import SplashWrapper from "@/components/SplashWrapper";
import Link from "next/link";

export default function HomePage() {
  return (
    <SplashWrapper>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white/30 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/40 px-10 py-14 min-w-[340px] max-w-[440px] flex flex-col items-center">
          <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-tr from-[#ffb6ea] via-[#a18fff] to-[#7f5fff] shadow-[0_0_40px_12px_#ffb6ea55,0_2px_12px_#fff4] border-4 border-white/40 flex items-center justify-center mb-10 animate-spin-slow">
            <span className="text-[54px] font-extrabold select-none font-montserrat tracking-wider text-white drop-shadow-[0_4px_24px_#ffb6ea]">
              <span className="text-[#7f5fff]">C</span>
              <span className="text-[#ffb6ea]">y</span>
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white text-center drop-shadow-[0_2px_32px_#ffb6ea] font-montserrat tracking-widest mb-4">
            CyRays
          </h1>
          <p className="text-xl font-semibold text-white/90 text-center drop-shadow-[0_1px_12px_#fff8] font-montserrat tracking-wide mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            cumque.
          </p>
          <Link
            href="/todos"
            className="bg-gradient-to-r from-[#ffb6ea] to-[#7f5fff] text-white px-10 py-4 rounded-2xl font-bold text-[1.2rem] tracking-wider shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl mt-3"
          >
            Todos
          </Link>
        </div>
      </main>
    </SplashWrapper>
  );
}
