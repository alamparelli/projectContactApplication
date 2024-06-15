// eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-useless-return" : "error",
            "no-var": "error",
            "semi": "error",
            "no-await-in-loop": "error",
            "no-constructor-return": "error",
            "accessor-pairs": "error",
            "dot-notation": "error",
            "eqeqeq": "error",
        }
    }
];