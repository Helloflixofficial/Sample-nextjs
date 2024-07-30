import VideoPlayer from "./Player";
const Home: React.FC = () => {
  return (
    <div>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};
export default Home;
