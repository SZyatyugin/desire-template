import main from "./scss/main.scss";
import about from "./pages/about/about.scss";
import blog from "./pages/blog/blog.scss";
import contacts from "./pages/contacts/contacts.scss";
import * as components from "./js";

import store from "./utils/state";
import db from "./db";
import MainPageAnimation from "./pages/index";
import AboutPage from "./pages/about/about";
import GalleryPage from "./pages/gallery/gallery";
import BlogPage from "./pages/blog/blog";
import ArticlePage from "./pages/article/article";
import Contacts from "./pages/contacts/contacts";
import APlugin from "./js/components/animations/animation-plugin";

import {
  fadeOut,
  fadeOutHeader,
  animateLTRT,
  animateSplitChars,
  animateSplitWords,
  animateLine,
  animateBTTPZoom,
  fadeOutBottomStagger,
  rangeAnimate,
} from "./js/components/animations/animations";

const mainPageAnimation = new MainPageAnimation();
const aboutPage = new AboutPage();
const galleryPage = new GalleryPage();
const blogPage = new BlogPage();
const articlePage = new ArticlePage();
const contactsPage = new Contacts();
const aPlugin = new APlugin();

aboutPage.init(db);
galleryPage.init(db);
blogPage.init(db);
articlePage.init(db);
contactsPage.init(db);
aPlugin.init();

fadeOut(aPlugin);
fadeOutHeader(aPlugin);
animateLTRT(aPlugin);
animateSplitChars(aPlugin);
animateSplitWords(aPlugin);
animateLine(aPlugin);
animateBTTPZoom(aPlugin);
fadeOutBottomStagger(aPlugin);
rangeAnimate(aPlugin);
