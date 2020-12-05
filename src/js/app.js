if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
        if (!user) {
                window.netlifyIdentity.on("login", (user) => {
                    if (user.app_metadata.roles.includes("editor"))
                    {
                        document.location.href = "/admin/";
                    }
                    else
                    {
                        document.location.href = "/404/";
                    }

                });

        }
        else
        {
            if (!user.app_metadata.roles.includes("editor"))
            {
                document.location.href = "/404/";
            }
        }
    });
}

