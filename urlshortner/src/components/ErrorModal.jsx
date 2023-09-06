import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../store/urlSlice";
import { MdClose } from "react-icons/md";
const ErrorModal = ({ children }) => {
  const error = useSelector((state) => state.urls.error);
  const dispatch = useDispatch();
  return (
    <>
      {error ? (
        <article className="absolute bottom-5 right-5 bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
          <header className="bg-red-400 py-1 px-2 text-white flex flex-row justify-between items-center">
            Error
            <button
              onClick={() => {
                dispatch(clearError());
              }}
            >
              <MdClose />
            </button>
          </header>
          <div className="p-2">
            <p className="break-word">{error}</p>
          </div>
        </article>
      ) : (
        <></>
      )}
      <>{children}</>
    </>
  );
};

export default ErrorModal;
