if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        console.log(user);
        document.location.href = "/admin/";
      });
    }
  });
}
