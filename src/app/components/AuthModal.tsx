import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { AuthModalInputs } from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  return (
    <div>
      <button className="text-white" onClick={handleOpen}>
        {renderContent("Log In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`flex flex-col gap-5 ${isSignIn ? "w-64" : "w-96"}`}>
            <h1 className="text-lg font-semibold">
              {isSignIn ? "Log In" : "Sign Up"}
            </h1>
            <AuthModalInputs isSignIn={isSignIn} />
            {isSignIn ? (
              <>
                <div className="flex justify-end -mt-2">
                  <p className="text-blue-700 text-xs">Forgot Password?</p>
                </div>
                <button className="bg-blue-500 text-white p-1 rounded">
                  Log In
                </button>
              </>
            ) : (
              <>
                <div className="text-[10px] bg-gray-100 text-gray-500 p-1">
                  This site is protected by reCAPTCHA and the{" "}
                  <span className="text-blue-500">Google Privacy Policy</span>{" "}
                  and <span className="text-blue-500">Terms of Service</span>{" "}
                  apply.
                </div>
                <p className="text-[10px]">
                  By selecting Agree & Continue below, I agree to the DoneDeal{" "}
                  <span className="text-blue-500">Terms of Use</span> and{" "}
                  <span className="text-blue-500">Privacy Policy</span>
                </p>
                <button className="bg-blue-500 text-white p-1 rounded">
                  Agree & Continue
                </button>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
