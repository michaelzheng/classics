(this.webpackJsonpclassics=this.webpackJsonpclassics||[]).push([[0],{103:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/pigeon.71810740.png"},109:function(e,t,a){"use strict";a.r(t);var n,o=a(0),i=a.n(o),r=a(12),s=a.n(r),c=(a(103),a(25)),l=a(7),u=a(6),d=a(8),h=a(9),p=a(10),m=a(4),f=a(166),v=a(144),b=a(145),g=a(111),y=a(71),w=a(85),E=a.n(w),x=a(86),O=a.n(x),j=a(21),k=a(164),C=a(142),S=a(143),N=a(82),T=a.n(N),W=a(83),H=a.n(W),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).indexToMissionName=function(e){var t=String.fromCharCode(97+e).toUpperCase();return i.a.createElement("strong",null,"Mission ",t)},a.toggleExpanded=function(){a.props.exercise&&a.setState({expanded:!a.state.expanded})},a.state={expanded:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.points,n=e.description,o=e.exercise,r=e.compulsory,s=e.classes,c=this.state.expanded;return i.a.createElement(k.a,{expanded:c,onChange:this.toggleExpanded},i.a.createElement(C.a,{expandIcon:o?i.a.createElement(T.a,null):i.a.createElement(H.a,null)},i.a.createElement(y.a,{className:s.heading},this.indexToMissionName(t)," ",a?"(".concat(a," Nectar Points)"):void 0),r?i.a.createElement(y.a,{className:s.compulsory},"(Compulsory)\xa0"):void 0,i.a.isValidElement(n)?n:i.a.createElement(y.a,{className:s.secondaryHeading},n)),i.a.createElement(S.a,null,i.a.createElement("div",null,o)))}}]),t}(i.a.Component),I=Object(m.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},compulsory:{fontSize:e.typography.pxToRem(15),color:"red",fontWeight:800}}}),{withTheme:!0})(P),L=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return i.a.createElement("div",{className:t.root},a.map((function(e,t){var a=e.description,n=e.points,o=e.exercise;return i.a.createElement(I,{key:t,points:n,description:a,exercise:o,index:t})})))}}]),t}(i.a.Component),M=Object(m.a)((function(e){return{root:{flexGrow:1}}}),{withTheme:!0})(L),D=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return i.a.createElement("div",{className:t.root},a.map((function(e,t){var a=e.description,n=e.points,o=e.exercise;return i.a.createElement(I,{key:t,points:n,description:a,exercise:o,index:t})})))}}]),t}(i.a.Component),A=Object(m.a)((function(e){return{root:{flexGrow:1}}}),{withTheme:!0})(D),B=a(84),R=a.n(B),Y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,n=e.points,o=e.description;return i.a.createElement(k.a,{expanded:!1},i.a.createElement(C.a,{expandIcon:i.a.createElement(R.a,null)},i.a.createElement(y.a,{className:t.heading},a," (Pay ",n," Nectar Points)"),i.a.createElement(y.a,{className:t.secondaryHeading},o)))}}]),t}(i.a.Component),G=Object(m.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},compulsory:{fontSize:e.typography.pxToRem(15),color:"red",fontWeight:800}}}),{withTheme:!0})(Y),_=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.assistance,n=(a=void 0===a?{}:a).description,o=a.assistance,r=void 0===o?[]:o;return i.a.createElement("div",this.props,i.a.createElement(y.a,{className:t.description},n),r.map((function(e,t){var a=e.name,n=e.points,o=e.description;return i.a.createElement(G,{key:t,name:a,points:n,description:o})})))}}]),t}(i.a.Component),q=Object(m.a)((function(e){return{description:{margin:e.spacing(1)}}}),{withTheme:!0})(_),z=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions,n=e.summary,o=e.assistance;return i.a.createElement("div",null,i.a.createElement(y.a,{className:t.summary},n),a.map((function(e,t){var a=e.description,n=e.points,o=e.exercise,r=e.compulsory;return i.a.createElement(I,{key:t,points:n,description:a,exercise:o,compulsory:r,index:t})})),o?i.a.createElement(q,{assistance:o,className:t.assistance}):void 0)}}]),t}(i.a.Component),V=Object(m.a)((function(e){return{summary:{margin:e.spacing(1)},assistance:{marginTop:40}}}),{withTheme:!0})(z),F=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.missions;return i.a.createElement("div",{className:t.root},a.map((function(e,t){var a=e.description,n=e.points,o=e.exercise;return i.a.createElement(I,{key:t,points:n,description:a,exercise:o,index:t})})))}}]),t}(i.a.Component),X=Object(m.a)((function(e){return{root:{flexGrow:1}}}),{withTheme:!0})(F),J=a(93),U=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.questions;return i.a.createElement("ol",null,e.map((function(e){if(i.a.isValidElement(e))return e;var t=e.split(":"),a=Object(J.a)(t,2),n=a[0],o=a[1];return i.a.createElement("li",null,i.a.createElement("strong",null,o?"".concat(n,": "):""),o?o.trim():e)})))}}]),t}(i.a.Component),K={NAME:"A-Level",ID:"ALEVEL"},Q=[{NAME:"Satires",ID:"SATIRES",HOME_TEXT:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"You are Horace. You wake up drunk from last night\u2019s symposium with your fellow poets. You had written some really good lines of poetry. Philosophical too! But you just can\u2019t recall what you wrote. And wait, who even are you again? I bet Virgil accidentally hit you on the head with an amphora again. Now\u2019s the time to act, speak and think\xa0like Horace."),i.a.createElement("p",null,"You do not need to carry out every task. But you must complete ",i.a.createElement("strong",null,"at least one")," activity from each section in order to summon the messenger pigeon who will have your next mission."),i.a.createElement("p",null,"On your way, you should aim to collect as many Nectar Points as possible. Nectar is surely just like the finest wine. You don\u2019t know when they\u2019ll help you to worm out of a situation!")),EXERCISES:[{title:"Background \u2013 Introduction",password:"HAPPINESS",exercise:i.a.createElement(M,{missions:[{points:500,description:"Answer questions based on textbook info.",exercise:i.a.createElement(U,{questions:[i.a.createElement("strong",null,"Horace and his times"),"When was Horace born? What sort of family status was he born into?","Briefly explain the political situation at Rome at the time?","When did Horace\u2019s circumstances essentially change?","Of what status was Horace\u2019s father? How did this effect Horace?","What significant links did Horace have with some of his contemporaries?","What were some of Horace\u2019s earlier works? Give a brief description of them.","When did Horace die?",i.a.createElement("br",null),i.a.createElement("strong",null,"Maecenas"),"Why did many political figures in the Classical world have a \u201cwise man\u201d sidekick?","Who was Maecenas? Why was he important during Horace\u2019s time?","Briefly explain Maecenas\u2019 political importance.","What was the point of patronage?","What was Horace\u2019s financial situation?","How does J.Griffin put across the relationship between Maecenas and his clients? What does this mean?","What philosophical beliefs did Maecenas exhibit?",i.a.createElement("br",null),i.a.createElement("strong",null,"Satire"),"What tone does satire have?","What appears to be the aim of satire?","What illustration is apt for satire?","What two factors does it try to achieve? Yet why can it not fit wholly into either category?","What topics might satire include?",i.a.createElement("br",null),i.a.createElement("strong",null,"Satire before Horace"),"How did the genre of Satire come about?","Briefly describe Gaius Lucilius\u2019 Saturae.","Briefly describe Varro\u2019s satires.","What was the Greek diatribe? What part did it play in the evolution of satire?","Briefly describe Persius\u2019 satires.","Briefly describe Juvenal\u2019s satires.",i.a.createElement("br",null),i.a.createElement("strong",null,"Horace\u2019s Style of Satire"),"What title did Horace give his satires?","What tone does Horace\u2019s satires take?","What are some topics that Horace includes?","What styles did Horace put his hand to in his satires?","Summarise what Book 1 contains. What are some well-known episodes from the other seven books?","What common satirical themes emerge from Horace\u2019s satires?","What makes Horace\u2019s satires so literarily appealing?","How do Horace\u2019s satires differ from those of others?",i.a.createElement("br",null),i.a.createElement("strong",null,"The Philosophical Background"),"What was supposed to be the point of philosophy for ancients?","What part does philosophy play in Horace\u2019s satires?","Explain Stoic beliefs.","Explain Cynic beliefs.","Explain Epicurean beliefs.",i.a.createElement("br",null),i.a.createElement("strong",null,"Metre"),"What metre is verse satire written in?"]})},{points:400,description:"Make a mind map based on the background information in textbook."},{points:300,description:"Create a story board for a well-known episode from any of Horace\u2019s Satires.",exercise:"Feel free to use https://www.storyboardthat.com"}]})}]}],$={NAME:"GCSE",ID:"GCSE"},Z=[{NAME:"Aeneid II",ID:"AENEID_II",HOME_TEXT:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"You are Aeneas. You wake up in the middle of the night because of a dreadful clamour. In a haste, you only manage to grab your journal. As you leave the room, in an attempt to stop you from helping the Trojans, Juno wipes your memory. You need to piece together what has happened to you so far and see where Fate takes you next. You need to act, speak and think like Aeneas."),i.a.createElement("p",null,"From this point onwards, you, a great hero, will be faced with many tasks. You do not need to carry out every task. But you must complete ",i.a.createElement("strong",null,"at least one")," activity from each section in order to gain a prompt. These prompts are needed to summon Hermes (Mercury) who will deliver your next mission. Oh, and it would be useful to know that sometimes the gods may set you compulsory tasks \u2013 if you don\u2019t do these, you can\u2019t move on."),i.a.createElement("p",null,"On your way, you should aim to collect as many Nectar Points as possible. You don\u2019t know when you\u2019ll need to use them to please the gods! The gods live off nectar, so I\u2019m sure that they will come in handy."),i.a.createElement("p",null,"Don\u2019t forget to keep a record of things in your journal!"),i.a.createElement("p",null,"Now hurry on your way hero!")),EXERCISES:[{title:"Background - The story of The Aeneid",password:"greekinvasion",exercise:i.a.createElement(M,{missions:[{points:300,description:"Make a storyboard/cartoon strip for what has happened so far in the Aeneid (Book I-II, up to line 505)",exercise:"Feel free to use https://www.storyboardthat.com"},{points:200,description:"Write a summary of what has happened so far in the Aeneid (Book I-II, up to line 505)."},{points:100,description:"Make a brief flowchart containing important events so far in the Aeneid (Book I-II, up to line 505)."}]})},{title:"Translation (Lines 506-525)",password:"wakeywakey",exercise:i.a.createElement(V,{assistance:{description:"Venus has offered you some help. She has a couple of items which will provide great assistance. But, despite being your mother, deities are quite erratic. So, she\u2019s not giving it to you unless you give her some Nectar first!",assistance:[{name:"Numbered text",points:200,description:"The Latin words are numbered for ease of translation."},{name:"Colour-coded text",points:100,description:"Different categories of words will be colour coded for ease of identification. Eg. All verbs will be highlighted in the same colour, all nominatives in a different colour, etc."}]},summary:"Well done for remembering that Troy has been besieged for ten years now and for plucking up the courage (as a hero should) to go out and fight! Whilst going about the city, you catch a glimpse of something and hide to a side to watch...",missions:[{points:400,description:"Translate lines 506-525",compulsory:!0},{points:300,description:"Make a storyboard/cartoon strip for lines 506-525.",exercise:"You may wish to use https://www.storyboardthat.com"},{points:200,description:"Answer the questions below which are based on lines 506-525.",exercise:i.a.createElement(U,{questions:["Line 506: What does Aeneas recount next?","Lines 507-508: What state is Troy in at this point? Give three details.","Lines 508-511: What does Priam do and what makes this an incongruent image?","Lines 512-514: Describe the scene painted inside Priam\u2019s palace.","Line 515: Who is Hecuba?","Lines 515-517: What simile is used to bring out Hecuba and her daughters\u2019 situation?","Line 517: What are Hecuba and her daughters doing which is not described in the simile?","Lines 518-519: What does Hecuba see which prompts her to speak out?","Lines 519-520: What questions does Hecuba ask?","Lines 521-522: What does Hecuba say that the current situation does not call for?","Line 522: Who is Hector? Why does Hecuba bring him up at this point?","Lines 523-524: What command does Hecuba give Priam? What reason does she provide for giving this command?","Lines 524-525: What does Hecuba do when she finishes speaking?"]})},{points:200,description:"Draw a picture which summarises lines 506-525 and add captions from the Latin text."},{points:100,description:"Write a summary of lines 506-525."}]})},{title:"Vocabulary (Lines 506-525)",password:"hugthehouseholdgods",exercise:i.a.createElement(X,{missions:[{points:300,description:"Complete Quizlet/Memrise \u201cLearn\u201d function.",exercise:i.a.createElement("div",null,i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://quizlet.com/_7s8fzw?x=1jqt&i=nczxg"},"Quizlet"),"\xa0",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.memrise.com/group/384443/"},"Memrise"),i.a.createElement("p",null,"(Print screen or photograph results as evidence)"))},{points:300,description:"Make vocabulary/phrase flashcards for this passage."},{points:100,description:"Complete the gaps by translating the vocabulary."}]})},{title:"Personal Response (Lines 506-525)",password:"iwishhectorwashere",exercise:i.a.createElement(A,{missions:[{points:300,description:"Annotate the blank copy of this passage of text with at least 8 stylistic points of interest.",exercise:"In your annotations, you must comment on any stylistic devices used and their effect.",compulsory:!0},{points:300,description:"Complete the examination-style questions for this passage."},{points:300,description:"Fill in your journal. You may wish to answer the prompt questions below and note down any other thoughts you have.",exercise:i.a.createElement(U,{questions:["What memory have you recovered?","How do you feel knowing that?","How are these things accentuated through the text?"]})},{points:200,description:"Create a list of possible examination-style questions for this passage."}]})}]}],ee=[$,K],te=(n={},Object(j.a)(n,K.ID,Q),Object(j.a)(n,$.ID,Z),n);var ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).navigateHome=function(){a.props.navigateHome()},a.showChangeModePrompt=function(){a.props.showChangeModePrompt(!0)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.state,n=(a=void 0===a?{}:a).navigation,o=void 0===n?{}:n,r=a.mode,s=void 0===r?{}:r,c=o.currentView,l=(c=void 0===c?{}:c).title,u=s.selectedLevel,d=s.selectedText;return i.a.createElement(v.a,{position:"relative"},i.a.createElement(b.a,null,i.a.createElement(g.a,{color:"inherit","aria-label":"Home",onClick:this.navigateHome,className:t.homeButton},i.a.createElement(E.a,null)),i.a.createElement(y.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.grow},l),d&&u?i.a.createElement(y.a,{variant:"subtitle1",color:"inherit",noWrap:!0},"Level: ",function(e){var t=ee.find((function(t){return t.ID===e}));return t?t.NAME:e}(u)," Text: ",function(e){var t=e.text,a=e.level,n=(te[a]||[]).find((function(e){return e.ID===t}));return n?n.NAME:t}({text:d,level:u})):void 0,i.a.createElement(g.a,{color:"inherit","aria-label":"Mode Selector",onClick:this.showChangeModePrompt},i.a.createElement(O.a,null))))}}]),t}(i.a.Component),ne=Object(m.a)((function(e){return{homeButton:{marginRight:20},grow:{flexGrow:1}}}),{withTheme:!0})(ae),oe=a(146),ie=a(147),re=a(148),se=a(149),ce=a(150),le=a(151),ue=a(91),de=a.n(ue),he=a(90),pe=a.n(he),me=a(89),fe=a.n(me),ve=a(87),be=a.n(ve),ge=a(88),ye=a.n(ge);a(108);function we(e){return(te[e.selectedLevel]||[]).find((function(t){return t.ID===e.selectedText}))||{}}function Ee(e){return{image:be.a,text:function(e){return we(e).HOME_TEXT}(e)}}function xe(e){return we(e).EXERCISES||[]}var Oe=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.state,a=(t=void 0===t?{}:t).unlockables,n=void 0===a?{}:a,o=t.mode,r=void 0===o?{}:o,s=n.shop,c=void 0!==s&&s,l=n.password,u=xe(r),d=function(e){var t=e.password;return e.exercises.findIndex((function(e){return e.password.toLowerCase()===t}))}({password:l,exercises:u});return i.a.createElement("div",null,i.a.createElement(oe.a,{subheader:i.a.createElement(ie.a,{component:"div"},"Exercises")},u.map((function(t,a){var n=t.title;return a<=d?i.a.createElement(oe.a,{key:n},i.a.createElement(re.a,{button:!0,onClick:function(){return e.props.navigateExercise(n)}},i.a.createElement(se.a,null,i.a.createElement(fe.a,null)),i.a.createElement(ce.a,{primary:n}))):void 0}))),i.a.createElement(le.a,null),c?i.a.createElement(oe.a,null,i.a.createElement(re.a,{button:!0,onClick:this.props.navigateShop},i.a.createElement(se.a,null,i.a.createElement(pe.a,null)),i.a.createElement(ce.a,{primary:"Shop"}))):void 0,i.a.createElement(oe.a,null,i.a.createElement(re.a,{button:!0,onClick:this.props.navigatePassword},i.a.createElement(se.a,null,i.a.createElement(de.a,null)),i.a.createElement(ce.a,{primary:"Enter Prompt"}))))}}]),t}(i.a.Component),je=Object(m.a)((function(e){return{}}),{withTheme:!0})(Oe),ke=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.state,n=e.navigateShop,o=e.navigatePassword,r=e.navigateExercise;return i.a.createElement("div",{className:t.root},i.a.createElement(je,{state:a,navigateShop:n,navigatePassword:o,navigateExercise:r}))}}]),t}(i.a.Component),Ce=Object(m.a)((function(e){return{root:{minWidth:240,width:240,height:"100%"}}}),{withTheme:!0})(ke),Se={id:"HOME",title:"Home"},Ne=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.state,n=Ee((a=void 0===a?{}:a).mode),o=n.text,r=n.image;return i.a.createElement("div",{className:t.root},i.a.createElement("div",{className:t.container},i.a.createElement("img",{className:t.teacher,src:r,alt:"teacher"}),i.a.createElement("div",{className:t.whiteboard},o)))}}]),t}(i.a.Component),Te=Object(m.a)((function(e){return{root:{position:"relative"},container:{position:"relative"},teacher:{display:"block",width:"100%"},whiteboard:{position:"absolute",left:"7%",top:"17%",overflow:"overlay",fontSize:18,wordWrap:"break-word",width:"46%",height:"38%"}}}),{withTheme:!0})(Ne),We={id:"SHOP",title:"Shop"},He=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,"SHOP")}}]),t}(i.a.Component),Pe=a(110),Ie=a(163),Le=a(155),Me={id:"PASSWORD",title:"Enter Prompt"},De=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({password:e.target.value})},a.submitPassword=function(){(0,a.props.setPassword)(a.state.password),a.setState({password:""})},a.state={password:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes;t.mode;return i.a.createElement("div",{className:a.root},i.a.createElement("div",{className:a.hbox},i.a.createElement(Pe.a,{className:a.paperContainer},i.a.createElement("div",{className:a.vbox},i.a.createElement(y.a,{variant:"h6"},"Please sign here"),i.a.createElement(Ie.a,{id:"password",label:"Password",type:"password",className:a.textField,value:this.state.password,onChange:this.handleChange,onKeyPress:function(t){"Enter"===t.key&&e.submitPassword()},margin:"normal",variant:"outlined"}),i.a.createElement(Le.a,{color:"primary",className:a.button,onClick:function(){return e.submitPassword()},value:"submit"},"Login"))),i.a.createElement("img",{src:ye.a,alt:"delivery",className:a.image})))}}]),t}(i.a.Component),Ae=Object(m.a)((function(e){return{root:{display:"flex",flexGrow:1,margin:40},button:{margin:e.spacing(1)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},vbox:{display:"flex",flexDirection:"column",alignItems:"center"},hbox:{display:"flex",flexDirection:"row"},paperContainer:{minWidth:300,height:200,padding:20},image:{height:200}}}),{withTheme:!0})(De),Be={id:"EXERCISE"},Re=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.state;return function(e){var t=e.mode,a=void 0===t?{}:t,n=e.navigation,o=(n=void 0===n?{}:n).currentView,i=void 0===o?{}:o,r=xe(a).find((function(e){return e.title===i.title}));return r?r.exercise:void 0}({mode:(e=void 0===e?{}:e).mode,navigation:e.navigation})||null}}]),t}(i.a.Component),Ye={HOME_ID:Se,SHOP_ID:We,PASSWORD_ID:Me,EXERCISE_ID:Be};var Ge=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.setPassword,n=e.state,o=(n=void 0===n?{}:n).navigation,r=void 0===o?{}:o,s=n.mode,c=void 0===s?{}:s,l=function(){switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id){case Se.id:return Te;case We.id:return He;case Me.id:return Ae;case Be.id:return Re;default:return function(){return i.a.createElement("div",null)}}}(r.currentView);return i.a.createElement("div",{className:t.root},i.a.createElement(l,{setPassword:a,state:{mode:c,navigation:r}}))}}]),t}(i.a.Component),_e=Object(m.a)((function(e){return{root:{margin:16,display:"flex",flexGrow:1}}}),{withTheme:!0})(Ge),qe=a(162),ze=a(154),Ve=a(161),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleLevelChange=function(e){a.setState({pendingLevel:e.target.value,pendingText:void 0})},a.handleTextChange=function(e){a.setState({pendingText:e.target.value})},a.handleSave=function(){var e=a.state,t=e.pendingLevel,n=e.pendingText;a.props.setMode({selectedLevel:t,selectedText:n})},a.handleClose=function(){a.props.showChangeModePrompt(!1)},a.getLevelOptions=function(){return ee.map((function(e){return{name:e.NAME,id:e.ID}}))},a.getTextOptions=function(){var e=a.state.pendingLevel;return(te[e]||[]).map((function(e){return{name:e.NAME,id:e.ID}}))},a.state={pendingLevel:void 0,pendingText:void 0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectedLevel,a=e.selectedText;t&&a?this.setState({pendingLevel:t,pendingText:a}):this.props.showChangeModePrompt(!0)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.showPrompt,n=e.selectedLevel,o=e.selectedText,r=this.state,s=r.pendingLevel,c=r.pendingText;return i.a.createElement(qe.a,{open:!!a,onClose:this.handleClose,disableBackdropClick:!0,disableEscapeKeyDown:!0},i.a.createElement("div",{className:t.modalContainer},i.a.createElement(y.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Settings"),i.a.createElement("div",{className:t.vbox},i.a.createElement("div",{className:t.hbox},i.a.createElement(y.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.settingLabel},"Exam Level"),i.a.createElement(ze.a,{className:t.formControl},i.a.createElement(Ve.a,{native:!0,inputProps:{name:"mode",id:"mode-selector"},className:t.select,value:s,onChange:this.handleLevelChange},i.a.createElement("option",{value:void 0}),this.getLevelOptions().map((function(e){var t=e.name,a=e.id;return i.a.createElement("option",{key:a,value:a},t)}))))),i.a.createElement("div",{className:t.hbox},i.a.createElement(y.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.settingLabel},"Text"),i.a.createElement(ze.a,{className:t.formControl},i.a.createElement(Ve.a,{native:!0,inputProps:{name:"mode",id:"mode-selector"},className:t.select,value:c,onChange:this.handleTextChange},i.a.createElement("option",{value:void 0}),this.getTextOptions().map((function(e){var t=e.name,a=e.id;return i.a.createElement("option",{key:a,value:a},t)}))))),i.a.createElement("div",{className:t.padding}),i.a.createElement("div",{className:"".concat(t.hbox," ").concat(t.alignRight)},i.a.createElement(Le.a,{color:"inherit","aria-label":"Save",onClick:this.handleSave,disabled:!s||!c},"Save"),i.a.createElement(Le.a,{color:"inherit","aria-label":"Cancel",onClick:this.handleClose,disabled:!n||!o},"Cancel")))))}}]),t}(i.a.PureComponent),Xe=Object(m.a)((function(e){return{modalContainer:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),position:"absolute",top:"25%",left:"50%",width:400,height:300,marginLeft:-200,marginTop:-150},formControl:{margin:e.spacing(1),minWidth:120},hbox:{display:"flex",flexDirection:"row"},vbox:{display:"flex",flexDirection:"column"},settingLabel:{width:120,textAlign:"right",margin:8},title:{marginBottom:20},alignRight:{justifyContent:"flex-end"},padding:{height:80}}}),{withTheme:!0})(Fe),Je=Ye.HOME_ID,Ue=Ye.SHOP_ID,Ke=Ye.PASSWORD_ID,Qe=Ye.EXERCISE_ID;function $e(e){var t=e.mode,a=void 0===t?{}:t,n=a.selectedLevel,o=a.selectedText,i=a.showPrompt,r=e[n],s=(r=void 0===r?{}:r)[o],c=void 0===s?{}:s,l=c.navigation,u=void 0===l?{}:l,d=c.unlockables;return{navigation:u,unlockables:void 0===d?{}:d,mode:{selectedLevel:n,selectedText:o,showPrompt:i}}}function Ze(e){var t=e.state,a=(e.applyCommand,e.applyState),n=e.changeMode,o=$e(t),i=o.navigation,r=void 0===i?{}:i,s=o.unlockables,l=void 0===s?{}:s,u=o.mode,d=void 0===u?{}:u,h=function(e){return Object(c.a)({},r,{currentView:e})},p=function(e){var t=h(e);a({navigation:t})};return{navigateHome:function(){return p(Je)},navigateShop:function(){return p(Ue)},navigatePassword:function(){return p(Ke)},navigateExercise:function(e){return p(Object(c.a)({},Qe,{title:e}))},setPassword:function(e){var t=function(e){var t=e.password,a=e.mode,n=e.unlockables,o=void 0===n?{}:n,i=t.toLowerCase(),r=o.password,s=xe(a),c=s.findIndex((function(e){var t=e.password;return(void 0===t?"":t).toLowerCase()===i})),l=s.findIndex((function(e){var t=e.password;return(void 0===t?"":t).toLowerCase()===r}));return{isNew:c>l,isUsed:-1!==c&&c<=l}}({password:e,mode:d,unlockables:l}),n=t.isNew,o=t.isUsed;if(n){var i=function(e){return Object(c.a)({},l,{password:e.toLowerCase()})}(e);a({unlockables:i}),alert("You have unlocked a new exercise!")}else o?alert("You have already unlocked this exercise."):alert("Sorry, I did recognise that password.")},setMode:function(e){var t=e.selectedLevel,a=e.selectedText;n({selectedLevel:t,selectedText:a,showPrompt:!1}),p(Je)},showChangeModePrompt:function(e){n({showPrompt:!!e})}}}var et=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a.subscription=void 0,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props.store$.subscribe((function(t){e.setState(Object(c.a)({},t,{ready:!0}))}))}},{key:"componentWillUnmount",value:function(){this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0)}},{key:"render",value:function(){if(!this.state.ready)return i.a.createElement("div",null);var e=this.props,t=e.classes,a=e.applyCommand,n=e.applyState,o=e.changeMode,r=$e(this.state),s=r.navigation,c=void 0===s?{}:s,l=r.unlockables,u=void 0===l?{}:l,d=r.mode,h=void 0===d?{}:d,p=Ze({state:this.state,applyCommand:a,applyState:n,changeMode:o}),m=p.navigateHome,v=p.showChangeModePrompt,b=p.navigateShop,g=p.navigatePassword,y=p.navigateExercise,w=p.setPassword,E=p.setMode;return i.a.createElement("div",{className:t.root},i.a.createElement(f.a,null),i.a.createElement("div",{className:t.vbox},i.a.createElement(ne,{state:{navigation:c,mode:h},navigateHome:m,showChangeModePrompt:v}),i.a.createElement("div",{className:t.hbox},i.a.createElement(Ce,{state:{unlockables:u,mode:h},navigateShop:b,navigatePassword:g,navigateExercise:y}),i.a.createElement(_e,{state:{navigation:c,mode:h},setPassword:w}))),i.a.createElement(Xe,Object.assign({},h,{setMode:E,showChangeModePrompt:v})))}}]),t}(i.a.Component),tt=Object(m.a)((function(e){return{root:{display:"flex",height:"100%",width:"100%"},hbox:{display:"flex",flexDirection:"row",flexGrow:1},vbox:{display:"flex",flexDirection:"column",flexGrow:1}}}),{withTheme:!0})(et),at=a(156),nt=a(92),ot=a(160),it=a(157),rt=a(158),st="classics",ct={};var lt=new at.a(function(){var e=function(){try{var e=localStorage.getItem(st);return e?JSON.parse(e):ct}catch(t){return console.log("Error getting internal state, returning default"),ct}}();return Object.keys(te).forEach((function(t){e[t]||(e[t]={},te[t].forEach((function(a){var n=a.ID;e[t][n]||(e[t][n]={})})))})),console.log(e),e}()),ut=lt.asObservable();ut.pipe(Object(it.a)(1)).subscribe((function(e){console.log(e),localStorage.setItem(st,JSON.stringify(e))}));var dt=new nt.a,ht=dt.asObservable(),pt=new nt.a,mt=pt.asObservable();Object(ot.a)(mt.pipe(Object(rt.a)(ut,(function(e,t){var a=t.mode,n=e(void 0===a?{}:a);return Object(c.a)({},t,{mode:n})}))),ht.pipe(Object(rt.a)(ut,(function(e,t){var a=e($e(t)),n=t.mode,o=n.selectedLevel,i=n.selectedText;return t[o][i]=a,Object(c.a)({},t)})))).subscribe((function(e){return lt.next(e)})),s.a.render(i.a.createElement(tt,{store$:ut,applyCommand:function(e){return dt.next(e)},applyState:function(e){return dt.next((function(t){return Object(c.a)({},t,{},e)}))},changeMode:function(e){return pt.next((function(t){return Object(c.a)({},t,{},e)}))}}),document.getElementById("root"))},87:function(e,t,a){e.exports=a.p+"static/media/teacher-square.5b5cb9f1.png"},88:function(e,t,a){e.exports=a.p+"static/media/hermes.825a2cdd.png"},98:function(e,t,a){e.exports=a(109)}},[[98,1,2]]]);
//# sourceMappingURL=main.0c93d436.chunk.js.map