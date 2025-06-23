import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import { FaAngleDoubleDown } from "react-icons/fa";
import './Login.css';

const ScrollModal = () => {
    const [isOpened, setIsOpened] = useState(false);

    const openModal = () => {
        setIsOpened(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpened(false);
        document.body.style.overflow = "initial";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 3 && !isOpened) {
                setIsOpened(true);
                const scrollDown = document.querySelector(".scroll-down");
                if (scrollDown) {
                    scrollDown.style.display = "none";
                }
                openModal();
            }
        };

        const handleKeyDown = (evt) => {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                closeModal();
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpened]);

    const navigate = useNavigate();

const handleLogin = () => {
  navigate("/home");
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.style.overflow = "auto"; // reset any hidden scroll
  }, 100);
};

 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

    return (
        <>
            <div className="scroll-down">
                <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/20 rotate-45 animate-float"></div>
        <div className="floating-shape absolute top-1/3 right-1/4 w-12 h-12 bg-orange-400/30 rounded-full animate-float-reverse"></div>
        <div className="floating-shape absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-green-400/30 rotate-12 animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start mt-16 min-h-screen px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Container with Glow Effect */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105">
              <img 
                src="logo.webp" 
                className="max-w-[300px] mx-auto h-auto filter drop-shadow-2xl" 
                alt="Hayleys Fentons Logo" 
              />
            </div>
          </div>

          {/* Animated Text Content */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to Your
              <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Digital Hub
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Your one-stop hub for updates, tools, and resources to keep you 
              <span className="text-green-300 font-medium"> connected</span> and 
              <span className="text-orange-300 font-medium"> informed</span>
            </p>

            {/* Features Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Updates</h3>
                <p className="text-blue-200 text-sm">Stay current with company news</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🛠️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Tools</h3>
                <p className="text-blue-200 text-sm">Access essential work resources</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💼</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Resources</h3>
                <p className="text-blue-200 text-sm">Find documents and guides</p>
              </div>
            </div> */}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-blue-200 font-medium tracking-wider text-sm uppercase">
                Scroll down to login
              </p>
              
            </div>
          </div>
        </div>
      </div>
            </div>
            <div className="bg-container"></div>
            <div className={`modal ${isOpened ? 'is-open' : ''}`}>
                <div className="modal-container">
                    <div className="modal-left">
                        <img src="logo.webp" className="max-w-[100px] mt-[-2rem] mr-auto h-auto" alt="Hayleys Fentons Logo" />
                        <p className="modal-desc">Start your day with all the tools and updates you need, in one place.</p>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-500 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="modal-buttons">
                            <a href="/home" className="">Forgot your password?</a>
                            <button onClick={handleLogin} className="input-button">Login</button>
                        </div>
                        <p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
                    </div>

                    <div className="modal-right relative">
                        <img src="bg.jpg" alt="" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <h2 className="text-4xl font-bold mb-60">WELCOME!</h2>
                            </div>
                        </div>
                    </div>
                    <button className="icon-button close-button" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                        </svg>
                    </button>
                </div>
                
                <button className="modal-button" onClick={openModal}>
                    <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:transform group-hover:scale-110">
                  <FaAngleDoubleDown className="w-6 h-6 text-white animate-bounce" />
                </div>
              </div>
                </button>
            </div>
        </>
    );
};

export default ScrollModal;