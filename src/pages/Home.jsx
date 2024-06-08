
import { useCandidatContext } from "../context/CandidatContext.jsx";
import React from 'react';
import { useSpring, animated } from 'react-spring';
export default function Home() {
const context = useCandidatContext
const imageProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 2000 }
  });

  return <>

   <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <animated.div style={imageProps}>
          <img src="src/assets/FD.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </animated.div>
      </div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <h1 className="text-7xl font-bold leading-none sm:text-6xl">
        Start your <span className="text-blue-400">journey</span>
    </h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Grow your career as we grow. 
				<br  className="hidden md:inline lg:hidden" />Join the team that's changing IT services
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-400 text-gray-50">Login</a>

	  
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Register</a>
			</div>
		</div>
	</div>


  <section className="py-6 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
		<div className="flex flex-row flex-wrap-reverse justify-center mt-8">
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100 text-gray-800 dark:text-gray-100">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500 bg-gray-500 dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">Leroy Jenkins</p>
					<p>Visual Designer</p>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
					<a rel="noopener noreferrer" href="#" title="Email" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
							<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 text-gray-900 dark:text-gray-50 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600 hover:text-violet-400 hover:dark:text-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
////////////////


	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase text-violet-400 dark:text-violet-600">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900 dark:bg-gray-50">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Beginner</h4>
						<span className="text-6xl font-bold">Free</span>
					</div>
					<p className="mt-3 leading-relaxed text-gray-400 dark:text-gray-600">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="flex-1 mb-6 text-gray-400 dark:text-gray-600">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Get Started</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$24
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Free</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Praesent faucibus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean et lectus blandit</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-800 dark:bg-gray-100 text-violet-400 dark:text-violet-600">Get Started</a>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900 dark:bg-gray-50">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Team</h4>
						<span className="text-6xl font-bold">$72
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed text-gray-400 dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul className="space-y-2 text-gray-400 dark:text-gray-600">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Pro</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-violet-400 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Get Started</a>
				</div>
			</div>
		</div>
	</div>


///////////////////////
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400 dark:bg-violet-600">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900 dark:text-gray-50">
						<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
					</svg>
				</div>
				<span className="self-center text-2xl font-semibold">Brand name</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50 dark:text-gray-900">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-gray-50 dark:text-gray-900">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
///////////






  </>
}


  





