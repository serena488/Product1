import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <section className="Loader">
      <div className="Data">
        <Puff
          height="100"
          width="100"
          radius="9"
          color="#ff4000"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </section>
  );
};
