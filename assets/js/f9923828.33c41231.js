"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[220],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(7462),o=(t(7294),t(3905));const r={id:"running-tasks",title:"Running Tasks",toc_max_heading_level:2},i="Running Tasks",s={unversionedId:"running-tasks",id:"running-tasks",title:"Running Tasks",description:"It can be common for Rails engineers to fire up the Rails console for some quick debugging or to run code like a Rake task. That said, console'ing into a Lambda function is simply not an option and requires a different solution for on-demand tasks.",source:"@site/docs/running-tasks.mdx",sourceDirName:".",slug:"/running-tasks",permalink:"/docs/running-tasks",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/master/docs/running-tasks.mdx",tags:[],version:"current",frontMatter:{id:"running-tasks",title:"Running Tasks",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"ActiveJob & Background Processing",permalink:"/docs/activejob"},next:{title:"Custom Domain Names",permalink:"/docs/custom-domain"}},l={},u=[{value:"Lamby Runner Event",id:"lamby-runner-event",level:2},{value:"Customizing Runner Patterns",id:"customizing-runner-patterns",level:2},{value:"Function Timeout Property",id:"function-timeout-property",level:2},{value:"GitHub Actions Invoke Example",id:"github-actions-invoke-example",level:2}],c=(p="DocLink",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const m={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-tasks"},"Running Tasks"),(0,o.kt)("p",null,"It can be common for Rails engineers to fire up the ",(0,o.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/command_line.html#bin-rails-console"},"Rails console")," for some quick debugging or to run code like a Rake task. That said, console'ing into a Lambda function is simply not an option and requires a different solution for on-demand tasks."),(0,o.kt)("h2",{id:"lamby-runner-event"},"Lamby Runner Event"),(0,o.kt)("p",null,"Running a task on your Rails application can be done by sending your Lambda an event in the following format. This event can happen in any way that makes sense for you. For example, you could use the ",(0,o.kt)("a",{parentName:"p",href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/invoke.html"},"AWS CLI's invoke")," feature in a deploy pipeline. Another simple method would be to use the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/improved-testing-on-the-aws-lambda-console/"},"test feature for Lambda")," within the AWS Console. You cold even use a ",(0,o.kt)("a",{parentName:"p",href:"#github-actions-invoke-example"},"GitHub Action")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lamby": {\n    "runner": "./bin/rails db:migrate"\n  }\n}\n')),(0,o.kt)("h2",{id:"customizing-runner-patterns"},"Customizing Runner Patterns"),(0,o.kt)("p",null,"The runner has a single default expression check of ",(0,o.kt)("inlineCode",{parentName:"p"},"%r{\\A\\./bin/(rails|rake) db:migrate.*}")," which limits the type of commands executed. This can be cleared to deny any command(s) or you can add addition pattern matchers via the Lamby config. To do so, add lines like these in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.rb")," file below the ",(0,o.kt)("inlineCode",{parentName:"p"},"require 'lamby'"),". For example, the first line would clear all patterns and allow no commands, the second would allow a simple bin file to be added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"Lamby.config.runner_patterns.clear\nLamby.config.runner_patterns.push %r{\\A/bin/foo.*}\n")),(0,o.kt)("h2",{id:"function-timeout-property"},"Function Timeout Property"),(0,o.kt)("p",null,"You may want to consider changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Timeout")," property of your ",(0,o.kt)("inlineCode",{parentName:"p"},"RailsLambda")," resource in your ",(0,o.kt)("inlineCode",{parentName:"p"},"template.yaml")," from 30s to something longer. A Lambda function can have a maximum of 15m execution time. Just remember that API Gateway integration will always be limited to 30s under the function's timeout. So these timeouts can operate independently."),(0,o.kt)("h2",{id:"github-actions-invoke-example"},"GitHub Actions Invoke Example"),(0,o.kt)("p",null,"Similar to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Deploy with GitHub Actions")," example in our ",(0,o.kt)(c,{id:"quick-start",mdxType:"DocLink"})," guide, here is an ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke.yml")," workflow example that uses the AWS CLI to invoke your function with the needed JSON event format detailed above. Here is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," option you could paste into the workflow dispatch window. Note that quotes have to be escaped to flow through to GitHub Actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"lamby":{"runner":"./bin/rails runner \\\\"puts(\\\'HELLO\\\')\\\\""}}\n')),(0,o.kt)("p",null,"This example above uses ",(0,o.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/command_line.html#bin-rails-runner"},"Rails runner")," to invoke arbitrary code in a non-interactive way. \u26a0\ufe0f Please ensure the ",(0,o.kt)("inlineCode",{parentName:"p"},"--stack-name")," value below matches the same value in your ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/_deploy")," file and replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"myapp-production")," value with that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Invoke\non:\n  workflow_dispatch:\n    inputs:\n      payload:\n        description: JSON Event Payload\n        required: true\njobs:\n  invoke:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Install AWS CLI\n        uses: unfor19/install-aws-cli-action@v1\n      - name: Configure AWS\n        uses: aws-actions/configure-aws-credentials@v1\n        with:\n          aws-access-key-id: { { "${{ secrets.AWS_ACCESS_KEY_ID }}" } }\n          aws-secret-access-key: { { "${{ secrets.AWS_SECRET_ACCESS_KEY }}" } }\n          aws-region: us-east-1\n      - name: Invoke\n        run: |\n          echo $\'${{ github.event.inputs.payload }}\' > payload.json\n          FUNCTION_NAME=$(aws cloudformation describe-stack-resources \\\n            --stack-name "myapp-production" \\\n            --query "StackResources[?LogicalResourceId==\'RailsLambda\'].PhysicalResourceId" \\\n            --output text)\n          aws lambda invoke \\\n            --function-name "$FUNCTION_NAME" \\\n            --cli-binary-format raw-in-base64-out \\\n            --payload file://./payload.json \\\n            /dev/stdout | jq -r .body\n')))}d.isMDXComponent=!0}}]);