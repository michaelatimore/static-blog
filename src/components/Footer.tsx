import Udlogo from "../assets/underdog.jpg";
import Reactlogo from "../assets/react.svg";

export function Footer() {
  return (
    <footer className="container relative mx-auto bg-white px-6 pb-12 dark:bg-black dark:text-white">
      <img
        src={Udlogo}
        className="absolute bottom-0 left-4 top-0 m-auto h-10 w-auto"
      />
      <img
        src={Reactlogo}
        className="absolute bottom-0 right-4 top-0 m-auto h-10 w-auto"
      />

      <div className="m-5">
        <p className="text-center text-gray-600">
          Kenson-johnson-pod All Right Reserved
        </p>
      </div>
    </footer>
  );
}
