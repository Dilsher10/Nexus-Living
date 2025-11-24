"use client";
import React from 'react';

const TopPanel = () => {
  return (
    <div className="mry-top-panel">
      <div className="mry-logo-frame">
        <a href="/" className="mry-default-link mry-anima-link">
          <img className="mry-logo" src="/assets/img/logo.svg" alt="Nexus Living" />
        </a>
      </div>
      <div className="mry-menu-button-frame">
        <div className="mry-label">Menu</div>
        <div className="mry-menu-btn mry-magnetic-link">
          <div className="mry-burger mry-magnetic-object">
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPanel