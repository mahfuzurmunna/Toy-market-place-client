

const Loading = () => {
  return (
    <div className="my-container">
      <div className="mx-auto text-center h-[50vh] flex flex-col justify-center items-center">
        <div>
          <span className="text-2xl">Loading</span>
        </div>
        <div>
          <span className="loading loading-infinity w-[100px] text-accent3"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;