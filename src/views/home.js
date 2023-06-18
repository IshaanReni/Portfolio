// import React from 'react'

// import { Helmet } from 'react-helmet'

// import './home.css'

// const Home = (props) => {
//   return (
//     <div className="home-container">
//       <Helmet>
//         <title>Portfolio Page</title>
//         <meta property="og:title" content="Portfolio Page" />
//       </Helmet>
//       <div data-role="Header" className="home-navbar-container">
//         <div className="home-navbar">
//           <span className="Card-Heading home-heading">Logo</span>
//           <div className="home-links-container">
//             <span className="home-link Navbar-Link">About</span>
//             <span className="home-link1 Navbar-Link">Experience</span>
//             <span className="home-link2 Navbar-Link">Portofolio</span>
//             <span className="Navbar-Link">Contact</span>
//           </div>
//           <div data-role="BurgerMenu" className="home-burger-menu">
//             <svg viewBox="0 0 1024 1024" className="home-icon">
//               <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
//             </svg>
//           </div>
//           <div data-role="MobileMenu" className="home-mobile-menu">
//             <div className="home-container01">
//               <span className="Card-Heading home-heading1">Logo</span>
//               <div data-role="CloseMobileMenu" className="home-close-menu">
//                 <svg viewBox="0 0 1024 1024" className="home-icon02">
//                   <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="home-links-container1">
//               <span className="home-link4 Navbar-Link">About</span>
//               <span className="home-link5 Navbar-Link">Experience</span>
//               <span className="home-link6 Navbar-Link">Portofolio</span>
//               <span className="Navbar-Link">Contact</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator"></div>
//       <div className="home-section-separator1"></div>
//       <div className="home-container02">
//         <div className="home-hero">
//           <div className="home-hero-text-container">
//             <h1 className="home-heading2 Section-Heading">
//               I help startups deliver the right message to their customers
//             </h1>
//             <span className="home-text Section-Text">
//               <span>
//                 c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
//                 augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
//                 nulla. Class aptent taciti sociosqu ad litora torquent per
//                 conubia nostra, per inceptos himenaeos.
//               </span>
//             </span>
//             <div className="home-cta-btn-container">
//               <button className="home-cta-btn Anchor button">
//                 <span className="home-text02">MY WORK</span>
//               </button>
//               <button className="home-cta-btn1 button Anchor">ABOUT ME</button>
//             </div>
//           </div>
//           <img
//             alt="image"
//             src="https://play.teleporthq.io/static/svg/default-img.svg"
//             className="home-image"
//           />
//         </div>
//       </div>
//       <div className="home-features">
//         <div className="home-heading-container">
//           <h2 className="home-text03 Section-Heading">Deliverables</h2>
//           <span className="home-text04 Section-Text">
//             Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//             odio. Praesent libero.
//           </span>
//         </div>
//         <div className="home-cards-container">
//           <div className="home-card">
//             <div className="home-icon-container">
//               <svg
//                 viewBox="0 0 1170.2857142857142 1024"
//                 className="home-icon04"
//               >
//                 <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
//               </svg>
//             </div>
//             <div className="home-content-container">
//               <span className="home-heading3 Card-Heading">Diagrams</span>
//               <span className="home-text05 Card-Text">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//                 nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
//                 nisi. Nulla quis sem at nibh elementum imperdiet.
//               </span>
//             </div>
//           </div>
//           <div className="home-card1">
//             <div className="home-icon-container1">
//               <svg viewBox="0 0 1024 1024" className="home-icon06">
//                 <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
//               </svg>
//             </div>
//             <div className="home-content-container1">
//               <span className="home-heading4 Card-Heading">Wireframes</span>
//               <span className="home-text06 Card-Text">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//                 nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
//                 nisi. Nulla quis sem at nibh elementum imperdiet.
//               </span>
//             </div>
//           </div>
//           <div className="home-card2">
//             <div className="home-icon-container2">
//               <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
//                 <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
//               </svg>
//             </div>
//             <div className="home-content-container2">
//               <span className="home-heading5 Card-Heading">Design</span>
//               <span className="home-text07 Card-Text">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//                 nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
//                 nisi. Nulla quis sem at nibh elementum imperdiet.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-about">
//         <div className="home-max-content-width-container">
//           <div className="home-heading-container1">
//             <h1 className="Section-Heading home-text08">
//               Professional experience
//             </h1>
//           </div>
//           <div className="home-content-container3">
//             <div className="home-about-1">
//               <div className="home-container03">
//                 <svg viewBox="0 0 1024 1024" className="home-icon10">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text09 Card-Text">
//                   Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
//                   imperdiet.
//                 </span>
//               </div>
//               <div className="home-container04">
//                 <svg viewBox="0 0 1024 1024" className="home-icon12">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text10 Card-Text">
//                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
//                 </span>
//               </div>
//               <div className="home-container05">
//                 <svg viewBox="0 0 1024 1024" className="home-icon14">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text11 Card-Text">
//                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
//                 </span>
//               </div>
//             </div>
//             <div className="home-about-11">
//               <div className="home-container06">
//                 <svg viewBox="0 0 1024 1024" className="home-icon16">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text12 Card-Text">
//                   <span>
//                     Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
//                   </span>
//                   <br></br>
//                   <span>
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                 </span>
//               </div>
//               <div className="home-container07">
//                 <svg viewBox="0 0 1024 1024" className="home-icon18">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text16 Card-Text">
//                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
//                 </span>
//               </div>
//               <div className="home-container08">
//                 <svg viewBox="0 0 1024 1024" className="home-icon20">
//                   <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
//                 </svg>
//                 <span className="home-text17 Card-Text">
//                   Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
//                 </span>
//               </div>
//             </div>
//           </div>
//           <button className="home-button Anchor button">CHECK MY WORK</button>
//         </div>
//       </div>
//       <div className="home-section-separator2"></div>
//       <div className="home-clients">
//         <div className="home-heading-container2">
//           <h1 className="home-text18 Section-Heading">Clients</h1>
//           <span className="home-text19 Section-Text">
//             Here we will put your clients&apos; or partners&apos; logos
//           </span>
//         </div>
//         <div className="home-logo-container">
//           <img alt="image" src="/default-img.svg" className="home-logo" />
//           <img alt="image" src="/default-img.svg" className="home-logo1" />
//           <img alt="image" src="/default-img.svg" className="home-logo2" />
//           <img alt="image" src="/default-img.svg" className="home-logo3" />
//           <img alt="image" src="/default-img.svg" className="home-logo4" />
//         </div>
//       </div>
//       <div className="home-pricing">
//         <div className="home-heading-container3">
//           <h1 className="home-text20 Section-Heading">Ask for a quote</h1>
//           <span className="home-text21 Section-Text">
//             Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//             odio. Praesent libero.
//           </span>
//         </div>
//         <div className="home-pricing-card-container">
//           <div className="home-card3">
//             <div className="home-card-heading">
//               <span className="home-type Anchor">Minimal</span>
//               <span className="Section-Heading">Basic</span>
//             </div>
//             <div className="home-card-content">
//               <div className="home-feature">
//                 <span className="Card-Text">Feature one</span>
//                 <span className="home-limit Card-Text">TBD</span>
//               </div>
//               <div className="home-feature1">
//                 <span className="Card-Text">Feature two</span>
//                 <span className="home-limit1 Card-Text">TBD</span>
//               </div>
//               <div className="home-feature2">
//                 <span className="Card-Text">Feature three</span>
//                 <span className="home-limit2 Card-Text">UNLIMITED</span>
//               </div>
//               <div className="home-feature3">
//                 <span className="Card-Text">Feature four</span>
//                 <span className="home-limit3 Card-Text">UNLIMITED</span>
//               </div>
//               <button className="home-choose button Anchor">CHOOSE</button>
//             </div>
//           </div>
//           <div className="home-card4">
//             <div className="home-card-heading1">
//               <span className="home-type1 Anchor">medium</span>
//               <span className="Section-Heading">Complex</span>
//             </div>
//             <div className="home-card-content1">
//               <div className="home-container09">
//                 <span className="Card-Text">Feature one</span>
//                 <span className="home-text23 Card-Text">TBD</span>
//               </div>
//               <div className="home-container10">
//                 <span className="Card-Text">Feature two</span>
//                 <span className="home-text25 Card-Text">TBD</span>
//               </div>
//               <div className="home-container11">
//                 <span className="Card-Text">Feature three</span>
//                 <span className="home-text27 Card-Text">UNLIMITED</span>
//               </div>
//               <div className="home-container12">
//                 <span className="Card-Text">Feature four</span>
//                 <span className="home-text29 Card-Text">UNLIMITED</span>
//               </div>
//               <button className="home-button1 Anchor button">CHOOSE</button>
//             </div>
//           </div>
//           <div className="home-card5">
//             <div className="home-card-heading2">
//               <span className="home-type2 Anchor">Premium</span>
//               <span className="Section-Heading">Professional</span>
//             </div>
//             <div className="home-card-content2">
//               <div className="home-container13">
//                 <span className="Card-Text">Feature one</span>
//                 <span className="home-text31 Card-Text">TBD</span>
//               </div>
//               <div className="home-container14">
//                 <span className="Card-Text">Feature two</span>
//                 <span className="home-text33 Card-Text">TBD</span>
//               </div>
//               <div className="home-container15">
//                 <span className="Card-Text">Feature three</span>
//                 <span className="home-text35 Card-Text">UNLIMITED</span>
//               </div>
//               <div className="home-container16">
//                 <span className="Card-Text">Feature four</span>
//                 <span className="home-text37 Card-Text">UNLIMITED</span>
//               </div>
//               <button className="home-button2 Anchor button">CHOOSE</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator3"></div>
//       <div className="home-section-separator4"></div>
//       <div className="home-faqs">
//         <h2 className="home-text38 Section-Heading">
//           Check the most common questions
//         </h2>
//         <div className="home-content-container4">
//           <div className="home-faq">
//             <div className="home-question-container">
//               <span className="home-question">
//                 Here you would write a frequently asked question?
//               </span>
//             </div>
//             <div className="home-answer-container">
//               <span className="home-answer Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//                 Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
//                 elementum imperdiet. Here you would give the answer. Lorem ipsum
//                 dolor sit amet, consectetur adipiscing elit. Integer nec odio.
//                 Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
//                 quis sem at nibh elementum imperdiet.
//               </span>
//               <span className="Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//                 Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
//                 elementum imperdiet.
//               </span>
//             </div>
//           </div>
//           <div className="home-faq1">
//             <div className="home-question-container1">
//               <span className="home-question1">
//                 Here you would write a frequently asked question?
//               </span>
//             </div>
//             <div className="home-answer-container1">
//               <span className="home-answer2 Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//                 Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
//                 elementum imperdiet.
//               </span>
//               <span className="Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//               </span>
//             </div>
//           </div>
//           <div className="home-faq2">
//             <div className="home-question-container2">
//               <span className="home-question2">
//                 Here you would write a frequently asked question?
//               </span>
//             </div>
//             <div className="home-answer-container2">
//               <span className="home-answer4 Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//                 Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
//                 elementum imperdiet.
//               </span>
//               <span className="Card-Text">
//                 Here you would give the answer. Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit. Integer nec odio. Praesent libero.
//                 Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
//                 elementum imperdiet.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator5"></div>
//       <div className="home-subscribe">
//         <img alt="image" src="/default-img.svg" className="home-image1" />
//         <div className="home-container17">
//           <div className="home-heading-container4">
//             <h1 className="home-text39 Section-Heading">
//               Get our guide to crafting digital products
//             </h1>
//             <span className="Section-Text home-text40">
//               We will send you our monthly freebies on your email. We will not
//               share your email address or use it for promotional goals.
//             </span>
//           </div>
//           <input
//             type="text"
//             required="true"
//             placeholder="E-mail"
//             className="home-textinput Section-Text input"
//           />
//           <button className="home-button3 Anchor button">SEND</button>
//         </div>
//       </div>
//       <div className="home-section-separator6"></div>
//       <div className="home-footer-container">
//         <div className="home-footer">
//           <div className="home-social-links">
//             <svg viewBox="0 0 950.8571428571428 1024" className="home-icon22">
//               <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
//             </svg>
//             <svg viewBox="0 0 877.7142857142857 1024" className="home-icon24">
//               <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
//             </svg>
//             <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
//               <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
//             </svg>
//           </div>
//           <div className="home-copyright-container">
//             <svg viewBox="0 0 1024 1024" className="home-icon28">
//               <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
//             </svg>
//             <span className="Anchor">Copyright, 2021</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home






