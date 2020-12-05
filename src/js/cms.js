
import React from "react";
import CMS from "netlify-cms-app";

import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import ArticleCulture from "./cms-preview-templates/article_culture";
import ArticleEnvironment from "./cms-preview-templates/article_environment";
import ArticleTechnology from "./cms-preview-templates/article_technology";
import ArticleHealth from "./cms-preview-templates/article_health";
import ContactPreview from "./cms-preview-templates/contact";
import Quiz from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("article_culture", ArticleCulture);
CMS.registerPreviewTemplate("environment", ArticleEnvironment);
CMS.registerPreviewTemplate("article_technology", ArticleTechnology);
CMS.registerPreviewTemplate("article_health", ArticleHealth);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("quiz", Quiz);
CMS.init();
