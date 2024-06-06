import React, { useEffect } from 'react';


const InstagramEmbed = ({ embedUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [embedUrl]);

  return (
    <div className="instagram-embed-wrapper" style={{ maxWidth: '100%', overflow: 'hidden', margin: 'auto' }}>
      <div className="black-rectangle"></div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="13"
        style={{ width: '100%', margin: 'auto', height: '450px', marginRight: '45px'}}
      >
        <a href={embedUrl} style={{marginRight:'45px'}}></a>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
