import React from "react";
import pokemonLogo from "@/assets/pokemon_logo.svg";
import pikachu from "@/assets/pikachu.png"; // Image du Pokémon

const Game: React.FC = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center relative overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #C0F2E9, #C4D5FA, #F6C093)",
      }}
    >
      {/* Spacer pour pousser le header au milieu de l'écran */}
      <div className="flex-grow"></div>
      <header className="text-center">
        <img
          src={pokemonLogo}
          alt="Pokemon Logo"
          className="w-64 h-auto mx-auto animate-pulse drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mt-6 text-black-700 drop-shadow-md">
          Welcome to the Pokémon World
        </h1>
        <p className="mt-3 text-xl text-gray-800">
          Discover, collect, and battle with Pokémon!
        </p>
        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:translate-y-1 hover:scale-110 duration-300">
          Start Your Journey
        </button>
      </header>
      {/* Spacer pour équilibrer l'espace en bas avant le footer */}
      <div className="flex-grow"></div>
      <footer className="w-full text-center py-4">
        <p className="text-sm text-gray-600">
          © 2024 Pokémon. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Twitter
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            Instagram
          </a>
        </div>
      </footer>

      {/* Image du Pokémon qui se balade */}
      <img
        src={pikachu}
        alt="Pikachu"
        className="absolute bottom-0 left-0 w-32 animate-walk"
      />
    </div>
  );
};

export default Game;