// import React from 'react'

// import { Helmet } from 'react-helmet'

// import './home.css'

// const Home = (props) => {
//   return (
//     <div className="home-container">
//       <Helmet>
//         <title>Portfolio Page</title>
//         <meta property="og:title" content="Portfolio Page" />
//       </Helmet>
//       <div data-role="Header" className="home-navbar-container">
//         <div className="home-navbar">
//           <div className="home-container01">
//             <img
//               src="/external/pastedimage-xxxx-1500w-200h.png"
//               className="home-image"
//             />
//           </div>
//           <div className="home-links-container">
//             <a href="#About" className="home-link Navbar-Link">
//               About Me
//             </a>
//             <a href="#Experience" className="home-link01 Navbar-Link">
//               {' '}
//               Experience
//             </a>
//             <a href="#Education" className="home-link02 Navbar-Link">
//               Education
//             </a>
//             <a href="#Projects" className="home-link03 Navbar-Link">
//               Projects
//             </a>
//             <a href="#Contact" className="home-link04 Navbar-Link">
//               Contact
//             </a>
//           </div>
//           <div data-role="BurgerMenu" className="home-burger-menu">
//             <svg viewBox="0 0 1024 1024" className="home-icon">
//               <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
//             </svg>
//           </div>
//           <div data-role="MobileMenu" className="home-mobile-menu">
//             <div className="home-container02">
//               <span className="Card-Heading home-heading">Logo</span>
//               <div data-role="CloseMobileMenu" className="home-close-menu">
//                 <svg viewBox="0 0 1024 1024" className="home-icon02">
//                   <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="home-links-container1">
//               <span className="home-link05 Navbar-Link">About</span>
//               <span className="home-link06 Navbar-Link">Experience</span>
//               <span className="home-link07 Navbar-Link">Portofolio</span>
//               <span className="Navbar-Link">Contact</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator"></div>
//       <div className="home-section-separator1"></div>
//       <div id="Top" className="home-container03">
//         <div className="home-hero">
//           <div className="home-hero-text-container">
//             <h1 className="home-heading01">Hi, my name is</h1>
//             <h1 className="home-heading02">Ishaan.</h1>
//             <h1 className="home-heading03">
//               I connect the digital and the physical
//             </h1>
//             <span className="home-text">
//               A passionate software development intern. I tend to make use of a
//               wide variety of technologies for projects, ranging from web
//               development to embedded programming.
//             </span>
//             <div className="home-container04">
//               <div className="home-container05">
//                 <div className="home-container06">
//                   <div className="home-container07">
//                     <div className="home-cta-btn-container">
//                       <button type="submit" className="home-cta-btn">
//                         <span className="home-text001">Resume</span>
//                       </button>
//                       <a
//                         href="https://github.com/IshaanReni"
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="home-link09"
//                       >
//                         <svg
//                           viewBox="0 0 877.7142857142857 1024"
//                           className="home-icon04"
//                         >
//                           <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                         </svg>
//                       </a>
//                       <a
//                         href="https://www.linkedin.com/in/ishaan-reni/"
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="home-link10"
//                       >
//                         <svg
//                           viewBox="0 0 877.7142857142857 1024"
//                           className="home-icon06"
//                         >
//                           <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             alt="image"
//             src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
//             className="home-image1"
//           />
//         </div>
//       </div>
//       <div className="home-features">
//         <div className="home-heading-container">
//           <h2 id="About" className="home-text002 Section-Heading">
//             About Me
//           </h2>
//         </div>
//         <span className="home-text003">
//           <span className="Section-Text">
//             I have a keen interest in the software-engineering industry. Along
//             with a passion for digital electronics, computer architecture and
//             embedded programming, I am a quick learner and a team player with
//             excellent communication skills. I am also a self‑motivated
//             individual with a strong work ethic and a desire to learn new
//             skills.
//           </span>
//           <br></br>
//         </span>
//         <span className="home-text006">
//           <span className="Section-Text">
//             I am currently working as a software development intern at
//           </span>
//           <span className="Section-Text">
//             <span
//               dangerouslySetInnerHTML={{
//                 __html: ' ',
//               }}
//             />
//           </span>
//           <span className="Section-Text">Tata Consultancy Services</span>
//           <span className="Section-Text"> in London, UK.</span>
//           <br></br>
//         </span>
//         <span className="home-text012">
//           <span>
//             Here are a few technologies I&apos;ve been working with recently:
//           </span>
//           <br></br>
//         </span>
//         <div className="home-container08"></div>
//         <div className="home-cards-container">
//           <div className="home-container09">
//             <div className="home-container10">
//               <span className="home-text015">
//                 <span> - Python</span>
//                 <br></br>
//               </span>
//               <span className="home-text018"> - Embedded C</span>
//             </div>
//             <span className="home-text019">
//               <span> - Machine Learning</span>
//               <br></br>
//             </span>
//           </div>
//           <div className="home-container11">
//             <div className="home-container12">
//               <div className="home-container13">
//                 <div className="home-container14">
//                   <span className="home-text022">
//                     <span> - C++</span>
//                     <br></br>
//                   </span>
//                 </div>
//                 <span className="home-text025"> - System Verilog</span>
//               </div>
//               <span className="home-text026">
//                 <span> - Web Security</span>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Experience" className="home-features1">
//         <div className="home-heading-container1">
//           <h2 className="home-text029 Section-Heading">
//             <span>
//               Professional
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>Experience</span>
//           </h2>
//         </div>
//         <div className="home-cards-container1">
//           <div className="home-card">
//             <div className="home-icon-container">
//               <a
//                 href="https://www.tcs.com/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link11"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image2"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container">
//               <span className="home-heading04 Card-Heading">
//                 Software Development Intern
//               </span>
//               <span className="home-heading05">April 2023 - Present</span>
//               <span className="home-text033 Card-Text">
//                 <span className="home-text034 Card-Text">
//                   I am currently working as a software developer at
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <a
//                   href="https://www.tcs.com/what-we-do/pace-innovation"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link12 Card-Text"
//                 >
//                   TCS PACE
//                 </a>
//                 <span className="home-text035 Card-Text">.</span>
//                 <br className="home-text036 Card-Text"></br>
//                 <span className="home-text037 Card-Text">
//                   {' '}
//                   - Work with software and technology for different projects for
//                   various clients.
//                 </span>
//                 <br className="home-text038 Card-Text"></br>
//                 <span className="home-text039 Card-Text">
//                   {' '}
//                   - Carry out research and development for the Pace Port.
//                 </span>
//               </span>
//             </div>
//           </div>
//           <div className="home-card01">
//             <div className="home-icon-container1">
//               <a
//                 href="https://www.karmanspace.co.uk/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link13"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image3"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container1">
//               <span className="home-heading06 Card-Heading">
//                 Avionics Team Software Engineer
//               </span>
//               <span className="home-heading07">
//                 <span>October 2022 - Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text042">
//                 <span className="Card-Text">
//                   I am currently working as a software developer at
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <span className="Card-Text">KSP</span>
//                 <span className="Card-Text">.</span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   {' '}
//                   - KSP (Karman Space Programme) aspires to be the first
//                   student‑led team to reach space using a reusable rocket to
//                   reach the Karman line.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   {' '}
//                   - Deal with microcontrollers that interface with various
//                   sensors used by the rocket.
//                 </span>
//                 <br></br>
//                 <br className="Card-Text"></br>
//                 <br></br>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card02">
//             <div className="home-icon-container2">
//               <a
//                 href="https://www.imperialcollegeunion.org/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link14"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image4"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container2">
//               <span className="home-heading08 Card-Heading">
//                 EE Departmental Representative
//               </span>
//               <span className="home-heading09">
//                 <span>July 2021 ‑ Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text056">
//                 <span>
//                   - Act as an intermediary between the EE department and the
//                   students from the department.
//                 </span>
//                 <br className="home-text058 Card-Text"></br>
//                 <span>
//                   {' '}
//                   - Responsibilities include attending/participating in
//                   committee meetings that range from university‑level to
//                   department‑level; coordinating with year representatives;
//                   dealing with academic and wellbeing issues.
//                 </span>
//                 <br></br>
//                 <br className="home-text061 Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="home-cards-container2">
//           <div className="home-card03">
//             <div className="home-icon-container3">
//               <a
//                 href="https://www.makitauk.com/manufacturing"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link15"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image5"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container3">
//               <span className="home-heading10 Card-Heading">
//                 Assembly Line Feeder/Worker
//               </span>
//               <span className="home-heading11">July 2021 - September 2021</span>
//               <span className="home-text062">
//                 <span>
//                   - Gained experience working in a high‑pressure and
//                   time‑critical environment.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Was relied upon heavily to keep the assembly line running
//                   and abundant with the correct components that corresponded to
//                   the model that was being constructed.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Noticed a time inefficiency with the ordering system and
//                   suggested an alternative method to save time and energy for
//                   other line feeders.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Worked with senior colleagues to do trial runs and tests to
//                   put the new method into place.
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card04">
//             <div className="home-icon-container4">
//               <a
//                 href="https://www.stjohnsmuxton.org.uk/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link16"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image6"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container4">
//               <span className="home-heading12 Card-Heading">
//                 <span>
//                   Youth Club
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Helper</span>
//               </span>
//               <span className="home-heading13">
//                 <span>November 2018 - May 2019</span>
//                 <br></br>
//               </span>
//               <span className="home-text078">
//                 <span>
//                   - Learnt how to interact with various age groups during these
//                   sessions as I met lots of parents and children.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span>
//                   {' '}
//                   - Identified the wants and needs of others to create a nice
//                   working environment.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <br></br>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card05">
//             <div className="home-icon-container5">
//               <a
//                 href="https://www.smartwater.com/?language=en-uk"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link17"
//               >
//                 <img
//                   alt="image"
//                   src="https://play.teleporthq.io/static/svg/default-img.svg"
//                   className="home-image7"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container5">
//               <span className="home-heading14">
//                 <span className="Card-Heading">Intern</span>
//                 <br></br>
//                 <br></br>
//               </span>
//               <span className="home-heading15">
//                 <span>July 2021 ‑ Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text090">
//                 <span>
//                   During the two weeks, I was placed into different departments,
//                   within the company to understand how each department uses
//                   Science and Engineering.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Education" className="home-pricing">
//         <div className="home-heading-container2">
//           <h1 className="home-text093 Section-Heading">Education</h1>
//         </div>
//         <div className="home-pricing-card-container">
//           <div className="home-card06">
//             <div className="home-card-heading">
//               <span className="home-type Anchor">Imperial College London</span>
//               <span className="home-price">
//                 Electronic and Information Engineering (MEng)
//               </span>
//               <span className="home-type1 Anchor">2020-2024</span>
//             </div>
//             <div className="home-card-content">
//               <span className="home-text094">
//                 <span>
//                   Relevant Modules: Digital and Computer Architecture,
//                   Mathematics, Software Systems, Discrete Mathematics,
//                   Introduction to Machine Learning, Communication Networks,
//                   Operations Research, Embedded Systems, Digital Systems Design,
//                   Network and Web Security, Computer Vision.
//                 </span>
//                 <br></br>
//                 <span>
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span> Extracurricular Activities:</span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Fencing: Member of the Imperial College Fencing Club.
//                 </span>
//                 <br></br>
//                 <span> - KSP: Member of Karman Space Programme.</span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card07">
//             <a
//               href="https://github.com/IshaanReni/MIPS_CPU"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="home-link18"
//             >
//               <div className="home-card-heading1">
//                 <span className="home-type2 Anchor">
//                   Haberdashers&apos; Adams
//                 </span>
//                 <span className="home-price1">A-Levels</span>
//                 <span className="home-type3 Anchor">2018-2020</span>
//               </div>
//             </a>
//             <div className="home-card-content1">
//               <span className="home-text105">
//                 <span>A‑levels:</span>
//                 <br></br>
//                 <span> - Computer Science(A*)</span>
//                 <br></br>
//                 <span> - Mathematics(A*)</span>
//                 <br></br>
//                 <span> - Physics(A)</span>
//                 <br></br>
//                 <span> - AS Further Mathematics(B)</span>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card08">
//             <div className="home-card-heading2">
//               <span className="home-type4 Anchor">
//                 Haberdashers&apos; Adams
//               </span>
//               <span className="home-price2">GCSEs</span>
//               <span className="home-type5 Anchor">2015-2018</span>
//             </div>
//             <div className="home-card-content2">
//               <span className="home-text116">
//                 <span>GCSEs:</span>
//                 <br></br>
//                 <span> - Computer Science(A*)</span>
//                 <br></br>
//                 <span> - Product Design(A*)</span>
//                 <br></br>
//                 <span> - Mathematics(A*)</span>
//                 <br></br>
//                 <span> - Physics(A*)</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Projects" className="home-pricing1">
//         <div className="home-heading-container3">
//           <h1 id="Project" className="home-text126 Section-Heading">
//             Projects
//           </h1>
//         </div>
//         <div className="home-pricing-card-container1">
//           <div className="home-card09">
//             <div className="home-card-heading3">
//               <span className="home-price3">Firewatch Ltd.</span>
//               <div className="home-container15">
//                 <a
//                   href="https://ishaanreni20.wixsite.com/firewatch"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link19"
//                 >
//                   <svg
//                     viewBox="0 0 877.7142857142857 1024"
//                     className="home-icon08"
//                   >
//                     <path d="M731.429 530.286v-274.286c0-20-16.571-36.571-36.571-36.571h-274.286c-14.857 0-28 9.143-33.714 22.286-5.714 13.714-2.857 29.714 8 40l82.286 82.286-305.143 305.143c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0l305.143-305.143 82.286 82.286c6.857 7.429 16 10.857 25.714 10.857 4.571 0 9.714-1.143 14.286-2.857 13.143-5.714 22.286-18.857 22.286-33.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="home-card-content3">
//               <span className="home-text127">
//                 <span>
//                   An IoT-based forest fire detection system that uses a network
//                   of sensors to detect forest fires and alert the authorities
//                   with it&apos;s dashboard.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text"> </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   It uses Python, Flask (a python-based web framework) and
//                   Embedded C for the microcontrollers used for detecting fires
//                   and smoke.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card10">
//             <div className="home-card-heading4">
//               <span className="home-price4">Mars Rover</span>
//               <a
//                 href="https://github.com/IshaanReni/Vision"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link20"
//               >
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon10"
//                 >
//                   <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                 </svg>
//               </a>
//             </div>
//             <div className="home-card-content4">
//               <span className="home-text134">
//                 <span>
//                   End of year project for Year 2 of my degree where groups of
//                   seven put together a mars rover. My main role was the Vision
//                   aspect of the rover. We worked in a cohesive team to create a
//                   rover that could explore a small area and map obstacles it
//                   could see.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   An image processing pipeline was written in System Verilog to
//                   apply different kernel filters, such as Gaussian blur, onto
//                   the raw pixel data. The NIOS II Processor used some embedded C
//                   code to coordinate the object detection.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card11">
//             <div className="home-card-heading5">
//               <span className="home-price5">
//                 <span>
//                   C-To-MIPS
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Compiler</span>
//               </span>
//             </div>
//             <div className="home-card-content5">
//               <span className="home-text143">
//                 <span>
//                   Programmed a working C‑compiler that compiles from C to MIPS
//                   assembly. Used a FLEX/Bison combination for the lexer/parser.
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   {' '}
//                   The produced abstract syntax tree (AST) was converted into
//                   MIPS I assembly using a hand‑crafted code generation
//                   algorithm.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="home-pricing-card-container2">
//           <div className="home-card12">
//             <div className="home-card-heading6">
//               <span className="home-price6">
//                 <span>Can&apos;t Touch This</span>
//                 <br></br>
//                 <span>FPGA Pedometer</span>
//               </span>
//             </div>
//             <div className="home-card-content6">
//               <span className="home-text152">
//                 <span>
//                   Programmed a NIOS II Processor using C to interpret readings
//                   from the accelerometer on the FPGA to make a Pedometer.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   Pedometer was part of an IoT system that forwarded the
//                   pedometer data to a web server to be viewed by the user.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card13">
//             <a
//               href="https://github.com/IshaanReni/MIPS_CPU"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="home-link21"
//             >
//               <div className="home-card-heading7">
//                 <span className="home-price7">
//                   <span>
//                     MIPS I ISA
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                   <br></br>
//                   <span>Compliant CPU</span>
//                 </span>
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon12"
//                 >
//                   <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                 </svg>
//               </div>
//             </a>
//             <div className="home-card-content7">
//               <span className="home-text161">
//                 <span>
//                   Part of a group project that designed and implemented a
//                   synthesizable MIPS‑compatible CPU using SystemVerilog.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   Built an assembler using Python that converted MIPS assembly
//                   code to machine code. A thorough testbench that can be used to
//                   test another group’s CPU.
//                 </span>
//               </span>
//             </div>
//           </div>
//           <div className="home-card14">
//             <div className="home-card-heading8">
//               <span className="home-price8">
//                 <span>
//                   Dual-Core
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Floating Point CPU</span>
//               </span>
//             </div>
//             <div className="home-card-content8">
//               <span className="home-text169">
//                 <span>
//                   Designed and implemented a dual‑core CPU as part of a group on
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <a
//                   href="https://tomcl.github.io/issie/"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link22"
//                 >
//                   ISSIE
//                 </a>
//                 <span>.</span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   {' '}
//                   Implemented a floating‑point arithmetic logic unit as part of
//                   the CPU.
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator2"></div>
//       <div className="home-section-separator3"></div>
//       <div className="home-section-separator4"></div>
//       <div className="home-section-separator5"></div>
//       <div className="home-subscribe">
//         <img alt="image" src="/default-img.svg" className="home-image8" />
//         <div className="home-container16">
//           <div className="home-heading-container4">
//             <h1 id="Contact" className="home-text175 Section-Heading">
//               Contact Me
//             </h1>
//             <span className="home-text176">
//               <span className="home-text177">
//                 Feel free to reach out to me about opportunities or anything
//                 else that I may be interested in!
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: ' ',
//                   }}
//                 />
//               </span>
//               <br className="home-text178"></br>
//               <br className="home-text179"></br>
//               <span className="home-text180">
//                 I&apos;ll do my best to get back to you:)
//               </span>
//               <br></br>
//             </span>
//             <div className="home-container17">
//               <div className="home-container18">
//                 <a
//                   href="mailto:ishaanreni@gmail.com?subject=Re: Saw Your Portfolio"
//                   className="home-link23"
//                 >
//                   <svg viewBox="0 0 1024 1024" className="home-icon14">
//                     <path d="M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
//                   </svg>
//                 </a>
//               </div>
//               <a href="tel:+447856038982" className="home-link24">
//                 <svg
//                   viewBox="0 0 804.5714285714286 1024"
//                   className="home-icon16"
//                 >
//                   <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator6"></div>
//       <div className="home-footer-container">
//         <div className="home-footer">
//           <div className="home-social-links">
//             <a href="#Top" className="home-link25 Navbar-Link">
//               Back To Top
//             </a>
//           </div>
//           <div className="home-copyright-container">
//             <svg viewBox="0 0 1024 1024" className="home-icon18">
//               <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
//             </svg>
//             <span className="home-link26">
//               <span className="Anchor">
//                 Copyright
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: ' ',
//                   }}
//                 />
//               </span>
//               <span>Ishaan Reni</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home











