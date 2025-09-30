import { motion } from "motion/react"
import teamImg1 from '../../assets/teamImg/teamImg1.jpg'
import teamImg2 from '../../assets/teamImg/teamImg2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
            <motion.img
            animate={{y: [50, 100, 50]}}
            transition={{duration: 8, repeat: Infinity }}
          src={teamImg1}
          className=" w-110 border-s-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl"
        />
            <motion.img
            animate={{x: [80, 160, 80]}}
            transition={{duration: 5, repeat: Infinity}}
          src={teamImg2}
          className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl right-0 bottom-0"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
