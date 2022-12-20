"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const r={anatomy:"How Lamby Works",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function i(e){let{id:t,name:a}=e;const i=a||r[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return n.createElement("a",{href:`/docs/${t}`},i)}},5832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(304),s=a(941),o=a(4996);const l={id:"assets",title:"JavaScript & Assets",toc_max_heading_level:2},c="JavaScript & Assets",p={unversionedId:"assets",id:"assets",title:"JavaScript & Assets",description:"Assets require a  to link properly when using API Gateway.",source:"@site/docs/assets.mdx",sourceDirName:".",slug:"/assets",permalink:"/docs/assets",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/master/docs/assets.mdx",tags:[],version:"current",frontMatter:{id:"assets",title:"JavaScript & Assets",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"Database & VPCs",permalink:"/docs/database"},next:{title:"Logging & Observability",permalink:"/docs/observability"}},d={},u=[{value:"CSS &amp; JavaScript Ready!",id:"css--javascript-ready",level:2},{value:"Serving Static Assets",id:"serving-static-assets",level:2},{value:"Using CloudFront",id:"using-cloudfront",level:2}],m={toc:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"javascript--assets"},"JavaScript & Assets"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Assets require a ",(0,r.kt)(i.Z,{id:"custom-domain",name:"Custom Domain Name",mdxType:"DocLink"})," to link properly when using API Gateway.")),(0,r.kt)("p",null,"Some might remember a process where ",(0,r.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/asset_pipeline.html#in-production"},"precompiling Rails CSS & JavaScript assets")," meant having Node and other dependencies installed on our production servers. In contrast, using container practices which embrace a multi-stage build process only has Node.js installed on the build image. Compiled assets along with other application code and dependencies are copied to the final production ECR image. This helps keep the production image small and secure."),(0,r.kt)("h2",{id:"css--javascript-ready"},"CSS & JavaScript Ready!"),(0,r.kt)("p",null,"Our ",(0,r.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," cookiecutter project is ready to hit the ground running with all the latest Rails defaults for JavaScript & CSS development. We do this by adding Node.js to the development container which is also used to build your production image. See our ",(0,r.kt)(i.Z,{id:"anatomy",mdxType:"DocLink"})," guide for details."),(0,r.kt)("p",null,"For example, we can add the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rails/tailwindcss-rails"},"TailwindCSS Rails")," gem, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"./bin/rails tailwindcss:install")," command, and edit the temporary starter index page like so. Once redeployed, we should see our Hello TailwindCSS page working correctly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Gemfile"',title:'"Gemfile"'},"gem 'tailwindcss-rails'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app/views/application/index.html.erb"',title:'"app/views/application/index.html.erb"'},'<h1 class="\n    text-center\n    text-9xl\n    text-blue-400\n    mt-5\n    ">Hello TailwindCSS</h1>\n')),(0,r.kt)(s.Z,{alt:"TailwindCSS on Rails on Lambda",sources:{light:(0,o.Z)("/img/docs/tailwindcss-light.png"),dark:(0,o.Z)("/img/docs/tailwindcss-dark.png")},mdxType:"ThemedImage"}),(0,r.kt)("h2",{id:"serving-static-assets"},"Serving Static Assets"),(0,r.kt)("p",null,"Our ",(0,r.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," cookiecutter project leverages Rails' built in ability to serve static assets. We do this by setting this environment variable in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"ENV RAILS_SERVE_STATIC_FILES=1\n")),(0,r.kt)("p",null,"We also add this configuration to your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/environments/production.rb")," file. In this case we are setting the cache control to 30 days, which you can change. The ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Lamby-Base64")," header signals to the Lamby rack adapter that the content requires base64 binary encoding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="config/environments/production.rb"',title:'"config/environments/production.rb"'},"config.public_file_server.headers = {\n  'Cache-Control' => \"public, max-age=#{30.days.seconds.to_i}\",\n  'X-Lamby-Base64' => '1'\n}\n")),(0,r.kt)("h2",{id:"using-cloudfront"},"Using CloudFront"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudfront/"},"CloudFront")," is an amazing CDN and is pretty easy to setup with Rails. No crazy S3 bucket is needed. Simply point CloudFront to your Rails app and allow the origin to set the cache headers. Because we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"public_file_server")," headers above, everything should work out perfectly."))}g.isMDXComponent=!0}}]);