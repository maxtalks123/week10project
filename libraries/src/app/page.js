import { elevator } from "./components/elevator";
// import "ding.mp3";
// import "demo_music_elevator.mp3";
import "/Users/Max/software-development-projects/week10/week10project/libraries/public/ding.mp3"
import "/Users/Max/software-development-projects/week10/week10project/libraries/public/demo_music_elevator.mp3"

export default function Home() {
  // let mainAudio = demo_music_elevator.mp3;
  // let endAudio = ding.mp3
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {elevator mainAudio=demo_music_elevator.mp3 endAudio="ding.mp3"}
        {/* mainAudio="demo_music_elevator.mp3" endAudio="ding.mp3" */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Home page
        </p>
      </div>
    </main>
  );
}
