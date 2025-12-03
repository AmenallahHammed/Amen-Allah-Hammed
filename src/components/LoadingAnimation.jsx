import { useState, useEffect } from 'react';
import './LoadingAnimation.css';

export default function LoadingAnimation({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete && onComplete(), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${progress === 100 ? 'fade-out' : ''}`}>
            <div className="loading-content">
                {/* Animated Logo/Shape */}
                <div className="loading-cube">
                    <div className="cube-face front"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                </div>

                {/* Loading Text */}
                <div className="loading-text">
                    <h1 className="text-gradient">INITIALIZING</h1>
                    <div className="loading-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="loading-progress">
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="progress-percentage">{progress}%</div>
                </div>
            </div>

            {/* Background Grid */}
            <div className="loading-grid"></div>
        </div>
    );
}
