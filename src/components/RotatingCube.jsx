import './RotatingCube.css';

export default function RotatingCube() {
    return (
        <div className="cube-container">
            <div className="cube-wrapper">
                <div className="cube">
                    <div className="cube-face front"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                </div>
            </div>

            {/* Particles */}
            <div className="particles">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            '--delay': `${i * 0.1}s`,
                            '--x': `${Math.random() * 200 - 100}px`,
                            '--y': `${Math.random() * 200 - 100}px`,
                            '--duration': `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
