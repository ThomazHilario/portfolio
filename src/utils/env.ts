const env = import.meta.env

export default {
    PERSONAL_NAME: env.VITE_PERSONAL_NAME,
    GITHUB_USERNAME: env.VITE_GITHUB_USERNAME,
    GITHUB_REPOSITORIES_TYPE: env.VITE_GITHUB_REPOSITORIES_TYPE
} as ImportMetaEnv[string]