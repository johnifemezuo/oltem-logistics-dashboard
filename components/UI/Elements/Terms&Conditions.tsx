import React from "react";

function TermsAndConditions() {
  return (
    <p className="text-sm text-left ">
      <span className="text-zinc-500">By submitting, you agree to our</span>
      <a
        href="https://zigah.co/terms-of-service"
        className="underline text-primary-color"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Terms of use.
      </a>{" "}
      and{" "}
      <a
        href="https://zigah.co/privacy-policy"
        className="underline text-primary-color"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Privacy Policy.
      </a>
    </p>
  );
}

export default TermsAndConditions;
