(this.webpackJsonpclassics=this.webpackJsonpclassics||[]).push([[0],{105:function(e,t,a){e.exports=a(115)},110:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(12),r=a.n(i),s=(a(110),a(23)),c=a(7),l=a(6),u=a(8),d=a(9),h=a(10),m=a(161),p=a(98),f=a(172),g=a(4),v=function(e){return{hbox:{display:"flex",flexDirection:"row",flexGrow:1,flexShrink:1},vbox:{display:"flex",flexDirection:"column",flexGrow:1,flexShrink:1},centered:{alignItems:"center"},grow:{flexGrow:1}}};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return Object(g.a)((function(t){return Object(s.a)({},v(t),{},e(t))}),{withTheme:!0})}function y(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")}var w=a(149),E=a(150),x=a(117),O=a(73),k=a(90),j=a.n(k),C=a(93),S=a.n(C),W=a(92),H=a.n(W),N=a(91),T=a.n(N),P=a(20),I=a(170),L=a(147),M=a(148),A=a(85),D=a.n(A),R=a(86),B=a.n(R),q={"quizlet.com":"Quizlet","memrise.com":"Memrise","storyboardthat.com":"Storyboard That","goconqr.com":"Goconqr"};var Y,_=/(https?:\/\/[^\s]+)/g,V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).indexToMissionName=function(e){var t=String.fromCharCode(97+e).toUpperCase();return o.a.createElement("strong",null,"Mission ",t)},a.toggleExpanded=function(){a.props.exercise&&a.setState({expanded:!a.state.expanded})},a.state={expanded:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addHyperlinks",value:function(e){if(o.a.isValidElement(e))return e;try{var t=e.split(_).map((function(e){return e.startsWith("http")?o.a.createElement("a",{key:e,rel:"noopener noreferrer",target:"_blank",href:e},function(e){var t=Object.keys(q).find((function(t){return e.includes(t)}));return t?q[t]:e}(e)):e}));return o.a.createElement(o.a.Fragment,null,t)}catch(a){return e}}},{key:"render",value:function(){var e=this.props,t=e.index,a=e.points,n=e.description,i=e.exercise,r=e.compulsory,s=e.classes,c=this.state.expanded;return o.a.createElement(I.a,{expanded:c,onChange:this.toggleExpanded},o.a.createElement(L.a,{expandIcon:i?o.a.createElement(D.a,null):o.a.createElement(B.a,null)},o.a.createElement(O.a,{className:s.heading},this.indexToMissionName(t)," ",a?"(".concat(a," Nectar Points)"):void 0),r?o.a.createElement(O.a,{className:s.compulsory},"(Compulsory)\xa0"):void 0,o.a.isValidElement(n)?n:o.a.createElement(O.a,{className:s.secondaryHeading},n)),o.a.createElement(M.a,null,o.a.createElement("div",null,this.addHyperlinks(i))))}}]),t}(o.a.Component),z=b((function(e){return{heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},compulsory:{fontSize:e.typography.pxToRem(15),color:"red",fontWeight:800}}}))(V),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return o.a.createElement("div",{className:t.grow},a.map((function(e,t){var a=e.description,n=e.points,i=e.exercise;return o.a.createElement(z,{key:t,points:n,description:a,exercise:i,index:t})})))}}]),t}(o.a.Component),F=b()(G),X=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return o.a.createElement("div",{className:t.grow},a.map((function(e,t){var a=e.description,n=e.points,i=e.exercise;return o.a.createElement(z,{key:t,points:n,description:a,exercise:i,index:t})})))}}]),t}(o.a.Component),J=b()(X),U=a(87),K=a.n(U),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,n=e.points,i=e.description;return o.a.createElement(I.a,{expanded:!1},o.a.createElement(L.a,{expandIcon:o.a.createElement(K.a,null)},o.a.createElement(O.a,{className:t.heading},a," (Pay ",n," Nectar Points)"),o.a.createElement(O.a,{className:t.secondaryHeading},i)))}}]),t}(o.a.Component),$=b((function(e){return{heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},compulsory:{fontSize:e.typography.pxToRem(15),color:"red",fontWeight:800}}}))(Q),Z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.assistance,n=(a=void 0===a?{}:a).description,i=a.assistance,r=void 0===i?[]:i;return o.a.createElement("div",this.props,o.a.createElement(O.a,{className:t.description},n),r.map((function(e,t){var a=e.name,n=e.points,i=e.description;return o.a.createElement($,{key:t,name:a,points:n,description:i})})))}}]),t}(o.a.Component),ee=b((function(e){return{description:{margin:e.spacing(1)}}}))(Z),te=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions,n=e.summary,i=e.assistance;return o.a.createElement("div",null,o.a.createElement(O.a,{className:t.summary},n),a.map((function(e,t){var a=e.description,n=e.points,i=e.exercise,r=e.compulsory;return o.a.createElement(z,{key:t,points:n,description:a,exercise:i,compulsory:r,index:t})})),i?o.a.createElement(ee,{assistance:i,className:t.assistance}):void 0)}}]),t}(o.a.Component),ae=b((function(e){return{summary:{margin:e.spacing(1)},assistance:{marginTop:40}}}))(te),ne=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return o.a.createElement("div",{className:t.grow},a.map((function(e,t){var a=e.description,n=e.points,i=e.exercise;return o.a.createElement(z,{key:t,points:n,description:a,exercise:i,index:t})})))}}]),t}(o.a.Component),oe=b()(ne),ie=a(100),re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.questions;return o.a.createElement("ol",null,e.map((function(e,t){if(o.a.isValidElement(e))return o.a.createElement(o.a.Fragment,{key:t},e);var a=e.split(":"),n=Object(ie.a)(a,2),i=n[0],r=n[1];return o.a.createElement("li",{key:t},o.a.createElement("strong",null,r?"".concat(i,": "):""),r?r.trim():e)})))}}]),t}(o.a.Component),se=a(88),ce=a.n(se),le={NAME:"A-Level",ID:"ALEVEL"},ue=[{NAME:"Satires",ID:"SATIRES",HOME_TEXT:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You are Horace. You wake up drunk from last night\u2019s symposium with your fellow poets. You had written some really good lines of poetry. Philosophical too! But you just can\u2019t recall what you wrote. And wait, who even are you again? I bet Virgil accidentally hit you on the head with an amphora again. Now\u2019s the time to act, speak and think\xa0like Horace."),o.a.createElement("p",null,"You do not need to carry out every task. But you must complete ",o.a.createElement("strong",null,"at least one")," activity from each section in order to gain a prompt. These prompts are needed to summon the messenger pigeon who will have your next mission. Oh, and it would be useful to know that sometimes you might stumble across compulsory tasks \u2013 if you don\u2019t do these, you can\u2019t move on!"),o.a.createElement("p",null,"On your way, you should aim to collect as many Nectar Points as possible. Nectar is surely just like the finest wine. You don\u2019t know when they\u2019ll help you to worm out of a situation! Don\u2019t forget to keep a record of things in your journal! They might make good poetry material. Now hurry on your way Horace, you don\u2019t want to be late for the end of term symposium!")),EXERCISES:[{title:"Background \u2013 Introduction",password:"HAPPINESS",exercise:o.a.createElement(F,{missions:[{points:500,description:"Answer questions based on textbook info.",exercise:o.a.createElement(re,{questions:[o.a.createElement("strong",null,"Horace and his times"),"When was Horace born? What sort of family status was he born into?","Briefly explain the political situation at Rome at the time?","When did Horace\u2019s circumstances essentially change?","Of what status was Horace\u2019s father? How did this effect Horace?","What significant links did Horace have with some of his contemporaries?","What were some of Horace\u2019s earlier works? Give a brief description of them.","When did Horace die?",o.a.createElement("br",null),o.a.createElement("strong",null,"Maecenas"),"Why did many political figures in the Classical world have a \u201cwise man\u201d sidekick?","Who was Maecenas? Why was he important during Horace\u2019s time?","Briefly explain Maecenas\u2019 political importance.","What was the point of patronage?","What was Horace\u2019s financial situation?","How does J.Griffin put across the relationship between Maecenas and his clients? What does this mean?","What philosophical beliefs did Maecenas exhibit?",o.a.createElement("br",null),o.a.createElement("strong",null,"Satire"),"What tone does satire have?","What appears to be the aim of satire?","What illustration is apt for satire?","What two factors does it try to achieve? Yet why can it not fit wholly into either category?","What topics might satire include?",o.a.createElement("br",null),o.a.createElement("strong",null,"Satire before Horace"),"How did the genre of Satire come about?","Briefly describe Gaius Lucilius\u2019 Saturae.","Briefly describe Varro\u2019s satires.","What was the Greek diatribe? What part did it play in the evolution of satire?","Briefly describe Persius\u2019 satires.","Briefly describe Juvenal\u2019s satires.",o.a.createElement("br",null),o.a.createElement("strong",null,"Horace\u2019s Style of Satire"),"What title did Horace give his satires?","What tone does Horace\u2019s satires take?","What are some topics that Horace includes?","What styles did Horace put his hand to in his satires?","Summarise what Book 1 contains. What are some well-known episodes from the other seven books?","What common satirical themes emerge from Horace\u2019s satires?","What makes Horace\u2019s satires so literarily appealing?","How do Horace\u2019s satires differ from those of others?",o.a.createElement("br",null),o.a.createElement("strong",null,"The Philosophical Background"),"What was supposed to be the point of philosophy for ancients?","What part does philosophy play in Horace\u2019s satires?","Explain Stoic beliefs.","Explain Cynic beliefs.","Explain Epicurean beliefs.",o.a.createElement("br",null),o.a.createElement("strong",null,"Metre"),"What metre is verse satire written in?"]})},{points:400,description:"Make a mind map based on the background information in textbook.",exercise:"Feel free to use https://www.goconqr.com"},{points:300,description:"Create a story board for a well-known episode from any of Horace\u2019s Satires.",exercise:"Feel free to use https://www.storyboardthat.com"}]})},{title:"Satire 1.1 - Translation (Lines 1-12, 28-44)",password:"fortunatemerchants",exercise:o.a.createElement(ae,{assistance:{description:"Virgil feels bad about what he\u2019s done to you. He has offered you some help. He has a couple of items which will provide great assistance. But he obviously doesn\u2019t feel too bad, because he\u2019s not giving it to you unless you give him some Nectar first!",assistance:[{name:"Numbered text",points:200,description:"The Latin words are numbered for ease of translation."},{name:"Colour-coded text",points:100,description:"Different categories of words will be colour-coded for ease of identification. Eg. All verbs will be highlighted in the same colour, all nominatives in a different colour, etc."}]},summary:"Well done for remembering your family background, your patron and your beloved genre of Satire - so Romanesque! But that is not the end of your quest. You must continue on and find out who you are at your core. What values do you hold dear? See what you can find.",missions:[{points:400,description:"Translate lines 1-12, 28-44",compulsory:!0},{points:300,description:"Make a storyboard/cartoon strip for 1-12, 28-44.",exercise:"You may wish to use https://www.storyboardthat.com"},{points:200,description:"Answer the questions below which are based on lines 1-12, 28-44.",exercise:o.a.createElement(re,{questions:["What two \u201ctypes\u201d of destinies do people generally have?","According to Horace, how do people feel about these two \u201ctypes\u201d of destinies? What would people rather do?","Horace uses two pairs of examples containing contrasting characters. Explain how each of the following people feel about their lives:",o.a.createElement("ul",null,o.a.createElement("li",null,"The soldier"),o.a.createElement("li",null,"The merchant"),o.a.createElement("li",null,"The farmer"),o.a.createElement("li",null,"The legal expert")),"What single goal are the innkeeper, soldier and sailor united in?","What extended simile does Horace use to illustrate this? What makes this simile effective?","How does the ant differ from \u201cyou\u201d \u2013 the miser?","What question does Horace direct at the miser? What irony is there in this?","What response from the miser does Horace anticipate?","What does Horace say in being the devil\u2019s advocate?"]})},{points:200,description:"Draw a picture which summarises lines 1-12, 28-44 and add captions."},{points:100,description:"Write a short summary of lines 1-12, 28-44."}]})},{title:"Vocabulary (Lines 1-12, 28-44)",password:"whoneedsriches",exercise:o.a.createElement(oe,{missions:[{points:300,description:"Complete Quizlet/Memrise \u201cLearn\u201d function.",exercise:"https://quizlet.com/_688r9s?x=1jqt&i=nczxg https://www.memrise.com/group/319698/ (Print screen or photograph results as evidence)"},{points:300,description:"Make vocabulary/phrase flashcards for this passage."},{points:100,description:"Complete the gaps by translating the vocabulary.",exercise:"Retrieve sheet from: https://drive.google.com/drive/folders/1Uk9cKJEr6p4VkO2ye5CQOOvVrVfX4a6K"}]})}],PASSWORD_IMAGE:ce.a}],de=a(89),he=a.n(de),me={NAME:"GCSE",ID:"GCSE"},pe=[{NAME:"Aeneid II",ID:"AENEID_II",HOME_TEXT:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"You are Aeneas. You wake up in the middle of the night because of a dreadful clamour. In a haste, you only manage to grab your journal. As you leave the room, in an attempt to stop you from helping the Trojans, Juno wipes your memory. You need to piece together what has happened to you so far and see where Fate takes you next. You need to act, speak and think like Aeneas."),o.a.createElement("p",null,"From this point onwards, you, a great hero, will be faced with many tasks. You do not need to carry out every task. But you must complete ",o.a.createElement("strong",null,"at least one")," activity from each section in order to gain a prompt. These prompts are needed to summon Hermes (Mercury) who will deliver your next mission. Oh, and it would be useful to know that sometimes the gods may set you compulsory tasks \u2013 if you don\u2019t do these, you can\u2019t move on."),o.a.createElement("p",null,"On your way, you should aim to collect as many Nectar Points as possible. You don\u2019t know when you\u2019ll need to use them to please the gods! The gods live off nectar, so I\u2019m sure that they will come in handy."),o.a.createElement("p",null,"Don\u2019t forget to keep a record of things in your journal!"),o.a.createElement("p",null,"Now hurry on your way hero!")),EXERCISES:[{title:"Background - The story of The Aeneid",password:"greekinvasion",exercise:o.a.createElement(F,{missions:[{points:300,description:"Make a storyboard/cartoon strip for what has happened so far in the Aeneid (Book I-II, up to line 505)",exercise:"Feel free to use https://www.storyboardthat.com"},{points:200,description:"Write a summary of what has happened so far in the Aeneid (Book I-II, up to line 505)."},{points:100,description:"Make a brief flowchart containing important events so far in the Aeneid (Book I-II, up to line 505)."}]})},{title:"Translation (Lines 506-525)",password:"wakeywakey",exercise:o.a.createElement(ae,{assistance:{description:"Venus has offered you some help. She has a couple of items which will provide great assistance. But, despite being your mother, deities are quite erratic. So, she\u2019s not giving it to you unless you give her some Nectar first!",assistance:[{name:"Numbered text",points:200,description:"The Latin words are numbered for ease of translation."},{name:"Colour-coded text",points:100,description:"Different categories of words will be colour coded for ease of identification. Eg. All verbs will be highlighted in the same colour, all nominatives in a different colour, etc."}]},summary:"Well done for remembering that Troy has been besieged for ten years now and for plucking up the courage (as a hero should) to go out and fight! Whilst going about the city, you catch a glimpse of something and hide to a side to watch...",missions:[{points:400,description:"Translate lines 506-525",compulsory:!0},{points:300,description:"Make a storyboard/cartoon strip for lines 506-525.",exercise:"You may wish to use https://www.storyboardthat.com"},{points:200,description:"Answer the questions below which are based on lines 506-525.",exercise:o.a.createElement(re,{questions:["Line 506: What does Aeneas recount next?","Lines 507-508: What state is Troy in at this point? Give three details.","Lines 508-511: What does Priam do and what makes this an incongruent image?","Lines 512-514: Describe the scene painted inside Priam\u2019s palace.","Line 515: Who is Hecuba?","Lines 515-517: What simile is used to bring out Hecuba and her daughters\u2019 situation?","Line 517: What are Hecuba and her daughters doing which is not described in the simile?","Lines 518-519: What does Hecuba see which prompts her to speak out?","Lines 519-520: What questions does Hecuba ask?","Lines 521-522: What does Hecuba say that the current situation does not call for?","Line 522: Who is Hector? Why does Hecuba bring him up at this point?","Lines 523-524: What command does Hecuba give Priam? What reason does she provide for giving this command?","Lines 524-525: What does Hecuba do when she finishes speaking?"]})},{points:200,description:"Draw a picture which summarises lines 506-525 and add captions from the Latin text."},{points:100,description:"Write a summary of lines 506-525."}]})},{title:"Vocabulary (Lines 506-525)",password:"hugthehouseholdgods",exercise:o.a.createElement(oe,{missions:[{points:300,description:"Complete Quizlet/Memrise \u201cLearn\u201d function.",exercise:"https://quizlet.com/_7s8fzw?x=1jqt&i=nczxg https://www.memrise.com/group/384443/ (Print screen or photograph results as evidence)"},{points:300,description:"Make vocabulary/phrase flashcards for this passage."},{points:100,description:"Complete the gaps by translating the vocabulary."}]})},{title:"Personal Response (Lines 506-525)",password:"iwishhectorwashere",exercise:o.a.createElement(J,{missions:[{points:300,description:"Annotate the blank copy of this passage of text with at least 8 stylistic points of interest.",exercise:"In your annotations, you must comment on any stylistic devices used and their effect.",compulsory:!0},{points:300,description:"Complete the examination-style questions for this passage."},{points:300,description:"Fill in your journal. You may wish to answer the prompt questions below and note down any other thoughts you have.",exercise:o.a.createElement(re,{questions:["What memory have you recovered?","How do you feel knowing that?","How are these things accentuated through the text?"]})},{points:200,description:"Create a list of possible examination-style questions for this passage."}]})}],PASSWORD_IMAGE:he.a}],fe=[me,le],ge=(Y={},Object(P.a)(Y,le.ID,ue),Object(P.a)(Y,me.ID,pe),Y);var ve=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).navigateHome=function(){a.props.navigateHome()},a.showChangeModePrompt=function(){a.props.showChangeModePrompt(!0)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.mode,n=void 0===a?{}:a,i=e.navigation,r=(void 0===i?{}:i).currentView,s=(r=void 0===r?{}:r).title,c=n.selectedLevel,l=n.selectedText,u="dark"===n.theme;return o.a.createElement(w.a,{position:"relative"},o.a.createElement(E.a,null,o.a.createElement(x.a,{color:"inherit","aria-label":"Home",onClick:this.navigateHome,className:t.homeButton},o.a.createElement(j.a,null)),o.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.grow},s),l&&c?o.a.createElement(O.a,{variant:"subtitle1",color:"inherit",noWrap:!0},"Level: ",function(e){var t=fe.find((function(t){return t.ID===e}));return t?t.NAME:e}(c)," Text: ",function(e){var t=e.text,a=e.level,n=(ge[a]||[]).find((function(e){return e.ID===t}));return n?n.NAME:t}({text:l,level:c})):void 0,o.a.createElement(x.a,{color:"inherit",title:"Settings","aria-label":"Mode Selector",onClick:this.showChangeModePrompt},o.a.createElement(T.a,null)),o.a.createElement(x.a,{color:"inherit",title:u?"Switch to light theme":"Switch to dark theme","aria-label":"Toggle Theme",onClick:this.props.toggleTheme},u?o.a.createElement(H.a,null):o.a.createElement(S.a,null))))}}]),t}(o.a.Component),be=b((function(e){return{homeButton:{marginRight:20}}}))(ve),ye=a(151),we=a(152),Ee=a(153),xe=a(154),Oe=a(155),ke=a(156),je=a(97),Ce=a.n(je),Se=a(96),We=a.n(Se),He=a(95),Ne=a.n(He),Te=a(94),Pe=a.n(Te);function Ie(e){return(ge[e.selectedLevel]||[]).find((function(t){return t.ID===e.selectedText}))||{}}function Le(e){return{image:Pe.a,text:function(e){return Ie(e).HOME_TEXT}(e)}}function Me(e){return Ie(e).EXERCISES||[]}function Ae(e){return Ie(e).PASSWORD_IMAGE}var De=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.unlockables,n=void 0===a?{}:a,i=t.mode,r=void 0===i?{}:i,s=t.classes,c=n.shop,l=void 0!==c&&c,u=n.password,d=Me(r),h=function(e){var t=e.password;return e.exercises.findIndex((function(e){return e.password.toLowerCase()===t}))}({password:u,exercises:d});return o.a.createElement("div",{className:s.vbox},o.a.createElement(ye.a,{subheader:o.a.createElement(we.a,{component:"div"},"Exercises")},d.map((function(t,a){var n=t.title;return a<=h?o.a.createElement(ye.a,{key:n},o.a.createElement(Ee.a,{button:!0,onClick:function(){return e.props.navigateExercise(n)}},o.a.createElement(xe.a,null,o.a.createElement(Ne.a,null)),o.a.createElement(Oe.a,{primary:n}))):void 0}))),o.a.createElement(ke.a,null),l?o.a.createElement(ye.a,null,o.a.createElement(Ee.a,{button:!0,onClick:this.props.navigateShop},o.a.createElement(xe.a,null,o.a.createElement(We.a,null)),o.a.createElement(Oe.a,{primary:"Shop"}))):void 0,o.a.createElement(ye.a,null,o.a.createElement(Ee.a,{button:!0,onClick:this.props.navigatePassword},o.a.createElement(xe.a,null,o.a.createElement(Ce.a,null)),o.a.createElement(Oe.a,{primary:"Enter Prompt"}))))}}]),t}(o.a.Component),Re=b()(De),Be=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.unlockables,n=e.mode,i=e.navigateShop,r=e.navigatePassword,s=e.navigateExercise;return o.a.createElement("div",{className:y(t.root,t.hbox)},o.a.createElement(Re,{unlockables:a,mode:n,navigateShop:i,navigatePassword:r,navigateExercise:s}))}}]),t}(o.a.Component),qe=b((function(e){return{root:{minWidth:240,maxWidth:240,borderRightColor:e.palette.divider,borderRightStyle:"solid",borderRightWidth:"1px"}}}))(Be),Ye={id:"HOME",title:"Home"},_e=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=Le(e.mode),n=a.text,i=a.image;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.container},o.a.createElement("img",{className:t.teacher,src:i,alt:"teacher"}),o.a.createElement("div",{className:t.whiteboard},n)))}}]),t}(o.a.Component),Ve=b((function(e){return{root:{position:"relative"},container:{position:"relative"},teacher:{display:"block",width:"100%"},whiteboard:{position:"absolute",left:"7%",top:"17%",overflow:"overlay",fontSize:e.typography.pxToRem(18),wordWrap:"break-word",width:"46%",height:"38%",color:"black"}}}))(_e),ze={id:"SHOP",title:"Shop"},Ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"SHOP")}}]),t}(o.a.Component),Fe=a(116),Xe=a(169),Je=a(160),Ue={id:"PASSWORD",title:"Enter Prompt"},Ke=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({password:e.target.value})},a.submitPassword=function(){(0,a.props.setPassword)(a.state.password),a.setState({password:""})},a.state={password:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.mode;return o.a.createElement("div",{className:y(a.root,a.hbox)},o.a.createElement("div",{className:a.hbox},o.a.createElement(Fe.a,{className:a.paperContainer},o.a.createElement("div",{className:y(a.vbox,a.centered)},o.a.createElement(O.a,{variant:"h6"},"Please sign here"),o.a.createElement(Xe.a,{id:"password",label:"Password",type:"password",className:a.textField,value:this.state.password,onChange:this.handleChange,onKeyPress:function(t){"Enter"===t.key&&e.submitPassword()},margin:"normal",variant:"outlined"}),o.a.createElement(Je.a,{color:"primary",className:a.button,onClick:function(){return e.submitPassword()},value:"submit"},"Login"))),o.a.createElement("img",{src:Ae(n),alt:"delivery",className:a.image})))}}]),t}(o.a.Component),Qe=b((function(e){return{root:{margin:40},button:{margin:e.spacing(1)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},paperContainer:{minWidth:300,height:200,padding:20},image:{height:200}}}))(Ke),$e={id:"EXERCISE"},Ze=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return function(e){var t=e.mode,a=void 0===t?{}:t,n=e.navigation,o=(n=void 0===n?{}:n).currentView,i=void 0===o?{}:o,r=Me(a).find((function(e){return e.title===i.title}));return r?r.exercise:void 0}({mode:e.mode,navigation:e.navigation})||null}}]),t}(o.a.Component),et={HOME_ID:Ye,SHOP_ID:ze,PASSWORD_ID:Ue,EXERCISE_ID:$e};var tt=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.setPassword,n=e.navigation,i=void 0===n?{}:n,r=e.mode,s=void 0===r?{}:r,c=function(){switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id){case Ye.id:return Ve;case ze.id:return Ge;case Ue.id:return Qe;case $e.id:return Ze;default:return function(){return o.a.createElement("div",null)}}}(i.currentView);return o.a.createElement("div",{className:y(t.hbox,t.root)},o.a.createElement(c,{setPassword:a,mode:s,navigation:i}))}}]),t}(o.a.Component),at=b((function(e){return{root:{margin:16}}}))(tt),nt=a(168),ot=a(159),it=a(167),rt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleLevelChange=function(e){a.setState({pendingLevel:e.target.value,pendingText:void 0})},a.handleTextChange=function(e){a.setState({pendingText:e.target.value})},a.handleSave=function(){var e=a.state,t=e.pendingLevel,n=e.pendingText;a.props.setMode({selectedLevel:t,selectedText:n})},a.handleClose=function(){a.props.showChangeModePrompt(!1)},a.getLevelOptions=function(){return fe.map((function(e){return{name:e.NAME,id:e.ID}}))},a.getTextOptions=function(){var e=a.state.pendingLevel;return(ge[e]||[]).map((function(e){return{name:e.NAME,id:e.ID}}))},a.state={pendingLevel:void 0,pendingText:void 0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectedLevel,a=e.selectedText;t&&a?this.setState({pendingLevel:t,pendingText:a}):this.props.showChangeModePrompt(!0)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.showPrompt,n=e.selectedLevel,i=e.selectedText,r=this.state,s=r.pendingLevel,c=r.pendingText;return o.a.createElement(nt.a,{open:!!a,onClose:this.handleClose,disableBackdropClick:!0,disableEscapeKeyDown:!0},o.a.createElement("div",{className:t.modalContainer},o.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Settings"),o.a.createElement("div",{className:t.vbox},o.a.createElement("div",{className:t.hbox},o.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.settingLabel},"Exam Level"),o.a.createElement(ot.a,{className:t.formControl},o.a.createElement(it.a,{native:!0,inputProps:{name:"mode",id:"mode-selector"},className:t.select,value:s,onChange:this.handleLevelChange},o.a.createElement("option",{value:void 0}),this.getLevelOptions().map((function(e){var t=e.name,a=e.id;return o.a.createElement("option",{key:a,value:a},t)}))))),o.a.createElement("div",{className:t.hbox},o.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.settingLabel},"Text"),o.a.createElement(ot.a,{className:t.formControl},o.a.createElement(it.a,{native:!0,inputProps:{name:"mode",id:"mode-selector"},className:t.select,value:c,onChange:this.handleTextChange},o.a.createElement("option",{value:void 0}),this.getTextOptions().map((function(e){var t=e.name,a=e.id;return o.a.createElement("option",{key:a,value:a},t)}))))),o.a.createElement("div",{className:t.padding}),o.a.createElement("div",{className:y(t.hbox,t.alignRight)},o.a.createElement(Je.a,{color:"inherit","aria-label":"Save",onClick:this.handleSave,disabled:!s||!c},"Save"),o.a.createElement(Je.a,{color:"inherit","aria-label":"Cancel",onClick:this.handleClose,disabled:!n||!i},"Cancel")))))}}]),t}(o.a.PureComponent),st=b((function(e){return{modalContainer:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),position:"absolute",top:"25%",left:"50%",width:400,height:300,marginLeft:-200,marginTop:-75},formControl:{margin:e.spacing(1),minWidth:120},settingLabel:{width:120,textAlign:"right",margin:8},title:{marginBottom:20},alignRight:{justifyContent:"flex-end"},padding:{height:80}}}))(rt),ct=et.HOME_ID,lt=et.SHOP_ID,ut=et.PASSWORD_ID,dt=et.EXERCISE_ID;function ht(e){var t=e.mode,a=void 0===t?{}:t,n=a.selectedLevel,o=a.selectedText,i=a.showPrompt,r=a.theme,s=e[n],c=(s=void 0===s?{}:s)[o],l=void 0===c?{}:c,u=l.navigation,d=void 0===u?{}:u,h=l.unlockables;return{navigation:d,unlockables:void 0===h?{}:h,mode:{selectedLevel:n,selectedText:o,showPrompt:i,theme:r}}}function mt(e){var t=e.state,a=(e.applyCommand,e.applyState),n=e.changeMode,o=ht(t),i=o.navigation,r=void 0===i?{}:i,c=o.unlockables,l=void 0===c?{}:c,u=o.mode,d=void 0===u?{}:u,h=function(e){return Object(s.a)({},r,{currentView:e})},m=function(e){var t=h(e);a({navigation:t})};return{navigateHome:function(){return m(ct)},navigateShop:function(){return m(lt)},navigatePassword:function(){return m(ut)},navigateExercise:function(e){return m(Object(s.a)({},dt,{title:e}))},setPassword:function(e){var t=function(e){var t=e.password,a=e.mode,n=e.unlockables,o=void 0===n?{}:n,i=t.toLowerCase(),r=o.password,s=Me(a),c=s.findIndex((function(e){var t=e.password;return(void 0===t?"":t).toLowerCase()===i})),l=s.findIndex((function(e){var t=e.password;return(void 0===t?"":t).toLowerCase()===r}));return{isNew:c>l,isUsed:-1!==c&&c<=l}}({password:e,mode:d,unlockables:l}),n=t.isNew,o=t.isUsed;if(n){var i=function(e){return Object(s.a)({},l,{password:e.toLowerCase()})}(e);a({unlockables:i}),alert("You have unlocked a new exercise!")}else o?alert("You have already unlocked this exercise."):alert("Sorry, I did recognise that password.")},setMode:function(e){var t=e.selectedLevel,a=e.selectedText;n({selectedLevel:t,selectedText:a,showPrompt:!1}),m(ct)},showChangeModePrompt:function(e){n({showPrompt:!!e})},toggleTheme:function(){n({theme:"dark"===d.theme?"light":"dark"})}}}var pt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a.subscription=void 0,a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props.store$.subscribe((function(t){e.setState(Object(s.a)({},t,{ready:!0}))}))}},{key:"componentWillUnmount",value:function(){this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0)}},{key:"render",value:function(){if(!this.state.ready)return o.a.createElement("div",null);var e=this.props,t=e.classes,a=e.applyCommand,n=e.applyState,i=e.changeMode,r=ht(this.state),s=r.navigation,c=void 0===s?{}:s,l=r.unlockables,u=void 0===l?{}:l,d=r.mode,h=void 0===d?{}:d,g=mt({state:this.state,applyCommand:a,applyState:n,changeMode:i}),v=g.navigateHome,b=g.showChangeModePrompt,w=g.navigateShop,E=g.navigatePassword,x=g.navigateExercise,O=g.setPassword,k=g.setMode,j=g.toggleTheme,C={palette:{type:h.theme||"light"}};return o.a.createElement("div",{className:t.root},o.a.createElement(m.a,{theme:Object(p.a)(C)},o.a.createElement(f.a,null),o.a.createElement("div",{className:y(t.vbox,t.root)},o.a.createElement(be,{mode:h,navigation:c,navigateHome:v,showChangeModePrompt:b,toggleTheme:j}),o.a.createElement("div",{className:t.hbox},o.a.createElement(qe,{unlockables:u,mode:h,navigateShop:w,navigatePassword:E,navigateExercise:x}),o.a.createElement(at,{navigation:c,mode:h,setPassword:O}))),o.a.createElement(st,Object.assign({},h,{setMode:k,showChangeModePrompt:b}))))}}]),t}(o.a.Component),ft=b((function(e){return{root:{height:"100%",width:"100%"}}}))(pt),gt=a(162),vt=a(99),bt=a(166),yt=a(163),wt=a(164),Et="classics",xt={};var Ot=new gt.a(function(){var e=function(){try{var e=localStorage.getItem(Et);return e?JSON.parse(e):xt}catch(t){return console.log("Error getting internal state, returning default"),xt}}();return Object.keys(ge).forEach((function(t){e[t]||(e[t]={},ge[t].forEach((function(a){var n=a.ID;e[t][n]||(e[t][n]={})})))})),e}()),kt=Ot.asObservable();kt.pipe(Object(yt.a)(1)).subscribe((function(e){localStorage.setItem(Et,JSON.stringify(e))}));var jt=new vt.a,Ct=jt.asObservable(),St=new vt.a,Wt=St.asObservable();Object(bt.a)(Wt.pipe(Object(wt.a)(kt,(function(e,t){var a=t.mode,n=e(void 0===a?{}:a);return Object(s.a)({},t,{mode:n})}))),Ct.pipe(Object(wt.a)(kt,(function(e,t){var a=e(ht(t)),n=t.mode,o=n.selectedLevel,i=n.selectedText;return t[o][i]=a,Object(s.a)({},t)})))).subscribe((function(e){return Ot.next(e)})),r.a.render(o.a.createElement(ft,{store$:kt,applyCommand:function(e){return jt.next(e)},applyState:function(e){return jt.next((function(t){return Object(s.a)({},t,{},e)}))},changeMode:function(e){return St.next((function(t){return Object(s.a)({},t,{},e)}))}}),document.getElementById("root"))},88:function(e,t,a){e.exports=a.p+"static/media/pigeon.71810740.png"},89:function(e,t,a){e.exports=a.p+"static/media/hermes.825a2cdd.png"},94:function(e,t,a){e.exports=a.p+"static/media/teacher-square.5b5cb9f1.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.15507b4b.chunk.js.map