// import React from 'react'
// import { Link } from 'react-router-dom'

// import { Helmet } from 'react-helmet'

// import './home.css'

// const Home = (props) => {
//   return (
//     <div className="home-container">
//       <Helmet>
//         <title>Portfolio Page</title>
//         <meta property="og:title" content="Portfolio Page" />
//       </Helmet>
//       <div data-role="Header" className="home-navbar-container">
//         <div className="home-navbar">
//           <div className="home-container01">
//             <Link to="/" className="home-navlink">
//               <img
//                 src="/external/pastedimage-xxxx-1500w-1500w.png"
//                 className="home-image"
//               />
//             </Link>
//           </div>
//           <div className="home-links-container">
//             <a href="#About" className="home-link Navbar-Link">
//               About Me
//             </a>
//             <a href="#Experience" className="home-link01 Navbar-Link">
//               {' '}
//               Experience
//             </a>
//             <span className="home-link02 Navbar-Link">Education</span>
//             <a href="#Projects" className="home-link03 Navbar-Link">
//               Projects
//             </a>
//             <a href="#Interests" className="home-link04 Navbar-Link">
//               Interests
//             </a>
//             <a href="#Contact" className="home-link05 Navbar-Link">
//               Contact
//             </a>
//           </div>
//           <div data-role="BurgerMenu" className="home-burger-menu">
//             <svg viewBox="0 0 1024 1024" className="home-icon">
//               <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
//             </svg>
//           </div>
//           <div data-role="MobileMenu" className="home-mobile-menu">
//             <div className="home-container02">
//               <span className="Card-Heading home-heading">Logo</span>
//               <div data-role="CloseMobileMenu" className="home-close-menu">
//                 <svg viewBox="0 0 1024 1024" className="home-icon02">
//                   <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="home-links-container1">
//               <span className="home-link06 Navbar-Link">About</span>
//               <span className="home-link07 Navbar-Link">Experience</span>
//               <span className="home-link08 Navbar-Link">Portofolio</span>
//               <span className="Navbar-Link">Contact</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator"></div>
//       <div className="home-section-separator1"></div>
//       <div id="Top" className="home-container03">
//         <div className="home-hero">
//           <div className="home-hero-text-container">
//             <h1 className="home-heading01">Hi, my name is</h1>
//             <h1 className="home-heading02">Ishaan.</h1>
//             <h1 className="home-heading03">
//               I connect the digital and the physical
//             </h1>
//             <span className="home-text">
//               A passionate software development intern. I tend to make use of a
//               wide variety of technologies for projects, ranging from web
//               development to embedded programming.
//             </span>
//             <div className="home-container04">
//               <div className="home-container05">
//                 <div className="home-container06">
//                   <div className="home-container07">
//                     <div className="home-cta-btn-container">
//                       <svg
//                         viewBox="0 0 877.7142857142857 1024"
//                         className="home-icon04"
//                       >
//                         <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM510.857 612c14.286 11.429 30.286 21.714 48 32 24-2.857 46.286-4 66.857-4 38.286 0 86.857 4.571 101.143 28 4 5.714 7.429 16 1.143 29.714-0.571 0.571-1.143 1.714-1.714 2.286v0.571c-1.714 10.286-10.286 21.714-40.571 21.714-36.571 0-92-16.571-140-41.714-79.429 8.571-162.857 26.286-224 47.429-58.857 100.571-104 149.714-138.286 149.714-5.714 0-10.857-1.143-16-4l-13.714-6.857c-1.714-0.571-2.286-1.714-3.429-2.857-2.857-2.857-5.143-9.143-3.429-20.571 5.714-26.286 36.571-70.286 107.429-107.429 4.571-2.857 10.286-1.143 13.143 3.429 0.571 0.571 1.143 1.714 1.143 2.286 17.714-29.143 38.286-66.286 61.143-112.571 25.714-51.429 45.714-101.714 59.429-149.714-18.286-62.286-24-126.286-13.714-164 4-14.286 12.571-22.857 24-22.857h12.571c8.571 0 15.429 2.857 20 8.571 6.857 8 8.571 20.571 5.143 38.857-0.571 1.714-1.143 3.429-2.286 4.571 0.571 1.714 0.571 2.857 0.571 4.571v17.143c-0.571 36-1.143 70.286-8 109.714 20 60 49.714 108.571 83.429 136zM181.714 846.857c17.143-8 41.714-32.571 78.286-90.286-42.857 33.143-69.714 70.857-78.286 90.286zM409.143 321.143c-5.714 16-5.714 43.429-1.143 75.429 1.714-9.143 2.857-17.714 4-25.143 1.143-9.714 2.857-17.714 4-24.571 0.571-1.714 1.143-2.857 2.286-4.571-0.571-0.571-0.571-1.714-1.143-2.857-0.571-10.286-4-16.571-7.429-20.571 0 1.143-0.571 1.714-0.571 2.286zM338.286 698.857c50.286-20 106.286-36 162.286-46.286-5.714-4.571-11.429-8.571-16.571-13.143-28-24.571-53.143-58.857-72.571-100.571-10.857 34.857-26.857 72-47.429 112.571-8.571 16-17.143 32-25.714 47.429zM707.429 689.714c-2.857-2.857-17.714-13.714-80-13.714 28 10.286 53.714 16 70.857 16 5.143 0 8 0 10.286-0.571 0-0.571-0.571-1.143-1.143-1.714z"></path>
//                       </svg>
//                       <a
//                         href="https://github.com/IshaanReni"
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="home-link10"
//                       >
//                         <svg
//                           viewBox="0 0 877.7142857142857 1024"
//                           className="home-icon06"
//                         >
//                           <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                         </svg>
//                       </a>
//                       <a
//                         href="https://www.linkedin.com/in/ishaan-reni/"
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="home-link11"
//                       >
//                         <svg
//                           viewBox="0 0 877.7142857142857 1024"
//                           className="home-icon08"
//                         >
//                           <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="home-hero-text-container1">
//             <img
//               alt="image"
//               src="/external/pastedimage-xxxx-1500w-1500w.png"
//               className="home-image1"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="home-features">
//         <div className="home-heading-container">
//           <h2 id="About" className="home-text001 Section-Heading">
//             About Me
//           </h2>
//         </div>
//         <span className="home-text002">
//           <span className="Section-Text">
//             I have a keen interest in the software-engineering industry. Along
//             with a passion for digital electronics, computer architecture and
//             embedded programming, I am a quick learner and a team player with
//             excellent communication skills. I am also a self‑motivated
//             individual with a strong work ethic and a desire to learn new
//             skills.
//           </span>
//           <br></br>
//         </span>
//         <span className="home-text005">
//           <span className="Section-Text">
//             I am currently working as a software development intern at
//           </span>
//           <span className="Section-Text">
//             <span
//               dangerouslySetInnerHTML={{
//                 __html: ' ',
//               }}
//             />
//           </span>
//           <span className="Section-Text">Tata Consultancy Services</span>
//           <span className="Section-Text"> in London, UK.</span>
//           <br></br>
//         </span>
//         <span className="home-text011">
//           <span>
//             Here are a few technologies I&apos;ve been working with recently:
//           </span>
//           <br></br>
//         </span>
//         <div className="home-container08"></div>
//         <div className="home-cards-container">
//           <div className="home-container09">
//             <div className="home-container10">
//               <span className="home-text014">
//                 <span> - Python</span>
//                 <br></br>
//               </span>
//               <span className="home-text017"> - Embedded C</span>
//             </div>
//             <span className="home-text018">
//               <span> - Machine Learning</span>
//               <br></br>
//             </span>
//           </div>
//           <div className="home-container11">
//             <div className="home-container12">
//               <div className="home-container13">
//                 <div className="home-container14">
//                   <span className="home-text021">
//                     <span> - C++</span>
//                     <br></br>
//                   </span>
//                 </div>
//                 <span className="home-text024"> - System Verilog</span>
//               </div>
//               <span className="home-text025">
//                 <span> - Web Security</span>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Experience" className="home-features1">
//         <div className="home-heading-container1">
//           <h2 className="home-text028 Section-Heading">
//             <span>
//               Professional
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: ' ',
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>Experience</span>
//           </h2>
//         </div>
//         <div className="home-cards-container1">
//           <div className="home-card">
//             <div className="home-icon-container">
//               <a
//                 href="https://www.tcs.com/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link12"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image2"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container">
//               <span className="home-heading04 Card-Heading">
//                 Software Development Intern
//               </span>
//               <span className="home-heading05">April 2023 - Present</span>
//               <span className="home-text032 Card-Text">
//                 <span className="home-text033 Card-Text">
//                   I am currently working as a software developer at
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <a
//                   href="https://www.tcs.com/what-we-do/pace-innovation"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link13 Card-Text"
//                 >
//                   TCS PACE
//                 </a>
//                 <span className="home-text034 Card-Text">.</span>
//                 <br className="home-text035 Card-Text"></br>
//                 <span className="home-text036 Card-Text">
//                   {' '}
//                   - Work with software and technology for different projects for
//                   various clients.
//                 </span>
//                 <br className="home-text037 Card-Text"></br>
//                 <span className="home-text038 Card-Text">
//                   {' '}
//                   - Carry out research and development for the Pace Port.
//                 </span>
//               </span>
//             </div>
//           </div>
//           <div className="home-card01">
//             <div className="home-icon-container1">
//               <a
//                 href="https://www.karmanspace.co.uk/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link14"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image3"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container1">
//               <span className="home-heading06 Card-Heading">
//                 Avionics Team Software Engineer
//               </span>
//               <span className="home-heading07">
//                 <span>October 2022 - Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text041">
//                 <span className="Card-Text">
//                   I am currently working as a software developer at
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <span className="Card-Text">KSP</span>
//                 <span className="Card-Text">.</span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   {' '}
//                   - KSP (Karman Space Programme) aspires to be the first
//                   student‑led team to reach space using a reusable rocket to
//                   reach the Karman line.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   {' '}
//                   - Deal with microcontrollers that interface with various
//                   sensors used by the rocket.
//                 </span>
//                 <br></br>
//                 <br className="Card-Text"></br>
//                 <br></br>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card02">
//             <div className="home-icon-container2">
//               <a
//                 href="https://www.imperialcollegeunion.org/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link15"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image4"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container2">
//               <span className="home-heading08 Card-Heading">
//                 EE Departmental Representative
//               </span>
//               <span className="home-heading09">
//                 <span>July 2021 ‑ Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text055">
//                 <span>
//                   - Act as an intermediary between the EE department and the
//                   students from the department.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span>
//                   {' '}
//                   - Responsibilities include attending/participating in
//                   committee meetings that range from university‑level to
//                   department‑level; coordinating with year representatives;
//                   dealing with academic and wellbeing issues.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="home-cards-container2"></div>
//         <div className="home-cards-container3">
//           <div className="home-card03">
//             <div className="home-icon-container3">
//               <a
//                 href="https://www.makitauk.com/manufacturing"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link16"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image5"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container3">
//               <span className="home-heading10 Card-Heading">
//                 Assembly Line Feeder/Worker
//               </span>
//               <span className="home-heading11">July 2021 - September 2021</span>
//               <span className="home-text060">
//                 <span>
//                   - Gained experience working in a high‑pressure and
//                   time‑critical environment.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Was relied upon heavily to keep the assembly line running
//                   and abundant with the correct components that corresponded to
//                   the model that was being constructed.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Noticed a time inefficiency with the ordering system and
//                   suggested an alternative method to save time and energy for
//                   other line feeders.
//                 </span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Worked with senior colleagues to do trial runs and tests to
//                   put the new method into place.
//                 </span>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card04">
//             <div className="home-icon-container4">
//               <a
//                 href="https://www.stjohnsmuxton.org.uk/"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link17"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image6"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container4">
//               <span className="home-heading12 Card-Heading">
//                 <span>
//                   Youth Club
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Helper</span>
//               </span>
//               <span className="home-heading13">
//                 <span>November 2018 - May 2019</span>
//                 <br></br>
//               </span>
//               <span className="home-text074">
//                 <span>
//                   - Learnt how to interact with various age groups during these
//                   sessions as I met lots of parents and children.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span>
//                   {' '}
//                   - Identified the wants and needs of others to create a nice
//                   working environment.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <br></br>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card05">
//             <div className="home-icon-container5">
//               <a
//                 href="https://www.smartwater.com/?language=en-uk"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link18"
//               >
//                 <img
//                   alt="image"
//                   src="/external/pastedimage-xxxx-1500w-1500w.png"
//                   className="home-image7"
//                 />
//               </a>
//             </div>
//             <div className="home-content-container5">
//               <span className="home-heading14">
//                 <span className="Card-Heading">Intern</span>
//                 <br></br>
//                 <br></br>
//               </span>
//               <span className="home-heading15">
//                 <span>July 2021 ‑ Present</span>
//                 <br></br>
//               </span>
//               <span className="home-text086">
//                 <span>
//                   During the two weeks, I was placed into different departments,
//                   within the company to understand how each department uses
//                   Science and Engineering.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Education" className="home-pricing">
//         <div className="home-heading-container2">
//           <h1 className="home-text089 Section-Heading">Education</h1>
//         </div>
//         <div className="home-pricing-card-container">
//           <div className="home-card06">
//             <div className="home-card-heading">
//               <span className="home-type Anchor">Imperial College London</span>
//               <span className="home-price">
//                 Electronic and Information Engineering (MEng)
//               </span>
//               <span className="home-type1 Anchor">2020-2024</span>
//             </div>
//             <div className="home-card-content">
//               <span className="home-text090">
//                 <span>
//                   Relevant Modules: Digital and Computer Architecture,
//                   Mathematics, Software Systems, Discrete Mathematics,
//                   Introduction to Machine Learning, Communication Networks,
//                   Operations Research, Embedded Systems, Digital Systems Design,
//                   Network and Web Security, Computer Vision.
//                 </span>
//                 <br></br>
//                 <span>
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span> Extracurricular Activities:</span>
//                 <br></br>
//                 <span>
//                   {' '}
//                   - Fencing: Member of the Imperial College Fencing Club.
//                 </span>
//                 <br></br>
//                 <span> - KSP: Member of Karman Space Programme.</span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card07">
//             <a
//               href="https://github.com/IshaanReni/MIPS_CPU"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="home-link19"
//             >
//               <div className="home-card-heading1">
//                 <span className="home-type2 Anchor">
//                   Haberdashers&apos; Adams
//                 </span>
//                 <span className="home-price1">A-Levels</span>
//                 <span className="home-type3 Anchor">2018-2020</span>
//               </div>
//             </a>
//             <div className="home-card-content1">
//               <span className="home-text101">
//                 <span>A‑levels:</span>
//                 <br></br>
//                 <span> - Computer Science(A*): </span>
//                 <br></br>
//                 <span>
//                   Made a text-based game for a client that was inspired from
//                   &quot;Hitchhiker&apos;s Guide to the Galaxy&quot;.
//                 </span>
//                 <br></br>
//                 <span> - Mathematics(A*)</span>
//                 <br></br>
//                 <span> - Physics(A)</span>
//                 <br></br>
//                 <span> - AS Further Mathematics(B)</span>
//                 <br></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card08">
//             <div className="home-card-heading2">
//               <span className="home-type4 Anchor">
//                 Haberdashers&apos; Adams
//               </span>
//               <span className="home-price2">GCSEs</span>
//               <span className="home-type5 Anchor">2015-2018</span>
//             </div>
//             <div className="home-card-content2">
//               <span className="home-text114">
//                 <span>GCSEs:</span>
//                 <br></br>
//                 <span> - Computer Science(A*)</span>
//                 <br></br>
//                 <span> - Product Design(A*):</span>
//                 <br></br>
//                 <span>
//                   Awarded the highest possible mark for my coursework, a bespoke
//                   fixed-gear bicycle made from scratch.
//                 </span>
//                 <br></br>
//                 <span> - Mathematics(A*)</span>
//                 <br></br>
//                 <span> - Physics(A*)</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="Projects" className="home-pricing1">
//         <div className="home-heading-container3">
//           <h1 id="Project" className="home-text126 Section-Heading">
//             Projects
//           </h1>
//         </div>
//         <div className="home-pricing-card-container1">
//           <div className="home-card09">
//             <div className="home-card-heading3">
//               <span className="home-price3">Firewatch Ltd.</span>
//               <div className="home-container15">
//                 <a
//                   href="https://ishaanreni20.wixsite.com/firewatch"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link20"
//                 >
//                   <svg
//                     viewBox="0 0 877.7142857142857 1024"
//                     className="home-icon10"
//                   >
//                     <path d="M731.429 530.286v-274.286c0-20-16.571-36.571-36.571-36.571h-274.286c-14.857 0-28 9.143-33.714 22.286-5.714 13.714-2.857 29.714 8 40l82.286 82.286-305.143 305.143c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0l305.143-305.143 82.286 82.286c6.857 7.429 16 10.857 25.714 10.857 4.571 0 9.714-1.143 14.286-2.857 13.143-5.714 22.286-18.857 22.286-33.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="home-card-content3">
//               <span className="home-text127">
//                 <span>
//                   An IoT-based forest fire detection system that uses a network
//                   of sensors to detect forest fires and alert the authorities
//                   with it&apos;s dashboard.
//                 </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text"> </span>
//                 <br className="Card-Text"></br>
//                 <span className="Card-Text">
//                   It uses Python, Flask (a python-based web framework) and
//                   Embedded C for the microcontrollers used for detecting fires
//                   and smoke.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card10">
//             <div className="home-card-heading4">
//               <span className="home-price4">Mars Rover</span>
//               <a
//                 href="https://github.com/IshaanReni/Vision"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="home-link21"
//               >
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon12"
//                 >
//                   <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                 </svg>
//               </a>
//             </div>
//             <div className="home-card-content4">
//               <span className="home-text134">
//                 <span>
//                   End of year project for Year 2 of my degree where groups of
//                   seven put together a mars rover. My main role was the Vision
//                   aspect of the rover. We worked in a cohesive team to create a
//                   rover that could explore a small area and map obstacles it
//                   could see.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   An image processing pipeline was written in System Verilog to
//                   apply different kernel filters, such as Gaussian blur, onto
//                   the raw pixel data. The NIOS II Processor used some embedded C
//                   code to coordinate the object detection.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card11">
//             <div className="home-card-heading5">
//               <span className="home-price5">
//                 <span>
//                   C-To-MIPS
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Compiler</span>
//               </span>
//             </div>
//             <div className="home-card-content5">
//               <span className="home-text143">
//                 <span>
//                   Programmed a working C‑compiler that compiles from C to MIPS
//                   assembly. Used a FLEX/Bison combination for the lexer/parser.
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   {' '}
//                   The produced abstract syntax tree (AST) was converted into
//                   MIPS I assembly using a hand‑crafted code generation
//                   algorithm.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="home-pricing-card-container2">
//           <div className="home-card12">
//             <div className="home-card-heading6">
//               <span className="home-price6">
//                 <span>Can&apos;t Touch This</span>
//                 <br></br>
//                 <span>FPGA Pedometer</span>
//               </span>
//             </div>
//             <div className="home-card-content6">
//               <span className="home-text152">
//                 <span>
//                   Programmed a NIOS II Processor using C to interpret readings
//                   from the accelerometer on the FPGA to make a Pedometer.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   Pedometer was part of an IoT system that forwarded the
//                   pedometer data to a web server to be viewed by the user.
//                 </span>
//                 <br className="Card-Text"></br>
//               </span>
//             </div>
//           </div>
//           <div className="home-card13">
//             <a
//               href="https://github.com/IshaanReni/MIPS_CPU"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="home-link22"
//             >
//               <div className="home-card-heading7">
//                 <span className="home-price7">
//                   <span>
//                     MIPS I ISA
//                     <span
//                       dangerouslySetInnerHTML={{
//                         __html: ' ',
//                       }}
//                     />
//                   </span>
//                   <br></br>
//                   <span>Compliant CPU</span>
//                 </span>
//                 <svg
//                   viewBox="0 0 877.7142857142857 1024"
//                   className="home-icon14"
//                 >
//                   <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
//                 </svg>
//               </div>
//             </a>
//             <div className="home-card-content7">
//               <span className="home-text161">
//                 <span>
//                   Part of a group project that designed and implemented a
//                   synthesizable MIPS‑compatible CPU using SystemVerilog.
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   Built an assembler using Python that converted MIPS assembly
//                   code to machine code. A thorough testbench that can be used to
//                   test another group’s CPU.
//                 </span>
//               </span>
//             </div>
//           </div>
//           <div className="home-card14">
//             <div className="home-card-heading8">
//               <span className="home-price8">
//                 <span>
//                   Dual-Core
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <br></br>
//                 <span>Floating Point CPU</span>
//               </span>
//             </div>
//             <div className="home-card-content8">
//               <span className="home-text169">
//                 <span>
//                   Designed and implemented a dual‑core CPU as part of a group on
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: ' ',
//                     }}
//                   />
//                 </span>
//                 <a
//                   href="https://tomcl.github.io/issie/"
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   className="home-link23"
//                 >
//                   ISSIE
//                 </a>
//                 <span>.</span>
//                 <br></br>
//                 <br></br>
//                 <span>
//                   {' '}
//                   Implemented a floating‑point arithmetic logic unit as part of
//                   the CPU.
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator2"></div>
//       <div className="home-section-separator3"></div>
//       <div className="home-section-separator4"></div>
//       <div className="home-section-separator5"></div>
//       <div className="home-hero1">
//         <h1 id="Interests" className="home-text175 Section-Heading">
//           Interests
//         </h1>
//         <div className="home-hero-text-container2">
//           <span className="home-text176">
//             <span className="home-text177">
//               In my quest for an active and well-rounded lifestyle, I regularly
//               engage in bouldering, badminton, and fencing. These activities
//               help me stay fit and invigorate my mind. Additionally, as a tech
//               enthusiast, I opt for an Arch-based distribution as my daily
//               operating system, allowing me to explore the intricacies of Linux
//               while enjoying a tailored computing experience. Combining my love
//               for sports and technology, I strike a harmonious balance between
//               physical and intellectual pursuits.
//             </span>
//             <br></br>
//           </span>
//         </div>
//       </div>
//       <div className="home-subscribe">
//         <img
//           alt="image"
//           src="/external/pastedimage-xxxx-1500w-1500w.png"
//           className="home-image8"
//         />
//         <div className="home-container16">
//           <div className="home-heading-container4">
//             <h1 id="Contact" className="home-text179 Section-Heading">
//               Contact Me
//             </h1>
//             <span className="home-text180">
//               <span className="home-text181">
//                 Feel free to reach out to me about opportunities or anything
//                 else that I may be interested in!
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: ' ',
//                   }}
//                 />
//               </span>
//               <br className="home-text182"></br>
//               <br className="home-text183"></br>
//               <span className="home-text184">
//                 I&apos;ll do my best to get back to you:)
//               </span>
//               <br></br>
//             </span>
//             <div className="home-container17">
//               <div className="home-container18">
//                 <a
//                   href="mailto:ishaanreni@gmail.com?subject=Re: Saw Your Portfolio"
//                   className="home-link24"
//                 >
//                   <svg viewBox="0 0 1024 1024" className="home-icon16">
//                     <path d="M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
//                   </svg>
//                 </a>
//               </div>
//               <a href="tel:+447856038982" className="home-link25">
//                 <svg
//                   viewBox="0 0 804.5714285714286 1024"
//                   className="home-icon18"
//                 >
//                   <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="home-section-separator6"></div>
//       <div className="home-footer-container">
//         <div className="home-footer">
//           <div className="home-social-links">
//             <a href="#Top" className="home-link26 Navbar-Link">
//               Back To Top
//             </a>
//           </div>
//           <div className="home-copyright-container">
//             <span className="home-link27">
//               <span className="Anchor">Built from Scratch By </span>
//               <span>Ishaan Reni</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home





