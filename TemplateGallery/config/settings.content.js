/*------------------------------------*/
// TEMPLATE CONTENT CONFIGURATION
/*------------------------------------*/

// SITE TITLE. USED IN NAVIGATION AND PAGE TITLE
pmgConfig.siteTitle = "";

// SITE HEADING. USED ON HOME PAGE
pmgConfig.siteHeading = "Story map templates";

// SITE INTRO TEXT. USED ON HOME PAGE
pmgConfig.siteIntro = "Templates provide an easy way to publish your own story map (without having to write code). Each template uses a distinct story-telling technique. You supply the web map and the words. File downloads include the web files you will need, plus a readme file explaining configuration.";

/*------------------------------------*/
// NAVIGATION AREA LINKS
/*------------------------------------*/

pmgConfig.showNavLinks = false; // SHOW NAVIGATION LINKS. Set to false to not display links in the top banner.
pmgConfig.navLinks = [ // NAVIGATION LINKS. 
	// LINK 1
	{
		title: "...on ArcGIS Online",
		url: 'http://story.maps.arcgis.com/home/index.html'
	}, // COMMA
	// LINK 2
	{
		title: "About Story Maps",
		url: 'http://storymaps.esri.com/wordpress/?page_id=17'
	}
	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

/*------------------------------------*/
// SIDE BAR
/*------------------------------------*/

pmgConfig.rightSideLinksTitle = 'Resources & links';
pmgConfig.showRightSideLinks = true; // SHOW LINKS ON RIGHT SIDE?
pmgConfig.rightLinks = [
	// LINK 1
	{
		title: "> Storytelling with Maps Home",
		url: 'http://storymaps.esri.com/home'
	},
	// LINK 2
	{
		title: "> Storytelling with Maps Blog",
		url: 'http://blogs.esri.com/esri/esri-insider/category/storytelling-maps'
	},
	// LINK 3
	{
		title: "> Maps by the community",
		url: 'http://storymaps.esri.com/partnerstories'
	},
	// LINK 4
	{
		title: "> Workflows & Best Practices",
		url: 'http://storymaps.esri.com/downloads/Building%20Story%20Maps.pdf'
	},
	// LINK 5
	{
		title: "> Storytelling white paper",
		url: 'http://storymaps.esri.com/downloads/Telling%20Stories%20with%20Maps.pdf'
	},
	// LINK 6
	{
		title: "> Designing Pop-ups",
		url: 'http://storymaps.esri.com/downloads/DesigningWebMapPopups.pdf'
	},
	// LINK 7
	{
		title: "> World Map of Story Maps",
		url: 'http://storymaps.esri.com/stories/2013/storylocator'
	},
	// LINK 8
	{
		title: "> Video: A map for every story",
		url: 'http://www.youtube.com/watch?v=2dwZZPj707I&feature=share&list=PL4F5158389507E395'
	},
	// LINK 9
	{
		title: "> About the Story Maps team",
		url: 'http://storymaps.esri.com/aboutus'
	},
	// LINK 10
	{
		title: "> Follow us on Twitter",
		url: 'http://twitter.com/EsriStoryMaps'
	}

	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

// CONTENT ABOVE LINKS

pmgConfig.rightHeading = "About story maps";
pmgConfig.rightContent = "Story maps combine intelligent Web maps with Web applications and templates that incorporate text, multimedia, and interactive functions. Story maps inform, educate, entertain, and inspire people about a wide variety of topics.";

// ADDITIONAL CONTENT. BELOW LINKS

pmgConfig.rightHeading2 = "Contact us"; // REMOVE TO NOT SHOW
pmgConfig.rightContent2 = "<a href='http://forums.arcgis.com/forums/264-Story-Maps'>> Story Maps Forum</a>"; // REMOVE TO NOT SHOW

/*------------------------------------*/
// BOTTOM FOOTER
/*------------------------------------*/

// FOOTER TITLE
pmgConfig.footerHeading = "About maps.&lt;YourOrg&gt;"; // FOOTER TITLE

// FOOTER DESCRIPTION
pmgConfig.footerDescription = "maps.&lt;YourOrg&gt; helps people find commonly used layers and maps for a better understanding of national issues and trends. Quick access to this authoritative geospatial information supports situational awareness and better decision making across the world."; // FOOTER TEXT

// FOOTER LOGO
pmgConfig.footerLogo = 'graphics/logo/yourLogo.png'; // 200 pixels wide x 85 pixels high. Will scale if bigger.
pmgConfig.footerLogoURL = 'http://www.yoursite.com/'; // URL to go to when the logo is clicked

// FOOTER EMAIL
pmgConfig.footerEmail = 'email@yourorg.com'; // YOUR EMAIL
pmgConfig.footerEmailSubject = "Your Site Gallery";
pmgConfig.footerEmailBody = "Hello ";

// END
