import { useMediaContext } from "mediastore/MediaContext";
import Front from "front_and_sidebar/Front";

const Home = () => {
  const { mediaItems } = useMediaContext();
  console.log("Media items in Home:", mediaItems);

  return <div>{mediaItems && <Front mediaItems={mediaItems} />}</div>;
};

export default Home;
