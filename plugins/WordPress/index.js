function withWordPress (nextConfig = {}) {
    console.log( "WithWordPress!")
    return {
        ...nextConfig,
        publicRuntimeConfig: {
            test: "value"
        }
    }
}

module.exports = withWordPress;
