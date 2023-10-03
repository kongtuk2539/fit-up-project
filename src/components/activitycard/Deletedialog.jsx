import React from "react";

const Deletedialog = ({ toggleDialogdel }) => {
  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    if (response.status === 200) {
      setReload(!reload);
    }
    console.log(response);
  };

  return (
    <div className="z-50 flex justify-center items-center h-screen animate-in zoom-in-50 bg-gray-op90">
      <div className="relative w-343 h-488 bg-black-medium rounded-lg my-6 flex flex-col items-center px-10 pt-55 lg:w-396 lg:justify-center">
        <img
          src="./src/assets/image/Activity/bgdelete.png"
          className="absolute h-full w-full bottom-6 lg:top-0 lg:h-auto"
          alt="bgWarning"
        />
        <img
          src="./src/assets/image/Activity/delete.png"
          className="z-50"
          alt="Warning"
        />
        <div className="z-50">
          <h3 className="font-orbitron text-xl font-bold w-262 h-auto text-center mt-11 mb-2">
            Delete Activity
          </h3>
          <p className="font-roboto-mono text-black-light w-262 h-auto mb-8 text-center">
            Deleting an activity will permanently remove it from your record.
          </p>
        </div>
        <div className="z-50 flex gap-4">
          <button
            onClick={toggleDialogdel}
            className="clickbutton flex justify-center items-center bg-white w-150 p-3 rounded text-gray-op90 font-roboto-mono font-bold"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteData(id);
            }}
            className="clickbutton flex justify-center items-center bg-pink w-150 p-3 rounded text-black-dark font-roboto-mono font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletedialog;
