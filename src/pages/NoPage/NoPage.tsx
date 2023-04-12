import React from "react";
import "./NoPage.scss";

export default function NoPage(props: { language: string }) {
  return (
    <div className="error-404-container">
      <h2>Page Not Found</h2>
      <p>
        Sorry it looks like that page doesn't exist! Make sure there are no
        typos in the URL or return to the home page.
      </p>
    </div>
  );
}
