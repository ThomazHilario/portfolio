const env = import.meta.env

export default {
    GITHUB_USERNAME: env.VITE_GITHUB_USERNAME,
    GITHUB_REPOSITORIES_TYPE: env.VITE_GITHUB_REPOSITORIES_TYPE
} as ImportMetaEnv[string]