"use client";
import React from 'react'

const Preloader = () => {
    return (
        <div className="mry-preloader mry-active">
            <div className="mry-preloader-content">
                <img
                    className="mry-logo mry-mb-20" id='loader-logo'
                    src="/assets/img/preloader-logo.png"
                    alt="Nexus Living"
                />
                <div className="mry-loader-bar">
                    <div className="mry-loader" />
                </div>
                <div className="mry-label">Please wait</div>
            </div>
        </div>
    )
}

export default Preloader