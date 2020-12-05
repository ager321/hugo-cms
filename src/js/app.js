if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
        console.log("0");
        if (!user) {
                window.netlifyIdentity.on("login", (user) => {
                    console.log("1");
                    if (user.app_metadata.roles.includes("editor"))
                    {console.log("2");
                        document.location.href = "/admin/";
                    }
                    else
                    {console.log("3");
                        document.location.href = "/404/";
                    }

                });

        }
        else
        {console.log("4");
            console.log(user.app_metadata.roles)
            if (!user.app_metadata.roles.includes("editor"))
            {console.log("5");
                document.location.href = "/404/";
            }
        }
    });
}

