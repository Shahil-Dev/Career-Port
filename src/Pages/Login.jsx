import Build from '../Components/Build';
import Lottie from 'lottie-react';
import lottieData from '../assets/Lottie_data/Animation - 1751175774669';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext)
  const location = useLocation();
  console.log('Login location:', location);
  const from = location.state || '/';
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // TODO: Add email/password auth logic
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log('Google Sign-In Successful:', user);
        navigate(from)
        // TODO: Redirect or store user info
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Build
        text="Please enter your credentials to log in."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="lg:pt-7 petrona text-[20px] md:text-5xl text-center flex justify-center "
      />

      <section className="p-6 text-gray-100 dark:text-gray-800">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="bg-[url(public/images/13.jpg)] w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <h1 className="text-4xl font-extrabold text-gray-50 dark:text-gray-900">
              Log in with <br />
              <span className="text-5xl text-violet-600">Career Port</span>
            </h1>
            <p className="my-8">
              Log in to your account to explore the latest job opportunities, apply easily, and manage your career journey all in one place.
            </p>

            <form onSubmit={handleLogin} className="self-stretch space-y-3">
              <div>
                <label htmlFor="email" className="text-sm sr-only">Email</label>
                <input name="email" type="email" placeholder="email" className="input w-full" />
              </div>
              <div>
                <label htmlFor="password" className="text-sm sr-only">Password</label>
                <input name="password" type="password" placeholder="enter your password" className="input w-full" />
              </div>
              <button className="w-full btn py-2 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                Login
              </button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                onClick={handleGoogleLogin}
                className="p-3 rounded-sm hover:bg-gray-100 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account?
              <a href="registration" className="text-violet-600 font-semibold hover:underline ml-1">
                Sign up
              </a>
            </p>
          </div>

          <div className="object-cover w-full rounded-md xl:col-span-3 bg-white">
            <Lottie className="w-full h-full" animationData={lottieData} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
