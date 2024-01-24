"use strict";(self.webpackChunkwebsitev_2=self.webpackChunkwebsitev_2||[]).push([[77050],{85401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"A/B Testing in Flutter using Unleash and Mixpanel"},r=void 0,l={unversionedId:"feature-flag-tutorials/flutter/a-b-testing",id:"feature-flag-tutorials/flutter/a-b-testing",title:"A/B Testing in Flutter using Unleash and Mixpanel",description:"This article is a contribution by Ayush Bherwani as a part of the Community Content Program. You can also suggest a topic by opening an issue, or Write for Unleash as a part of the Community Content Program.",source:"@site/docs/feature-flag-tutorials/flutter/a-b-testing.md",sourceDirName:"feature-flag-tutorials/flutter",slug:"/feature-flag-tutorials/flutter/a-b-testing",permalink:"/feature-flag-tutorials/flutter/a-b-testing",draft:!1,editUrl:"https://github.com/Unleash/unleash/edit/main/website/docs/feature-flag-tutorials/flutter/a-b-testing.md",tags:[],version:"current",frontMatter:{title:"A/B Testing in Flutter using Unleash and Mixpanel"},sidebar:"documentation",previous:{title:"How to Implement Feature Flags in Python",permalink:"/feature-flag-tutorials/python"},next:{title:"How to Implement Feature Flags in Next.js using Unleash",permalink:"/feature-flag-tutorials/nextjs/implementing-feature-flags"}},s={},p=[{value:"Setup variants in Unleash",id:"setup-variants-in-unleash",level:2},{value:"Setup Mixpanel",id:"setup-mixpanel",level:2},{value:"Integration in Flutter",id:"integration-in-flutter",level:2},{value:"Analytics",id:"analytics",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This article is a contribution by ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.linkedin.com/in/ayushbherwani/"},"Ayush Bherwani"))," as a part of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/unleash/community-content"},"Community Content Program")),". You can also suggest a topic by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unleash/community-content/issues"},"opening an issue"),", or ",(0,a.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/get-published-through-unleashs-community-content-program"},"Write for Unleash")," as a part of the Community Content Program.")),(0,a.kt)("p",null,"After successfully integrating the first feature flag in the Unsplash sample app, let\u2019s talk about how you can use Unleash to perform experimentation, also known as A/B testing, in Flutter to ship features more confidently."),(0,a.kt)("p",null,"For this article, we\u2019ll integrate feature flags for A/B testing to experiment with \u201clike image\u201d feature user experience. As an overview, the app is quite simple, with two screens displaying images and image details respectively. The behavior of the \u201cimage details\u201d feature is controlled through an Unleash instance. You can check out the previous article, \u201c",(0,a.kt)("a",{parentName:"p",href:"https://www.getunleash.io/blog/from-the-community-how-to-set-up-feature-flags-in-flutter"},"How to set up feature flags in Flutter"),"\u201d for an overview of the code structure and implementation. For those who want to skip straight to the code, you can find it on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AyushBherwani1998/unsplash_sample/"},"GitHub"),"."),(0,a.kt)("p",null,"Here\u2019s a screenshot of the application:\n",(0,a.kt)("img",{alt:"Unsplash App built on Flutter",src:n(16045).Z,width:"288",height:"512"})),(0,a.kt)("h2",{id:"setup-variants-in-unleash"},"Setup variants in Unleash"),(0,a.kt)("p",null,"In your Unleash instance, create a new feature flag called ",(0,a.kt)("inlineCode",{parentName:"p"},"likeOptionExperiment"),". Choose the toggle type called ",(0,a.kt)("inlineCode",{parentName:"p"},"Experiment")," and enable the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/impression-data"},"impression data"),". By default, the flag will be set to false."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Set Up Variant in Unleash",src:n(51791).Z,width:"512",height:"275"})),(0,a.kt)("p",null,"Now that you have created your feature toggle, let\u2019s create two new ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getunleash.io/reference/feature-toggle-variants"},"variants")," \u201cgridTile'' and \u201cimageDetails\u201d respectively. These variants will help you position your \u201clike image\u201d button. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Succesfully setting up variant in Unleash",src:n(2257).Z,width:"512",height:"274"})),(0,a.kt)("p",null,"Below is a screenshot of experimentation in action based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"likeOptionExperiment")," flag and corresponding variants. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Unsplash App built on Flutter",src:n(74028).Z,width:"512",height:"341"})),(0,a.kt)("h2",{id:"setup-mixpanel"},"Setup Mixpanel"),(0,a.kt)("p",null,"For analytics and metrics, we\u2019ll use ",(0,a.kt)("a",{parentName:"p",href:"https://mixpanel.com/"},"Mixpanel")," to track user behavior and usage patterns. We have chosen Mixpanel because it offers a user-friendly setup and in-depth user analytics and segmentation. Given that the project follows clean architecture and Test-Driven Development (TDD) principles, you\u2019ll want to create an abstract layer to interact with the Mixpanel."),(0,a.kt)("p",null,"Whenever a user opens the app, we track ",(0,a.kt)("inlineCode",{parentName:"p"},"like-variant")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"likeOptionExperiment")," is enabled to tag them with their assigned variant (gridTile or imageDetails). The stored variant in Mixpanel can be used later to analyze how each variant impacts user behavior to like an image."),(0,a.kt)("p",null,"Whenever a user interacts with the ",(0,a.kt)("inlineCode",{parentName:"p"},"LikeButton"),", we track ",(0,a.kt)("inlineCode",{parentName:"p"},"trackLikeEventForExperimentation"),", along with their assigned variants. By correlating the ",(0,a.kt)("inlineCode",{parentName:"p"},"trackLikeEventForExperimentation")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"like-variant"),", you can effectively measure the impact of a variant on user behavior and make data-driven decisions. To learn how to correlate and generate reports, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mixpanel.com/docs/analysis/reports"},"Mixpanel docs"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'abstract class MixpanelConfig {\n /// ...\n\n /// Helps you get the metrics of experimentation to analysis\n /// the different position of the share image button.\n void trackLikeEventForExperimentation({\n   required LikeButtonPosition likeButtonPosition,\n   required String photoId,\n });\n\n /// Help you get the variant based on which we can create funnel\n /// for analytics.\n void trackLikeVariant(LikeButtonPosition likeButtonPosition);\n}\n\nclass MixpanelConfigImpl implements MixpanelConfig {\n final TargetPlatformExtended targetPlatformExtended;\n\n MixpanelConfigImpl(this.targetPlatformExtended);\n\n Mixpanel get mixpanel {\n   return ServiceLocator.getIt<Mixpanel>();\n }\n\n /// ...\n\n @override\n void trackLikeEventForExperimentation({\n   required LikeButtonPosition likeButtonPosition,\n   required String photoId,\n }) {\n   if (targetPlatformExtended.isMobile) {\n     mixpanel.track(\'like-experimentation\', properties: {\n       "variant": describeEnum(likeButtonPosition),\n       "photoId": photoId,\n     });\n   }\n }\n\n @override\n void trackLikeVariant(LikeButtonPosition likeButtonPosition) {\n   if (targetPlatformExtended.isMobile) {\n     mixpanel.track(\'like-variant\', properties: {\n       "variant": describeEnum(likeButtonPosition),\n     });\n   }\n }\n}\n')),(0,a.kt)("p",null,"Once you have your configuration in place, the next step is to create ",(0,a.kt)("inlineCode",{parentName:"p"},"MixPanel")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MixpanelConfig")," and add it to your service locator class. Make sure that you have a Mixpanel",(0,a.kt)("a",{parentName:"p",href:"https://docs.mixpanel.com/docs/tracking/how-tos/api-credentials"}," API key"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class ServiceLocator {\n ServiceLocator._();\n\n static GetIt get getIt => GetIt.instance;\n\n static Future<void> initialize() async { \n   /// ...\n\n   final unleash = UnleashClient(\n     url: Uri.parse('http://127.0.0.1:4242/api/frontend'),\n     clientKey: dotenv.env[\"UNLEASH_API_KEY\"] as String,\n     appName: 'unplash_demo',\n   );\n\n   await unleash.start();\n\n   getIt.registerLazySingleton(() => unleash);\n   getIt.registerLazySingleton<UnleashConfig>(\n     () => UnleashConfigImpl(getIt()),\n   );\n\n   getIt.registerLazySingleton<WebPlatformResolver>(\n     () => WebPlatformResolverImpl(),\n   );\n\n\n   final TargetPlatformExtended targetPlatformExtended =\n       TargetPlatformExtendedImpl(getIt());\n\n   getIt.registerLazySingleton<TargetPlatformExtended>(\n     () => targetPlatformExtended,\n   );\n\n   if (targetPlatformExtended.isMobile) {\n     final mixPanel = await Mixpanel.init(\n       dotenv.env[\"MIXPANEL_KEY\"] as String,\n       trackAutomaticEvents: false,\n     );\n\n     getIt.registerLazySingleton(() => mixPanel);\n   }\n\n   getIt.registerLazySingleton<MixpanelConfig>(\n     () => MixpanelConfigImpl(getIt()),\n   );\n\n   /// ...\n }\n}\n")),(0,a.kt)("h2",{id:"integration-in-flutter"},"Integration in Flutter"),(0,a.kt)("p",null,"Let\u2019s dive into how you can use these variants in your Flutter application. "),(0,a.kt)("p",null,"You\u2019ll have to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"UnleashConfig")," which helps you test the Unleash functionalities in isolation from the rest of the app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const String isImageDetailsEnabledToggleKey = "isImageDetailsEnabled";\nconst String likeOptionExperimentKey = "likeOptionExperiment";\n\n/// Helps determine the position of like button\n/// [gridTile] will be used to position like image button\n/// on [ImageTile].\n/// [imageDetails] will be used to position like image button\n/// inside the [ImageDetails] page.\nenum LikeButtonPosition { gridTile, imageDetails }\n\nabstract class UnleashConfig {\n /// ...\n bool get isLikeOptionExperimentEnabled;\n LikeButtonPosition get likeButtonPosition;\n}\n\nclass UnleashConfigImpl extends UnleashConfig {\n final UnleashClient unleash;\n\n UnleashConfigImpl(this.unleash);\n\n /// ...\n\n @override\n bool get isLikeOptionExperimentEnabled =>\n     unleash.isEnabled(likeOptionExperimentKey);\n\n @override\n LikeButtonPosition get likeButtonPosition {\n   final variant = unleash.getVariant(likeOptionExperimentKey);\n   return LikeButtonPosition.values.byName(variant.name);\n }\n}\n')),(0,a.kt)("p",null,"After updating ",(0,a.kt)("inlineCode",{parentName:"p"},"UnleashConfig")," you may want to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"_trackLikeExperimentationVariant")," method which you can call in ",(0,a.kt)("inlineCode",{parentName:"p"},"initState")," of \u201cHomePage\u201d to get the variant details. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void _trackLikeExperimentationVariant() {\n   final unleashConfig = ServiceLocator.getIt<UnleashConfig>();\n   final mixpanelConfig = ServiceLocator.getIt<MixpanelConfig>();\n   if (unleashConfig.isLikeOptionExperimentEnabled) {\n     mixpanelConfig.trackLikeVariant(unleashConfig.likeButtonPosition);\n   }\n }\n")),(0,a.kt)("p",null,"You\u2019ll create a new widget \u201cLikeButton'' which can be utilized for both variants. Make sure to use ",(0,a.kt)("inlineCode",{parentName:"p"},"MixpanelConfig")," to track user engagement for analytics purposes. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class LikeButton extends StatelessWidget {\n final ValueNotifier<bool> isLikedNotifier;\n /// Used to track the variant option for the mixpanel event.\n final LikeButtonPosition likeButtonPosition;\n final String photoId;\n\n const LikeButton({\n   super.key,\n   required this.isLikedNotifier,\n   required this.likeButtonPosition,\n   required this.photoId,\n });\n\n\n /// Event fired to track the user engagement on liking an image\n void _fireMixpanelEvent() {\n   final mixpanelConfig = ServiceLocator.getIt<MixpanelConfig>();\n   mixpanelConfig.trackLikeEventForExperimentation(\n     likeButtonPosition: likeButtonPosition,\n     photoId: photoId,\n   );\n }\n\n @override\n Widget build(BuildContext context) {\n   return ValueListenableBuilder<bool>(\n     valueListenable: isLikedNotifier,\n     builder: (context, isLiked, child) {\n       return IconButton(\n         padding: EdgeInsets.zero,\n         visualDensity: VisualDensity.compact,\n         iconSize: 20,\n         isSelected: isLiked,\n         splashColor: Colors.red,\n         onPressed: () {\n           isLikedNotifier.value = !isLikedNotifier.value;\n           _fireMixpanelEvent();\n         },\n         selectedIcon: const Icon(\n           CupertinoIcons.heart_fill,\n           color: Colors.redAccent,\n         ),\n         icon: const Icon(CupertinoIcons.heart),\n       );\n     },\n   );\n }\n}\n")),(0,a.kt)("p",null,"Once you have created ",(0,a.kt)("inlineCode",{parentName:"p"},"LikeButton"),", the next step is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"LikeButtonPosition")," to add the button in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageTile")," widget, and ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageDetails")," page. "),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageTile")," make sure the button is only visible if ",(0,a.kt)("inlineCode",{parentName:"p"},"isLikeOptionExperiment")," is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"LikeButtonPosition")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"gridTile"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"class ImageTile extends StatelessWidget {\n final UnsplashImage image;\n final UnleashConfig unleashConfig;\n\n const ImageTile({\n   super.key,\n   required this.image,\n   required this.unleashConfig,\n });\n\n bool get isFooterEnabled {\n   return unleashConfig.isLikeOptionExperimentEnabled &&\n       unleashConfig.likeButtonPosition == LikeButtonPosition.gridTile;\n }\n\n Widget tileGap() => const SizedBox(height: 4);\n\n @override\n Widget build(BuildContext context) {\n   return CachedNetworkImage(\n     imageUrl: image.url,\n     cacheManager: ServiceLocator.getIt<DefaultCacheManager>(),\n     imageBuilder: (context, provider) {\n       return Column(\n         children: [\n           /// Some more widgets\n           if (isFooterEnabled) ...[\n             ImageTileFooter(image: image),\n           ],\n         ],\n       );\n     },\n   );\n }\n}\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageDetailsPage")," make sure the button is only visible if ",(0,a.kt)("inlineCode",{parentName:"p"},"isLikeOptionExperiment")," is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"LikeButtonPosition")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"imageDetails"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@RoutePage()\nclass ImageDetailsPage extends StatefulWidget {\n final String id;\n\n const ImageDetailsPage({\n   super.key,\n   required this.id,\n });\n\n @override\n State<ImageDetailsPage> createState() => _ImageDetailsPageState();\n}\n\nclass _ImageDetailsPageState extends State<ImageDetailsPage> {\n /// ...\n late final MixpanelConfig mixPanelConfig;\n late final ValueNotifier<bool> isLikedNotifier;\n late final UnleashConfig unleashConfig;\n\n @override\n void initState() {\n   super.initState();\n   /// ...\n   mixPanelConfig = ServiceLocator.getIt<MixpanelConfig>();\n   isLikedNotifier = ValueNotifier<bool>(false);\n   unleashConfig = ServiceLocator.getIt<UnleashConfig>();\n   /// ...\n   _fetchImageDetails();\n }\n\n /// ...\n\n void _fetchImageDetails() {\n   bloc.add(FetchImageDetailsEvent(widget.id));\n }\n\n bool get isLikeButtonVisible {\n   return unleashConfig.isLikeOptionExperimentEnabled &&\n       unleashConfig.likeButtonPosition == LikeButtonPosition.imageDetails;\n }\n\n @override\n Widget build(BuildContext context) {\n   return Scaffold(\n     appBar: AppBar(\n       leading: IconButton(\n         onPressed: () {\n           Navigator.of(context).pop();\n         },\n         icon: const Icon(\n           CupertinoIcons.xmark,\n         ),\n       ),\n       actions: [\n         if (isLikeButtonVisible) ...[\n           LikeButton(\n             isLikedNotifier: isLikedNotifier,\n             photoId: widget.id,\n             likeButtonPosition: LikeButtonPosition.imageDetails,\n           ),\n         ]\n       ],\n     ),\n     body: /// Body widget;\n }\n}\n")),(0,a.kt)("p",null,"Now that you have your pieces clubbed, you can toggle the ",(0,a.kt)("inlineCode",{parentName:"p"},"likeOptionExperiment")," flag to enable the experimentation of the \u201clike image\u201d feature in the application. "),(0,a.kt)("p",null,"Voila! Your experimentation is enabled for your feature. You\u2019ve also ensured that users can access the \u201clike image\u201d feature depending on the state of the flag and variant."),(0,a.kt)("h2",{id:"analytics"},"Analytics"),(0,a.kt)("p",null,"Once your experimentation is up and running, you can visit the Mixpanel dashboard to create a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mixpanel.com/docs/analysis/reports/funnels"},"funnel")," and get insights on the user engagement and conversion rate for different variants. "),(0,a.kt)("p",null,"Below is a funnel screenshot for \u201clike image\u201d experimentation:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mixpanel Analytics for A/B Testing in Unleash for the Flutter Demo",src:n(6625).Z,width:"512",height:"375"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"A/B testing is a low-risk, high-returns approach that can help you make data-driven decisions for your feature releases to increase user engagement, minimize the risk, and increase conversion rates. As a developer, it helps you be confident in your releases by addressing the issues users face and reducing the bounce rates during experimentation with the help of data.  "),(0,a.kt)("p",null,"Some of the best practices for experimentation include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should be open to the results and avoid any hypotheses. "),(0,a.kt)("li",{parentName:"ul"},"You should define the metrics for the success of the experimentation before you run the tests. Keep your success metrics simple and narrowed for better results. "),(0,a.kt)("li",{parentName:"ul"},"Select a group of adequate size for the test to yield definitive results."),(0,a.kt)("li",{parentName:"ul"},"You should avoid running multiple tests simultaneously, as it may not give reasonable outcomes.")),(0,a.kt)("p",null,"That\u2019s it for today. I hope you found this helpful. Want to dive deep into the code used for this article? It\u2019s all on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AyushBherwani1998/unsplash_sample/"},"GitHub"),"."))}d.isMDXComponent=!0},6625:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mixpanel-flutter-screenshot-1-fee42a34e24ad098f58edc0c260aef2f.png"},2257:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/setup-variant-2-a6ec7d35ffb4d3efaf702b50f61b10ca.png"},16045:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unsplash-demo-flutter-d9b2cde2115dd4fe14c084a7bf2496c2.png"},74028:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unsplash-flutter-demo-screenshot-2-33d9dc71b74275c34a152c1d54fbeef0.png"},51791:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/variant-setup-1-c7c2dabcd8f80a70c12703338413d81f.png"}}]);