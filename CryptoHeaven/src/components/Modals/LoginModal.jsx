"use client";

import { uselogInModalContext } from "../../Hooks/CoontextsWrapper/useLoginModal";

export default function LoginModal() {
  const { loginModalRef, closeLoginModal, openSignupModal, signupModalRef } =
    uselogInModalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...");
    closeLoginModal();
  };

  const handleCreateAccount = () => {
    console.log("Clcik is Wotrking");
    closeLoginModal();
    openSignupModal();
    console.log(openSignupModal());
  };

  return (
    <dialog ref={loginModalRef} className="modal">
      <div className="modal-box">
        <button
          onClick={closeLoginModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Login</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <button
            onClick={handleCreateAccount}
            className="text-blue-600 underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </dialog>
  );
}
