"use client";

import { uselogInModalContext } from "../../Hooks/CoontextsWrapper/useLoginModal";

export default function SignupModal() {
  const { signupModalRef, closeSignupModal } = uselogInModalContext();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up...");
    closeSignupModal();
  };

  return (
    <dialog ref={signupModalRef} className="modal">
      <div className="modal-box">
        <button
          onClick={closeSignupModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Create Account</h3>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
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
            Sign Up
          </button>
        </form>
      </div>
    </dialog>
  );
}
