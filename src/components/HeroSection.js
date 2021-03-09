import React from "react";
import Button from "./Button";
import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/vid1.mp4" autoPlay loop muted />
      <h1>Rentals Redefined</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="large">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
