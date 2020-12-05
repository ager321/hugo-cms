exports.handler = async function(event, context) {
    const {identity, user} = context.clientContext;
    document.location.href = "/";
}