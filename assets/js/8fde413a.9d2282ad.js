"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[11123],{62402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={title:"How to Implement Feature Flags in Python",slug:"/feature-flag-tutorials/python"},r=void 0,i={unversionedId:"feature-flag-tutorials/python/implementing-feature-flags",id:"feature-flag-tutorials/python/implementing-feature-flags",title:"How to Implement Feature Flags in Python",description:"Python is a popular programming language used for a variety of software applications and services. It is supported widely in the developer community and is known for being intuitive, readable, and friendly to new and experienced developers.",source:"@site/docs/feature-flag-tutorials/python/implementing-feature-flags.md",sourceDirName:"feature-flag-tutorials/python",slug:"/feature-flag-tutorials/python",permalink:"/feature-flag-tutorials/python",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/feature-flag-tutorials/python/implementing-feature-flags.md",tags:[],version:"current",frontMatter:{title:"How to Implement Feature Flags in Python",slug:"/feature-flag-tutorials/python"},sidebar:"documentation",previous:{title:"React Feature Flag Examples",permalink:"/feature-flag-tutorials/react/examples"},next:{title:"A/B Testing in Flutter using Unleash and Mixpanel",permalink:"/feature-flag-tutorials/flutter/a-b-testing"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Unleash best practice for backend apps",id:"1-unleash-best-practice-for-backend-apps",level:2},{value:"2. Install a local feature flag provider",id:"2-install-a-local-feature-flag-provider",level:2},{value:"3. Create and configure the feature flag",id:"3-create-and-configure-the-feature-flag",level:2},{value:"4. Add Unleash to a Python app",id:"4-add-unleash-to-a-python-app",level:2},{value:"5. Use a feature flag to release a delete method",id:"5-use-a-feature-flag-to-release-a-delete-method",level:2},{value:"6. Verify the toggle experience",id:"6-verify-the-toggle-experience",level:2},{value:"7. Improve a feature flag implementation with error handling",id:"7-improve-a-feature-flag-implementation-with-error-handling",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function h(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python")," is a popular programming language used for a variety of software applications and services. It is supported widely in the developer community and is known for being intuitive, readable, and friendly to new and experienced developers."),(0,l.kt)("p",null,"Leveraging feature flags allows developers to toggle new features on and off, whether you\u2019re experimenting in your local environment, testing for QA purposes, or rolling out changes to users in production. Feature flags play a critical role in optimizing the entire software development lifecycle. With Unleash, an open-source feature flag service, you can use our tooling to implement feature flags into your application and release new features faster, strategically, and safely. But how can you do this in Python?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/pamelafox/flask-surveys-container-app"},"Flask Surveys Container App")," is an example Python application using ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/3.0.x/"},"Flask")," and ",(0,l.kt)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," to create and store surveys. Flask is a Python framework that provides out-of-the-box configurations to get the shell of a full-stack web application up and running, which includes ",(0,l.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/"},"Jinja")," for building web page HTML templates served using Python routing. This sample app runs in a Docker container."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"A screenshot of the Flask Surveys Container App",src:a(71745).Z,width:"1560",height:"1002"})),(0,l.kt)("p",null,"In this tutorial, you will learn how to set up and use Python feature flags with Unleash. We will use the Flask Surveys Container app to implement the feature flag solution, which will roll out a feature that allows users to delete surveys they create."),(0,l.kt)("p",null,"At the end of this tutorial, you will be able to turn on the feature flag and activate a route that will remove surveys from the database."),(0,l.kt)("p",null,"Here are the steps we will cover in this tutorial:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-unleash-best-practice-for-backend-apps"},"Feature flag best practices for back-end applications")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-install-a-local-feature-flag-provider"},"Spin up a local flag provider")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-create-and-configure-the-feature-flag"},"Configure a feature flag")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-add-unleash-to-a-python-app"},"Add Unleash to a Python Flask app")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#5-use-a-feature-flag-to-roll-out-a-delete-method"},"Toggle the database deletion route")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#6-verify-the-toggle-experience"},"Verify the toggle experience")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#7-improve-a-feature-flag-implementation-with-error-handling"},"Improve feature flag error handling"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In this tutorial, you will need the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A web browser like Chrome or Firefox"),(0,l.kt)("li",{parentName:"ul"},"Git"),(0,l.kt)("li",{parentName:"ul"},"Docker"),(0,l.kt)("li",{parentName:"ul"},"(Optional) a code editor like Visual Studio Code")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"An architectural diagram of our Python app using Unleash feature flags",src:a(3069).Z,width:"1723",height:"1080"})),(0,l.kt)("h2",{id:"1-unleash-best-practice-for-backend-apps"},"1. Unleash best practice for backend apps"),(0,l.kt)("p",null,"Since Python is a backend language, there are special security considerations to plan around when implementing feature flags."),(0,l.kt)("p",null,"Most importantly, you must:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Limit feature flag payloads for scalability, security, and efficiency"),(0,l.kt)("li",{parentName:"ul"},"Improve architectural resiliency with graceful degradation")),(0,l.kt)("p",null,"As your application scales, performance and resiliency become more critical and costly if not addressed. A feature flagging system should not be the reason your app slows down or fails. That\u2019s why we recommend you account for this by reducing the size of your feature flag payloads. For example, instead of making one large call to retrieve flag statuses for all users as part of your configuration, group your users by specific attributes as part of your targeting rules that would be most relevant for your application."),(0,l.kt)("p",null,"Additionally, our SDKs cache your feature flag configuration to help reduce network round trips and dependency on external services. You can rely on the cache if your Feature Flag Control Service is not available, which will mitigate potential failure in your application."),(0,l.kt)("p",null,"For a complete list of architectural guidelines, see our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/topics/feature-flags/feature-flag-best-practices"},"best practices for building and scaling feature flag systems"),"."),(0,l.kt)("h2",{id:"2-install-a-local-feature-flag-provider"},"2. Install a local feature flag provider"),(0,l.kt)("p",null,"There are many feature flag tools available. In this section, you will install Unleash, run the instance locally, log in, and create a feature flag, but you can use other tools in place of Unleash if you prefer. You\u2019ll need to edit the code accordingly, but the basic steps will probably be the same."),(0,l.kt)("p",null,"Use Git to clone the Unleash repository and Docker to build and run it. Open a terminal window and run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone git@github.com:Unleash/unleash.git\ncd unleash\ndocker compose up -d\n")),(0,l.kt)("p",null,"You will now have Unleash installed onto your machine and running in the background. You can access this instance in your web browser at http://localhost:4242"),(0,l.kt)("p",null,"Log in to the platform using these credentials:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Username: admin\nPassword: unleash4all\n")),(0,l.kt)("p",null,"Click the \u2018New feature toggle\u2019 button to create a new feature flag. Once you have created a flag, you will see it here."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of the Unleash platform to create a new feature flag",src:a(44030).Z,width:"2543",height:"1412"})),(0,l.kt)("h2",{id:"3-create-and-configure-the-feature-flag"},"3. Create and configure the feature flag"),(0,l.kt)("p",null,"Next, you will create a feature flag and turn it on for your Python app."),(0,l.kt)("p",null,"In the Create Toggle view, give your feature flag a unique name and click \u2018Create toggle feature\u2019."),(0,l.kt)("p",null,"For the purpose of this tutorial, name the feature flag ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_survey_flag"),". Use the default values in the rest of the feature flag form."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of a feature flag form",src:a(77795).Z,width:"1498",height:"1460"})),(0,l.kt)("p",null,"Your new feature flag has been created and is ready to be used. Enable the flag for your development environment, which makes it accessible for use in the Python app we will clone into your local environment."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of the enabled Python flag in development environment",src:a(33485).Z,width:"1310",height:"1186"})),(0,l.kt)("p",null,"Next, generate an API token to authenticate calls made to Unleash servers from your project. This API token will eventually be pulled into a configuration object within your Python application to toggle features. "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")," We require an API token as part of your flag configuration to ensure that only applications with the correct authentication can access your feature flags in Unleash. API tokens are created by users with API management access and thus controls how they can be distributed to applications that need it, and by whom.")),(0,l.kt)("p",null,'From your project view on the platform, go to "Project Settings" and then "API Access".'),(0,l.kt)("p",null,"Select the \u2018New API token\u2019 button."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of the API token button in API Access view",src:a(93205).Z,width:"2543",height:"1412"})),(0,l.kt)("p",null,"Name the API token and select the \u201cServer-side SDK\u201d token type, since we\u2019ll be doing our flag evaluation on the server using the Python SDK. You can read more about ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys#client-tokens"},"Unleash API tokens in our documentation"),"."),(0,l.kt)("p",null,"The token should have access to the \u201cdevelopment\u201d environment, as shown in the platform screenshot below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of the API token creation form",src:a(66455).Z,width:"1564",height:"898"})),(0,l.kt)("p",null,"The API token you generated can be managed in the API Access view in your project settings. It will become handy in Step 4."),(0,l.kt)("h2",{id:"4-add-unleash-to-a-python-app"},"4. Add Unleash to a Python app"),(0,l.kt)("p",null,"In this section, you will clone an open-source Python application called ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pamelafox/flask-surveys-container-app"},"Flask Surveys Container app"),", which we are using to model a service that provides routing, serves HTML pages, and performs actions against a database. This app uses Flask, SQLAlchemy, and a PostgreSQL database."),(0,l.kt)("p",null,"Use this command to clone the repository via your Terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone git@github.com:pamelafox/flask-surveys-container-app.git\n")),(0,l.kt)("p",null,"Next, navigate into your repository directory and create a ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,l.kt)("p",null,"Copy this code snippet into your ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"FLASK_DEBUG=True\nDBHOST=db\nDBNAME=postgres\nDBUSER=app_user\nDBPASS=app_password\n")),(0,l.kt)("p",null,"Next, install the Python SDK. Open your repository in a code editor and navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," folder. Reference the Python SDK for installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"UnleashClient==5.11.1\n")),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"src/backend/__init__.py"),", import UnleashClient:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from UnleashClient import UnleashClient\n")),(0,l.kt)("p",null,"In the same file, call the Unleash client for initialization when the app runs with this code snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"client = UnleashClient(\n    url=\"http://host.docker.internal:4242/api\",\n    app_name=\"flask-surveys-container-app\",\n    custom_headers={'Authorization': '<API token>'})\n \nclient.initialize_client()\n")),(0,l.kt)("p",null,"The URL will point your app to your Unleash instance through your Docker container for server-side communication."),(0,l.kt)("p",null,"Replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"<API token>")," string in the Authorization header with the API token we created on our Unleash instance. This will allow the app to communicate with the Unleash API to use the feature flag we created."),(0,l.kt)("p",null,"You can check our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/api-tokens-and-client-keys"},"API token and client keys documentation")," for more specifics and see additional use cases in our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/sdks/python"},"Server-Side SDK with Python")," documentation."),(0,l.kt)("p",null,"Next, go to your terminal and build the app using this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker-compose up --build\n")),(0,l.kt)("p",null,"Navigate to ",(0,l.kt)("a",{parentName:"p",href:"http://localhost://50505"},"localhost://50505")," and the Surveys list should eventually display:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of Surveys app loaded in browser",src:a(45).Z,width:"1434",height:"514"})),(0,l.kt)("p",null,"Create 1 or more new surveys so they\u2019re populated in your database!"),(0,l.kt)("h2",{id:"5-use-a-feature-flag-to-release-a-delete-method"},"5. Use a feature flag to release a delete method"),(0,l.kt)("p",null,"In a real-world use case for your feature flag, you can roll out new features to users by configuring the flag's strategy."),(0,l.kt)("p",null,"In this case, our app currently supports creating a survey, but once we create one, we can\u2019t get rid of it. We want to roll out a \u2018delete\u2019 button in our list of surveys to all users so we have the option to remove them from our database."),(0,l.kt)("p",null,"This will require us to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new route in our app"),(0,l.kt)("li",{parentName:"ul"},"Create a method that deletes a survey based on survey ID"),(0,l.kt)("li",{parentName:"ul"},"Create a delete button"),(0,l.kt)("li",{parentName:"ul"},"Map the delete button to the delete method")),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"src/backend/surveys/routes.py"),", add ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," to the existing ",(0,l.kt)("inlineCode",{parentName:"p"},"backend")," import statement. The full import line will now look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from backend import db, client\n")),(0,l.kt)("p",null,"We\u2019ve imported the initialized Unleash client into ",(0,l.kt)("inlineCode",{parentName:"p"},"routes.py"),". Now we can use that data to pass into the ",(0,l.kt)("inlineCode",{parentName:"p"},"surveys_list_page")," method. This will allow us to check the status of the enabled flag to conditionally render the 'Delete' button on the surveys page."),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," as a parameter in the template that we return in the ",(0,l.kt)("inlineCode",{parentName:"p"},"surveys_list_page")," method."),(0,l.kt)("p",null,"The modified return statement in this method will now look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'return render_template("surveys_list.html", surveys=surveys, client=client)\n')),(0,l.kt)("p",null,"In the same file, we will create a new route and a \u2018delete\u2019 method with this code snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'@bp.route("/surveys/<int:survey_id>/delete", methods=["GET", "POST", "DELETE"])\ndef delete_survey(survey_id):\n   survey = db.get_or_404(Survey, survey_id)\n   db.session.delete(survey)\n   db.session.commit()\n\n   return redirect(url_for("surveys.surveys_list_page"))\n')),(0,l.kt)("p",null,"The server now has a route that uses a survey ID to locate the survey in the database and delete it."),(0,l.kt)("p",null,"To make calls to this route, we will create a delete button for each survey on the page."),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"src/backend/templates/surveys_list.html"),", add the following code to your survey table underneath the \u201cSurvey Page\u201d button:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'{% if client.is_enabled(\'delete_survey_flag\') %}\n<td class="text-end"><a href="{{ url_for(\'surveys.delete_survey\', survey_id=survey.id) }}" class="btn btn-sm btn-danger">Delete</a></td>\n{% endif %}\n')),(0,l.kt)("p",null,"This code wraps a delete button in a conditional statement that checks whether or not the feature flag is enabled. This button has a link that points to the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_survey")," method we created, which will pull in the survey using an ID to search the database, find the matching survey, and delete it from the database session."),(0,l.kt)("p",null,"Your surveys page will now look something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of app in browser with delete buttons in survey table",src:a(76562).Z,width:"1466",height:"822"})),(0,l.kt)("p",null,"Test the new functionality by deleting one of your surveys. The page should refresh without the survey you deleted."),(0,l.kt)("h2",{id:"6-verify-the-toggle-experience"},"6. Verify the toggle experience"),(0,l.kt)("p",null,"Now that we\u2019ve added in new functionality and connected it to our feature flag, we can verify that if you disable the flag in your development environment, your Python app will no longer serve an HTML page with the option to delete surveys you\u2019ve created."),(0,l.kt)("p",null,"In your local Unleash instance, turn off the feature flag by disabling it in the development environment."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image of feature flag with a disabled environment",src:a(33700).Z,width:"1326",height:"1232"})),(0,l.kt)("p",null,"Next, return to your Survey app and refresh the browser. With the flag disabled, the delete button will no longer be visible."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," An update on the Python SDK may take around 30 seconds.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of app in browser without delete buttons for surveys",src:a(21106).Z,width:"1396",height:"758"})),(0,l.kt)("h2",{id:"7-improve-a-feature-flag-implementation-with-error-handling"},"7. Improve a feature flag implementation with error handling"),(0,l.kt)("p",null,"If you turn the feature flag off, you won\u2019t be able to use the delete button to remove a survey from your list. However, if a user wanted to bypass the UI to delete a survey, they could still use the URL from the delete method route to target a survey and delete it."),(0,l.kt)("p",null,"They could do this because we have committed code that is only ",(0,l.kt)("em",{parentName:"p"},"partially")," hidden behind a feature flag. The HTML code is behind the flag, but the server method that it talks to is not."),(0,l.kt)("p",null,"In a real world application, ignoring this would cause a user to perform an action they ",(0,l.kt)("em",{parentName:"p"},"shouldn\u2019t")," able to. Luckily, we can use a feature flag to stop the delete method from being called manually."),(0,l.kt)("p",null,"Let\u2019s walk through how to gracefully handle this scenario:"),(0,l.kt)("p",null,"We need an error handler route to return a simple 404 page to stop a user from being able to manually delete a survey when the flag is off."),(0,l.kt)("p",null,"In your ",(0,l.kt)("inlineCode",{parentName:"p"},"routes.py")," file, import two more modules from Flask that will support our error handling function: ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/3.0.x/api/#flask.abort"},(0,l.kt)("inlineCode",{parentName:"a"},"abort"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/3.0.x/api/#flask.json.jsonify"},(0,l.kt)("inlineCode",{parentName:"a"},"jsonify")),"."),(0,l.kt)("p",null,"Line 1 will now look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from flask import redirect, render_template, request, url_for, abort, jsonify\n")),(0,l.kt)("p",null,"Next, add in the following error handling method at the bottom of the file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"@bp.errorhandler(404)\ndef resource_not_found(e):\n   return jsonify(error=str(e)), 404\n")),(0,l.kt)("p",null,"In order to render the error message, we can call it from the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_survey")," method only in the case that the feature flag is turned off. Here\u2019s how the updated ",(0,l.kt)("inlineCode",{parentName:"p"},"delete_survey")," code would look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'@bp.route("/surveys/<int:survey_id>/delete", methods=["GET", "POST", "DELETE"])\ndef delete_survey(survey_id):\n   if client.is_enabled(\'delete_survey_flag\'):\n       survey = db.get_or_404(Survey, survey_id)\n       db.session.delete(survey)\n       db.session.commit()\n\n       return redirect(url_for("surveys.surveys_list_page"))\n   else:\n       abort(404, description="Resource not found")\n')),(0,l.kt)("p",null,"Now, if you turn off the flag in your Unleash instance and attempt to delete a survey directly with a URL, the 404 error will return."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of 404 error rendering in browser",src:a(85007).Z,width:"894",height:"178"})),(0,l.kt)("p",null,"Learn more about ",(0,l.kt)("a",{parentName:"p",href:"https://flask.palletsprojects.com/en/3.0.x/errorhandling/#blueprint-error-handlers"},"Flask Blueprint error handling"),"."),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"In this tutorial, we installed Unleash locally, created a new feature flag, installed Unleash into a Python Flask app, and toggled new functionality that altered a database with a containerized project!"))}h.isMDXComponent=!0},3069:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-flask-unleash-architecture-d40f69eb061a03fb25ed2e1d47f30d23.png"},85007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-404-d19c369c7df5acc138f3dce35afad6a0.png"},66455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-create-api-token-form-a3f47fba5f0f81f9ee1aecde4cce4273.png"},93205:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-create-api-token-ffa02580e3ae142889b953133620c3ac.png"},44030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-create-flag-d60bc9c2b7217091b8994c5dd0f8685a.png"},33700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-disabled-flag-87d77ef8cb25e2255f292facc114a457.png"},33485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-enabled-flag-2100178e923ec38a7c2447a52d4d4d3d.png"},77795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-feature-flag-form-a9d4d86646c4b717e6eeffb2e4d23f00.png"},71745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-survey-example-c2ceec06a929d7018a1099319c9337a8.png"},45:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-surveys-app-loaded-572f79250b3c66f190bff24b48ddf876.png"},76562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-surveys-with-delete-8e5a5a61afa5a5b10c3fbd7f7f65edbf.png"},21106:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/python-tutorial-surveys-without-delete-6d5e7b71bdf3f09e88c1cd95ebfb39eb.png"}}]);