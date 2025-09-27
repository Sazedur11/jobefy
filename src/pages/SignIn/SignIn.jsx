import Lottie from "lottie-react";
import singInLottie from '../../assets/signIn.json'

const SignIn = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className='w-120' animationData={singInLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
                <fieldset className="fieldset">
                <h1 className="text-5xl font-bold my-4">Sign In</h1>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sing In</button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;