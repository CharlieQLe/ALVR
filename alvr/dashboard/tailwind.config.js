module.exports = {
    purge: ["./src/**/*.rs"],
    darkMode: "class",
    theme: {
        extend: {
            minWidth: {
                56: "14rem",
            },
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ["disabled"],
        },
    },
    plugins: [],
}
