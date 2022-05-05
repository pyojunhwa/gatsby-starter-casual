import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout noFooter>
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
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Page not found</span>
                <span className="section-heading-lower">Not a valid URL</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    >
  </Layout>
);

export default IndexPage;
