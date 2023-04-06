import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
  } from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header className='mb-8' {...slideAnimation("down")}>
                        <motion.img 
                            animate={{
                                x: [0, 50, 0],
                                y: [0, 50, 0],
                                rotate: 360,
                                scale: [1, 2, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src='./threejs.png'
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                DALL-E <br /> DZiGN.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create a unique design with OpenAI and apply it to the 3D customization tool. <strong>Unleash your imagination.</strong>
                            </p>

                            <CustomButton 
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home