if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
        if (!user) {
            if (netlifyIdentity.currentUser().app_metadata.roles.includes("editor")) {
                window.netlifyIdentity.on("login", () => {
                    if (netlifyIdentity.currentUser().app_metadata.roles.includes("editor")) {
                        document.location.href = "/admin/";
                    }
                });
            }
        }
    });
}
