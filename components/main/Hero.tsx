import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const technologies = [
    { name: "CSS", image: "/css.png" },
    { name: "Express", image: "/express.png" },
    { name: "Firebase", image: "/Firebase.png" },
    { name: "Html", image: "/html.png" },
    { name: "NodeJS", image: "/node-js.png" },
    { name: "Next", image: "/next.png" },
    { name: "React", image: "/react.png" },
    { name: "TypeScript", image: "/ts.png" },
  ];

  return (
    <div 
      className="hero-container min-h-screen relative pt-16"
      style={{
        backgroundImage: "url('/hero-bg3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 "></div>
      
      <div className="hero-content-wrapper relative z-10">
        <div className="hero-text-section">
          <HeroContent/>
        </div>
        
        <div className="hero-video-section">
          <div className="video-wrapper">
            <video 
              autoPlay
              muted
              loop
              className="video-element"
            >
              <source src='/RobotAparicion.mp4' type='video/mp4'/>
              <source src='/RobotAparicion.webm' type='video/webm'/>
              Tu navegador no soporta el elemento video.
            </video>
          </div>
        </div>
      </div>
      
      <div className="tech-carousel-ribbon relative z-10">
        <div className="carousel-overlay left-overlay"></div>
        <div className="carousel-overlay right-overlay"></div>
        
        <div className="carousel-track">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="carousel-set">
              {technologies.map((tech, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="tech-item"
                >
                  <img 
                    src={tech.image} 
                    alt={tech.name}
                    className="tech-image-png"
                  />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
