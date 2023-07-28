module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-class-properties',
        // Add the plugin below
        '@babel/plugin-proposal-private-property-in-object',
    ],
};
