import { ImageType } from "../../utils/types";

type Props = {
  slide: ImageType | React.ReactElement;
};

const SlideItem: React.FC<Props> = ({ slide }) => {

  if (typeof slide === "object") {

    const { description, artist, name, images, year, source } =
      slide as ImageType;

    return <div>
        <div>
            <img src={images.thumbnail} alt={name} />
            <button>view image</button>
            <div>
                <h2>{name}</h2>
                <h3>{artist.name}</h3>
                <img src={artist.image} alt="artist" />
            </div>
        </div>
    </div>;
  } else {
    return slide;
  }
};
export default SlideItem;
