const PuppyVideo = ({src}) => {
  return (
    <video
      className="mt-5 rounded-xl"
      playsInline
      src={src}
      autoPlay
      loop
      muted
    />
  );
};

export default PuppyVideo;
