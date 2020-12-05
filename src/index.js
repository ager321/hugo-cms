import "./css/main.css";

console.log(netlifyIdentity.currentUser().app_metadata.roles.includes("editor"));
console.log(netlifyIdentity.currentUser().app_metadata.roles);