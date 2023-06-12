/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Nav({ handleNavigation, currentSection }) {
  // Inisialisasi state activeNav dengan nilai awal berdasarkan path URL saat ini
  const [activeNav, setActiveNav] = useState(getCurrentPath());

  // Fungsi untuk mendapatkan path URL saat ini
  function getCurrentPath() {
    return window.location.pathname; // Mengambil path URL saat ini
  }

  // Efek samping untuk memperbarui activeNav saat path URL berubah
  useEffect(() => {
    function handlePathChange() {
      setActiveNav(getCurrentPath());
    }

    window.addEventListener("popstate", handlePathChange); // Mendengarkan perubahan path URL saat pengguna menavigasi kembali

    return () => {
      window.removeEventListener("popstate", handlePathChange); // Membersihkan event listener saat komponen unmount
    };
  }, []);

  // Efek samping untuk memperbarui activeNav saat komponen dimuat
  useEffect(() => {
    setActiveNav(getCurrentPath());
  }, []);

  return (
    <div className="h-max container pt-7 fixed pb-2  top-0 backdrop-blur-md ">
      <div className=" flex flex-col justify-center items-center gap-4 relative w-screen">

        <div className="flex flex-col items-center gap-3 ">
          <div className="bg-emerald-800  h-[60px] w-[60px] rounded-full flex items-center justify-center">
            <h1 className="text-[50px] font-bold font-nunito uppercase">srv</h1>
          </div>
          <p className="block font-semibold">SUCCESS RENT VEHICLE</p>
        </div>

        <div className="">
          <nav className="cursor-pointers flex  justify-between bg-amber-200 items-center w-[340px] h-12 rounded-3xl">
            <a
              href="#home"
              className={`${
                activeNav === "#home" ? "bg-amber-50" : "hover:bg-amber-50"
              } ml-1 py-2 px-3 rounded-full`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </a>
            <a
              href="#car"
              className={`${
                activeNav === "/car" ? "bg-amber-50" : "hover:bg-amber-50"
              } py-2 px-3 rounded-full`}
              onClick={() => handleNavigation('car')}
            >
              Car
            </a>
            <a
              href="#motor"
              className={`${
                activeNav === "#motor" ? "bg-amber-50" : "hover:bg-amber-50"
              } py-2 px-3 rounded-full`}
              onClick={() => handleNavigation('motor')}
            >
              Motor
            </a>
            <a
              href="#other"
              className={`${
                activeNav === "other" ? "bg-amber-50" : "hover:bg-amber-50"
              } mr-1 py-2 px-3 rounded-full`}
              onClick={() => handleNavigation('other')}
            >
              Others
            </a>
          </nav>
        </div>

        <div className="absolute top-5 right-5">
          <a
            href="#footer"
            className="bg-red-500 py-1.5 px-3 text-xs rounded-lg text-amber-100 shadow-lg hover:bg-slate-900 hover:text-amber-200 transition-all duration-200"
          >
            RENT NOW
          </a>
        </div>

      </div>
    </div>
  );
}

export default Nav;