import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-container01">
            <Link to="/" className="home-navlink">
              <img
                src="/external/pastedimage-xxxx-1500w-1500w.png"
                className="home-image"
              />
            </Link>
          </div>
          <div className="home-links-container">
            <a href="#About" className="home-link Navbar-Link">
              About Me
            </a>
            <a href="#Experience" className="home-link01 Navbar-Link">
              {' '}
              Experience
            </a>
            <a href="#Education" className="home-link02 Navbar-Link">
              Education
            </a>
            <a href="#Projects" className="home-link03 Navbar-Link">
              Projects
            </a>
            <a href="#Interests" className="home-link04 Navbar-Link">
              Interests
            </a>
            <a href="#Contact" className="home-link05 Navbar-Link">
              Contact
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container02">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link06 Navbar-Link">About</span>
              <span className="home-link07 Navbar-Link">Experience</span>
              <span className="home-link08 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div id="Top" className="home-container03">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading01">Hi, my name is</h1>
            <h1 className="home-heading02">Ishaan.</h1>
            <h1 className="home-heading03">
              I connect the digital and the physical
            </h1>
            <span className="home-text">
              A passionate software development intern. I tend to make use of a
              wide variety of technologies for projects, ranging from web
              development to embedded programming.
            </span>
            <div className="home-container04">
              <div className="home-container05">
                <div className="home-container06">
                  <div className="home-container07">
                    <div className="home-cta-btn-container">
                      <a
                        href="cv_ishaan_reni.pdf"
                        target="_blank"
                        download="Ishaan_Reni_CV"
                        // class="pdf"
                      >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon04"
                      >
                        <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM510.857 612c14.286 11.429 30.286 21.714 48 32 24-2.857 46.286-4 66.857-4 38.286 0 86.857 4.571 101.143 28 4 5.714 7.429 16 1.143 29.714-0.571 0.571-1.143 1.714-1.714 2.286v0.571c-1.714 10.286-10.286 21.714-40.571 21.714-36.571 0-92-16.571-140-41.714-79.429 8.571-162.857 26.286-224 47.429-58.857 100.571-104 149.714-138.286 149.714-5.714 0-10.857-1.143-16-4l-13.714-6.857c-1.714-0.571-2.286-1.714-3.429-2.857-2.857-2.857-5.143-9.143-3.429-20.571 5.714-26.286 36.571-70.286 107.429-107.429 4.571-2.857 10.286-1.143 13.143 3.429 0.571 0.571 1.143 1.714 1.143 2.286 17.714-29.143 38.286-66.286 61.143-112.571 25.714-51.429 45.714-101.714 59.429-149.714-18.286-62.286-24-126.286-13.714-164 4-14.286 12.571-22.857 24-22.857h12.571c8.571 0 15.429 2.857 20 8.571 6.857 8 8.571 20.571 5.143 38.857-0.571 1.714-1.143 3.429-2.286 4.571 0.571 1.714 0.571 2.857 0.571 4.571v17.143c-0.571 36-1.143 70.286-8 109.714 20 60 49.714 108.571 83.429 136zM181.714 846.857c17.143-8 41.714-32.571 78.286-90.286-42.857 33.143-69.714 70.857-78.286 90.286zM409.143 321.143c-5.714 16-5.714 43.429-1.143 75.429 1.714-9.143 2.857-17.714 4-25.143 1.143-9.714 2.857-17.714 4-24.571 0.571-1.714 1.143-2.857 2.286-4.571-0.571-0.571-0.571-1.714-1.143-2.857-0.571-10.286-4-16.571-7.429-20.571 0 1.143-0.571 1.714-0.571 2.286zM338.286 698.857c50.286-20 106.286-36 162.286-46.286-5.714-4.571-11.429-8.571-16.571-13.143-28-24.571-53.143-58.857-72.571-100.571-10.857 34.857-26.857 72-47.429 112.571-8.571 16-17.143 32-25.714 47.429zM707.429 689.714c-2.857-2.857-17.714-13.714-80-13.714 28 10.286 53.714 16 70.857 16 5.143 0 8 0 10.286-0.571 0-0.571-0.571-1.143-1.143-1.714z"></path>
                      </svg>
                      </a>
                      <a
                        href="https://github.com/IshaanReni"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link10"
                      >
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon06"
                        >
                          <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ishaan-reni/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link11"
                      >
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon08"
                        >
                          <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-hero-text-container1">
            <img
              alt="image"
              src="/external/suit.png"
              className="home-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 id="About" className="home-text001 Section-Heading">
            About Me
          </h2>
        </div>
        <span className="home-text002">
          <span className="Section-Text">
            I have a keen interest in the software-engineering industry. Along
            with a passion for digital electronics, computer architecture and
            embedded programming, I am a quick learner and a team player with
            excellent communication skills. I am also a self‑motivated
            individual with a strong work ethic and a desire to learn new
            skills.
          </span>
          <br></br>
        </span>
        <span className="home-text005">
          <span className="Section-Text">
            I am currently working as a software development intern at
          </span>
          <span className="Section-Text">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="Section-Text">Tata Consultancy Services</span>
          <span className="Section-Text"> in London, UK.</span>
          <br></br>
        </span>
        <span className="home-text011">
          <span>
            Here are a few technologies I&apos;ve been working with recently:
          </span>
          <br></br>
        </span>
        <div className="home-container08"></div>
        <div className="home-cards-container">
          <div className="home-container09">
            <div className="home-container10">
              <span className="home-text014">
                <span> - Python</span>
                <br></br>
              </span>
              <span className="home-text017"> - Embedded C</span>
            </div>
            <span className="home-text018">
              <span> - Machine Learning</span>
              <br></br>
            </span>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <div className="home-container14">
                  <span className="home-text021">
                    <span> - C++</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text024"> - System Verilog</span>
              </div>
              <span className="home-text025">
                <span> - Web Security</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="Experience" className="home-features1">
        <div className="home-heading-container1">
          <h2 className="home-text028 Section-Heading">
            <span>
              Professional
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Experience</span>
          </h2>
        </div>
        <div className="home-cards-container1">
          <div className="home-card">
            <div className="home-icon-container">
              <a
                href="https://www.tcs.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <img
                  alt="image"
                  src="/external/tcs.jpg"
                  className="home-image2"
                />
              </a>
            </div>
            <div className="home-content-container">
              <span className="home-heading04 Card-Heading">
                Software Development Intern
              </span>
              <span className="home-heading05">April 2023 - Present</span>
              <span className="home-text032 Card-Text">
                <span className="home-text033 Card-Text">
                  I am currently working as a software developer at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.tcs.com/what-we-do/pace-innovation"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13 Card-Text"
                >
                  TCS PACE
                </a>
                <span className="home-text034 Card-Text">.</span>
                <br className="home-text035 Card-Text"></br>
                <span className="home-text036 Card-Text">
                  {' '}
                  - Work with software and technology for different projects for
                  various clients.
                </span>
                <br className="home-text037 Card-Text"></br>
                <span className="home-text038 Card-Text">
                  {' '}
                  - Carry out research and development for the Pace Port.
                </span>
              </span>
            </div>
          </div>
          <div className="home-card01">
            <div className="home-icon-container1">
              <a
                href="https://www.karmanspace.co.uk/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <img
                  alt="image"
                  src="/external/ksp.jpg"
                  className="home-image3"
                />
              </a>
            </div>
            <div className="home-content-container1">
              <span className="home-heading06 Card-Heading">
                Avionics Team Software Engineer
              </span>
              <span className="home-heading07">
                <span>October 2022 - Present</span>
                <br></br>
              </span>
              <span className="home-text041">
                <span className="Card-Text">
                  I am currently working as a software developer at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="Card-Text">KSP</span>
                <span className="Card-Text">.</span>
                <br className="Card-Text"></br>
                <span className="Card-Text">
                  {' '}
                  - KSP (Karman Space Programme) aspires to be the first
                  student‑led team to reach space using a reusable rocket to
                  reach the Karman line.
                </span>
                <br className="Card-Text"></br>
                <span className="Card-Text">
                  {' '}
                  - Deal with microcontrollers that interface with various
                  sensors used by the rocket.
                </span>
                <br></br>
                <br className="Card-Text"></br>
                <br></br>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card02">
            <div className="home-icon-container2">
              <a
                href="https://www.imperialcollegeunion.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <img
                  alt="image"
                  src="/external/logo-imperial-college-london.png"
                  className="home-image4"
                />
              </a>
            </div>
            <div className="home-content-container2">
              <span className="home-heading08 Card-Heading">
                EE Departmental Representative
              </span>
              <span className="home-heading09">
                <span>July 2021 ‑ Present</span>
                <br></br>
              </span>
              <span className="home-text055">
                <span>
                  - Act as an intermediary between the EE department and the
                  students from the department.
                </span>
                <br className="Card-Text"></br>
                <span>
                  {' '}
                  - Responsibilities include attending/participating in
                  committee meetings that range from university‑level to
                  department‑level; coordinating with year representatives;
                  dealing with academic and wellbeing issues.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
        </div>
        <div className="home-cards-container2"></div>
        <div className="home-cards-container3">
          <div className="home-card03">
            <div className="home-icon-container3">
              <a
                href="https://www.makitauk.com/manufacturing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <img
                  alt="image"
                  src="/external/makita.png"
                  className="home-image5"
                />
              </a>
            </div>
            <div className="home-content-container3">
              <span className="home-heading10 Card-Heading">
                Assembly Line Feeder/Worker
              </span>
              <span className="home-heading11">July 2021 - September 2021</span>
              <span className="home-text060">
                <span>
                  - Gained experience working in a high‑pressure and
                  time‑critical environment.
                </span>
                <br></br>
                <span>
                  {' '}
                  - Was relied upon heavily to keep the assembly line running
                  and abundant with the correct components that corresponded to
                  the model that was being constructed.
                </span>
                <br></br>
                <span>
                  {' '}
                  - Noticed a time inefficiency with the ordering system and
                  suggested an alternative method to save time and energy for
                  other line feeders.
                </span>
                <br></br>
                <span>
                  {' '}
                  - Worked with senior colleagues to do trial runs and tests to
                  put the new method into place.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card04">
            <div className="home-icon-container4">
              <a
                href="https://www.stjohnsmuxton.org.uk/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <img
                  alt="image"
                  src="/external/johns.jpg"
                  className="home-image6"
                />
              </a>
            </div>
            <div className="home-content-container4">
              <span className="home-heading12 Card-Heading">
                <span>
                  Youth Club
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Helper</span>
              </span>
              <span className="home-heading13">
                <span>November 2018 - May 2019</span>
                <br></br>
              </span>
              <span className="home-text074">
                <span>
                  - Learnt how to interact with various age groups during these
                  sessions as I met lots of parents and children.
                </span>
                <br className="Card-Text"></br>
                <span>
                  {' '}
                  - Identified the wants and needs of others to create a nice
                  working environment.
                </span>
                <br className="Card-Text"></br>
                <br></br>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card05">
            <div className="home-icon-container5">
              <a
                href="https://www.smartwater.com/?language=en-uk"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <img
                  alt="image"
                  src="/external/deter.jpg"
                  className="home-image7"
                />
              </a>
            </div>
            <div className="home-content-container5">
              <span className="home-heading14">
                <span className="Card-Heading">Intern</span>
                <br></br>
                <br></br>
              </span>
              <span className="home-heading15">
                <span>July 2021 ‑ Present</span>
                <br></br>
              </span>
              <span className="home-text086">
                <span>
                  During the two weeks, I was placed into different departments,
                  within the company to understand how each department uses
                  Science and Engineering.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="Education" className="home-pricing">
        <div className="home-heading-container2">
          <h1 className="home-text089 Section-Heading">Education</h1>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card06">
            <div className="home-card-heading">
              <span className="home-type Anchor">Imperial College London</span>
              <span className="home-price">
                Electronic and Information Engineering (MEng)
              </span>
              <span className="home-type1 Anchor">2020-2024</span>
            </div>
            <div className="home-card-content">
              <span className="home-text090">
                <span>
                  Relevant Modules: Digital and Computer Architecture,
                  Mathematics, Software Systems, Discrete Mathematics,
                  Introduction to Machine Learning, Communication Networks,
                  Operations Research, Embedded Systems, Digital Systems Design,
                  Network and Web Security, Computer Vision.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span> Extracurricular Activities:</span>
                <br></br>
                <span>
                  {' '}
                  - Fencing: Member of the Imperial College Fencing Club.
                </span>
                <br></br>
                <span> - KSP: Member of Karman Space Programme.</span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card07">
            <a
              href="https://github.com/IshaanReni/MIPS_CPU"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link19"
            >
              <div className="home-card-heading1">
                <span className="home-type2 Anchor">
                  Haberdashers&apos; Adams
                </span>
                <span className="home-price1">A-Levels</span>
                <span className="home-type3 Anchor">2018-2020</span>
              </div>
            </a>
            <div className="home-card-content1">
              <span className="home-text101">
                <span>A‑levels:</span>
                <br></br>
                <span> - Computer Science(A*): </span>
                <br></br>
                <span>
                  Made a text-based game for a client that was inspired from
                  &quot;Hitchhiker&apos;s Guide to the Galaxy&quot;.
                </span>
                <br></br>
                <span> - Mathematics(A*)</span>
                <br></br>
                <span> - Physics(A)</span>
                <br></br>
                <span> - AS Further Mathematics(B)</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-card08">
            <div className="home-card-heading2">
              <span className="home-type4 Anchor">
                Haberdashers&apos; Adams
              </span>
              <span className="home-price2">GCSEs</span>
              <span className="home-type5 Anchor">2015-2018</span>
            </div>
            <div className="home-card-content2">
              <span className="home-text114">
                <span>GCSEs:</span>
                <br></br>
                <span> - Computer Science(A*)</span>
                <br></br>
                <span> - Product Design(A*):</span>
                <br></br>
                <span>
                  Awarded the highest possible mark for my coursework, a bespoke
                  fixed-gear bicycle made from scratch.
                </span>
                <br></br>
                <span> - Mathematics(A*)</span>
                <br></br>
                <span> - Physics(A*)</span>
                <br></br>
                <span> - Chemistry(A*)</span>
                <br></br>
                <span> - Biology(A*)</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="Projects" className="home-pricing1">
        <div className="home-heading-container3">
          <h1 id="Project" className="home-text131 Section-Heading">
            Projects
          </h1>
        </div>
        <div className="home-pricing-card-container1">
          <div className="home-card09">
            <div className="home-card-heading3">
              <span className="home-price3">Firewatch Ltd.</span>
              <div className="home-container15">
                <a
                  href="https://ishaanreni20.wixsite.com/firewatch"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M731.429 530.286v-274.286c0-20-16.571-36.571-36.571-36.571h-274.286c-14.857 0-28 9.143-33.714 22.286-5.714 13.714-2.857 29.714 8 40l82.286 82.286-305.143 305.143c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0l305.143-305.143 82.286 82.286c6.857 7.429 16 10.857 25.714 10.857 4.571 0 9.714-1.143 14.286-2.857 13.143-5.714 22.286-18.857 22.286-33.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="home-card-content3">
              <span className="home-text132">
                <span>
                  An IoT-based forest fire detection system that uses a network
                  of sensors to detect forest fires and alert the authorities
                  with it&apos;s dashboard.
                </span>
                <br className="Card-Text"></br>
                <span className="Card-Text"> </span>
                <br className="Card-Text"></br>
                <span className="Card-Text">
                  It uses Python, Flask (a python-based web framework) and
                  Embedded C for the microcontrollers used for detecting fires
                  and smoke.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card10">
            <div className="home-card-heading4">
              <span className="home-price4">Mars Rover</span>
              <a
                href="https://github.com/IshaanReni/Vision"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link21"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </a>
            </div>
            <div className="home-card-content4">
              <span className="home-text139">
                <span>
                  End of year project for Year 2 of my degree where groups of
                  seven put together a mars rover. My main role was the Vision
                  aspect of the rover. We worked in a cohesive team to create a
                  rover that could explore a small area and map obstacles it
                  could see.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  An image processing pipeline was written in System Verilog to
                  apply different kernel filters, such as Gaussian blur, onto
                  the raw pixel data. The NIOS II Processor used some embedded C
                  code to coordinate the object detection.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card11">
            <div className="home-card-heading5">
              <span className="home-price5">
                <span>
                  C-To-MIPS
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Compiler</span>
              </span>
            </div>
            <div className="home-card-content5">
              <span className="home-text148">
                <span>
                  Programmed a working C‑compiler that compiles from C to MIPS
                  assembly. Used a FLEX/Bison combination for the lexer/parser.
                </span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  The produced abstract syntax tree (AST) was converted into
                  MIPS I assembly using a hand‑crafted code generation
                  algorithm.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
        </div>
        <div className="home-pricing-card-container2">
          <div className="home-card12">
            <div className="home-card-heading6">
              <span className="home-price6">
                <span>Can&apos;t Touch This</span>
                <br></br>
                <span>FPGA Pedometer</span>
              </span>
            </div>
            <div className="home-card-content6">
              <span className="home-text157">
                <span>
                  Programmed a NIOS II Processor using C to interpret readings
                  from the accelerometer on the FPGA to make a Pedometer.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Pedometer was part of an IoT system that forwarded the
                  pedometer data to a web server to be viewed by the user.
                </span>
                <br className="Card-Text"></br>
              </span>
            </div>
          </div>
          <div className="home-card13">
            <a
              href="https://github.com/IshaanReni/MIPS_CPU"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link22"
            >
              <div className="home-card-heading7">
                <span className="home-price7">
                  <span>
                    MIPS I ISA
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Compliant CPU</span>
                </span>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14"
                >
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </div>
            </a>
            <div className="home-card-content7">
              <span className="home-text166">
                <span>
                  Part of a group project that designed and implemented a
                  synthesizable MIPS‑compatible CPU using SystemVerilog.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Built an assembler using Python that converted MIPS assembly
                  code to machine code. A thorough testbench that can be used to
                  test another group’s CPU.
                </span>
              </span>
            </div>
          </div>
          <div className="home-card14">
            <div className="home-card-heading8">
              <span className="home-price8">
                <span>
                  Dual-Core
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Floating Point CPU</span>
              </span>
            </div>
            <div className="home-card-content8">
              <span className="home-text174">
                <span>
                  Designed and implemented a dual‑core CPU as part of a group on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://tomcl.github.io/issie/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link23"
                >
                  ISSIE
                </a>
                <span>.</span>
                <br></br>
                <br></br>
                <span>
                  {' '}
                  Implemented a floating‑point arithmetic logic unit as part of
                  the CPU.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div className="home-hero1">
        <h1 id="Interests" className="home-text180 Section-Heading">
          Interests
        </h1>
        <div className="home-hero-text-container2">
          <span className="home-text181">
            <span className="home-text182">
              In my quest for an active and well-rounded lifestyle, I regularly
              engage in bouldering, badminton, and fencing. These activities
              help me stay fit and invigorate my mind. Additionally, as a tech
              enthusiast, I opt for an Arch-based distribution as my daily
              operating system, allowing me to explore the intricacies of Linux
              while enjoying a tailored computing experience. Combining my love
              for sports and technology, I strike a harmonious balance between
              physical and intellectual pursuits.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-subscribe">
        <img
          alt="image"
          src="/external/suit.png"
          className="home-image8"
        />
        <div className="home-container16">
          <div className="home-heading-container4">
            <h1 id="Contact" className="home-text184 Section-Heading">
              Contact Me
            </h1>
            <span className="home-text185">
              <span className="home-text186">
                Feel free to reach out to me about opportunities or anything
                else that I may be interested in!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text187"></br>
              <br className="home-text188"></br>
              <span className="home-text189">
                I&apos;ll do my best to get back to you:)
              </span>
              <br></br>
            </span>
            <div className="home-container17">
              <div className="home-container18">
                <a
                  href="mailto:ishaanreni@gmail.com?subject=Re: Saw Your Portfolio"
                  className="home-link24"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
                  </svg>
                </a>
              </div>
              <a href="tel:+447856038982" className="home-link25">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon18"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <a href="#Top" className="home-link26 Navbar-Link">
              Back To Top
            </a>
          </div>
          <div className="home-copyright-container">
            <span className="home-link27">
              <span className="Anchor">Built from Scratch By </span>
              <span>Ishaan Reni</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

