import { Container } from "react-bootstrap";
import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="Data">
      <Puff
        height="130"
        width="130"
        radius="10"
        color="midnightblue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
