import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <script type="text/javascript">
      (function(window, document, dataLayerName, id) {
      window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
      function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
      var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
      var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
      tags.async=!0,tags.src="https://pyo.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
      !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
    })(window, document, 'dataLayer', '04c16cb7-9051-4697-9c87-3c38bb456d1e');
    </script>
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Platz und Ruhe</span>
              <span className="section-heading-lower">Wie bieten ihnen</span>
            </h2>
            <p className="mb-3">
              ... eine Freizeitanlage wenige Meter vom Ostorfer See und nur 3km vom Zentrum entfernt. Sie ist ideal geeignet für eine Auszeit. Buchen sie einen von 20 Stellplätzen für ihren Caravan oder nutzen sie den Outdoorplatz für bis zu 150 Personen für ihre nächste Familien- oder Firmenfeier. Es gibt einen großen Grillplatz mit überdachter Terrasse und Seeblick. Hier gehts zu den Angeboten:
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" to="/about">
                Klingt gut!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Baden, Liegen und</span>
                <span className="section-heading-lower">Tretboot fahren </span>
              </h2>
              <p className="mb-0">
                Um das kühle Nass zu genießen können sie nicht nur Baden. Wir bieten auch Tret- Ruder und Stand-Up-boote zu verleih. Außerdem können sie es sich auf einer der vielen gepflegten Liegeflächen gutgehen lassen oder das Volleyballfeld buchen. Bitte verstehen sie, dass Hunde auf den Liegeflächen nicht erlaubt sind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
