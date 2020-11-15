import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("strona g³ówna", HomePreview);
CMS.registerPreviewTemplate("artyku³y", PostPreview);
CMS.registerPreviewTemplate("sklep", ProductsPreview);
CMS.registerPreviewTemplate("kontakt", ContactPreview);
CMS.init();
